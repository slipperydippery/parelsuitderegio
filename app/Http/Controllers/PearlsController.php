<?php

namespace App\Http\Controllers;

use Session;
use App\Pearl;
use JavaScript;
use App\Category;
use Illuminate\Http\Request;
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
        return view ('pearls.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return $request->all();
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
        $unrelated = Pearl::all()->diff($pearl->links)->except($pearl->id)->pluck('title', 'id');
        return view ('pearls.edit', compact('pearl', 'categories', 'unrelated'));
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
        return back();
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
 