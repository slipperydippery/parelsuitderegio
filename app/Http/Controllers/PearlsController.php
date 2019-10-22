<?php

namespace App\Http\Controllers;

use App\Pdf;
use Session;
use App\Pearl;
use App\Theme;
use JavaScript;
use App\Category;
use App\Meerinfo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Redirect;

class PearlsController extends Controller
{
    public function __construct()
    {
        // $this->middleware('csrf', ['except' => 'show']);
        $this->middleware('auth', ['except' => 'show']);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $pearls = Pearl::get();
        return view ('pearls.index', compact('pearls'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $categories = Category::all();
        $themes = Theme::get();
        return view ('pearls.create', compact('categories', 'themes'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // return $request->all();
        // validation
        
        $pearl = Pearl::create([
            'title' => $request->title,
            'subtitle' => $request->subtitle,
            'description' => $request->description
        ]);

        foreach($request->categories as $category) {
            $category = Category::find($category);
            $pearl->categories()->save($category);
        }

        foreach($request->themes as $theme) {
            $theme = Theme::find($theme);
            $pearl->themes()->save($theme);
        }

        if(Input::hasFile('thumbnail')){
            $imagename = 'parel' . $pearl->id . '.png';

            $file = Input::file('thumbnail');
            $file->move(public_path() . '/video/poster', $imagename);
        }

        if(Input::hasFile('video')){
            $videoname = 'parel' . $pearl->id . '.mp4';

            $file = Input::file('video');
            $file->move(public_path() . '/video', $videoname);
        }
        return redirect()->route('pearls.show', $pearl);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Pearl $pearl)
    {
        $pearlid = $pearl->id;
        return view('pearls.pearl', compact('pearl', 'pearlid'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Pearl $pearl)
    {
        $categories = Category::get();
        $themes = Theme::get();
        $unrelated = Pearl::all()->diff($pearl->links)->except($pearl->id)->pluck('title', 'id');
        return view ('pearls.edit', compact('pearl', 'categories', 'themes', 'unrelated'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // return $request->all();
        $pearl = PEARL::findOrFail($id);
        $pearl->title = $request->title;
        $pearl->description = $request->description;
        $pearl->save();
        foreach(Category::all() as $category){
            if (in_array($category->id, $pearl->categories()->pluck('id')->toArray()) && ! in_array($category->id, $request->categories)) {
                $pearl->categories()->detach($category);
            } else if (! in_array($category->id, $pearl->categories()->pluck('id')->toArray()) && in_array($category->id, $request->categories)){
                $pearl->categories()->save($category);
            }
        }
        foreach(Theme::all() as $theme){
            if (in_array($theme->id, $pearl->themes()->pluck('id')->toArray()) && ! in_array($theme->id, $request->themes)) {
                $pearl->themes()->detach($theme);
            } else if (! in_array($theme->id, $pearl->themes()->pluck('id')->toArray()) && in_array($theme->id, $request->themes)){
                $pearl->themes()->save($theme);
            }
        }
        if(Input::hasFile('thumbnail')){
            $imagename = 'parel' . $pearl->id . '.png';

            $file = Input::file('thumbnail');
            $file->move(public_path() . '/video/poster', $imagename);
        }

        if(Input::hasFile('video')){
            $videoname = 'parel' . $pearl->id . '.mp4';

            $file = Input::file('video');
            $file->move(public_path() . '/video', $videoname);
        }
        return back();
    }

    public function editlinks(Pearl $pearl)
    {
        $unrelated = Pearl::all()->diff($pearl->links)->except($pearl->id)->pluck('title', 'id');
        return view('pearls.editlinks', compact('pearl', 'unrelated'));
    }

    public function newlink(Request $request)
    {
        $pearl = Pearl::findOrFail($request->pearl);
        $link = Pearl::findOrFail($request->link);
        $pearl->links()->save($link);
        $link->links()->save($pearl);

        return back();
    }

    public function removelink(Pearl $pearl, Pearl $link, Request $request)
    {
        $pearl->links()->detach($link);
        $link->links()->detach($pearl);
        return back();
    }

    public function editmeerinfos(Pearl $pearl)
    {
        return view('pearls.editmeerinfos', compact('pearl'));
    }

    public function newmeerinfo(Request $request)
    {
        $ismail = false;
        if($request->ismail) {
            $ismail = true;
        }
        $pearl = Pearl::findOrFail($request->pearl);
        $meerinfo = Meerinfo::create([
                'title' => $request->meerinfotitle, 
                'alt' => $request->meerinfotitle,
                'adress' => $request->meerinfolink,
                'ismail' => $ismail,
                'pearl_id' => $pearl->id
        ]);
        $pearl->meerinfos()->save($meerinfo);
        return back();
    }

    public function removemeerinfo(Pearl $pearl, Meerinfo $meerinfo, Request $request)
    {
        $meerinfo->delete();
        return back();
    }

    public function editpdfs(Pearl $pearl)
    {
        return view('pearls.editpdfs', compact('pearl'));
    }

    public function newpdf(Request $request)
    {
        $pearl = Pearl::findOrFail($request->pearl);
        if(Input::hasFile('pdf')){
            $pdfname = preg_replace('/\s+/', '', $request->pdftitle) . preg_replace('/\s+/', '', $pearl->title) . '.pdf';
            $file = Input::file('pdf');
            $file->move(public_path() . '/pdf', $pdfname);
            $pdf = Pdf::create([
                'title' => $request->pdftitle,
                'description' => $request->pdftitle,
                'adress' => $pdfname,
            ]);
            $pearl->pdfs()->save($pdf);
        }

        return back();
        
    }

    public function removepdf(Pearl $pearl, Pdf $pdf, Request $request)
    {
        $pdf->delete();
        return back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
 