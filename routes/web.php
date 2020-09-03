<?php

Auth::routes();

Route::get('/', ['as' => 'welcome', 'uses' => 'PagesController@welcome']);

Route::get('/test', function () {
	return view('test');
});

Route::get('digitaaljaarboek', ['as' => 'digitaaljaarboek', 'uses' => 'PagesController@digitaaljaarboek']);
Route::get('factsheet', ['as' => 'factsheet', 'uses' => 'PagesController@factsheet']);
Route::resource('pearls', 'PearlsController');
// Route::post('/pearls/removelinlink', ['as' => 'pearls.removelink', 'uses' => 'PearlsController@removelink']);

Route::post('/pearls/links', ['as' => 'pearls.newlink', 'uses' => 'PearlsController@newlink']);
Route::get('/pearls/{pearl}/links/edit', ['as' => 'pearls.editlinks', 'uses' => 'PearlsController@editlinks']);
Route::post('/pearls/{pearl}/links/{link}/remove', ['as' => 'pearls.removelink', 'uses' => 'PearlsController@removelink']);

Route::post('/pearls/meerinfos', ['as' => 'pearls.newmeerinfo', 'uses' => 'PearlsController@newmeerinfo']);
Route::get('/pearls/{pearl}/meerinfos/edit', ['as' => 'pearls.editmeerinfos', 'uses' => 'PearlsController@editmeerinfos']);
Route::post('/pearls/{pearl}/meerinfos/{meerinfo}/remove', ['as' => 'pearls.removemeerinfo', 'uses' => 'PearlsController@removemeerinfo']);

Route::post('/pearls/pdfs', ['as' =>'pearls.newpdf', 'uses' => 'PearlsController@newpdf']);
Route::get('/pearls/{pearl}/pdfs/edit', ['as' => 'pearls.editpdfs', 'uses' => 'PearlsController@editpdfs']);
Route::post('/pearls/{pearl}/pdfs/{pdf}/remove', ['as' => 'pearls.removepdf', 'uses' => 'PearlsController@removepdf']);


Route::resource('videos', 'VideosController');
Route::get('videos/createForPearl/{pearl}', ['as' => 'videos.createForPearl', 'uses' => 'VideosController@createForPearl']);
Route::post('/videos/poster', ['as' => 'videos.updatePoster', 'uses' => 'VideosController@updatePoster']);


// Route::resource('pearldescriptions', 'PearldescriptionsControler');
// Route::resource('pearlfactsheets', 'PearlfactsheetsControler');
// Route::resource('pearlmanuals', 'PearlmanualsControler');



Route::get('/home', 'HomeController@index');
