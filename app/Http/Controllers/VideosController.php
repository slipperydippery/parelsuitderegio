<?php

namespace App\Http\Controllers;

use App\Pearl;
use Illuminate\Http\Request;

class VideosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $pearllist = Pearl::pluck('title', 'id');
        $selectid = 0;
        return view ('videos.create', compact('pearllist', 'selectid'));
    }

    public function createForPearl(Pearl $pearl)
    {
        $pearllist = Pearl::pluck('title', 'id');
        $selectid = $pearl->id;
        return view ('videos.create', compact('pearllist', 'selectid'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $pearl = Pearl::findOrFail($request->pearl);
        $file = request()->file('video');
        $ext = $file->extension();
        $file->storeAs('/public/videos/' . $request->pearl, 'video.' . $ext);
        $pearl->video->adress = 'storage/videos/' . $request->pearl . '/video.' . $ext;
        $pearl->video->save();
        return back();
    }

    public function updatePoster(Request $request)
    {
        $pearl = Pearl::findOrFail($request->pearl);
        $file = request()->file('poster');
        $ext = $file->extension();
        $file->storeAs('/public/videos/' . $request->pearl, 'poster.' . $ext);
        $pearl->video->poster = 'storage/videos/' . $request->pearl . '/poster.' . $ext;
        // return $pearl->video->poster;
        $pearl->video->save();
        return back();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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
        //
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
