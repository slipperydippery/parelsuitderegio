<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', ['as' => 'welcome', 'uses' => 'PagesController@welcome']);

Route::get('/test', function () {
	return view('test');
});

Route::get('factsheet', ['as' => 'factsheet', 'uses' => 'PagesController@factsheet']);
Route::resource('pearls', 'PearlsController');
Route::post('/pearls/links', ['as' => 'pearls.newlink', 'uses' => 'PearlsController@newlink']);
// Route::post('/pearls/removelinlink', ['as' => 'pearls.removelink', 'uses' => 'PearlsController@removelink']);
Route::post('/pearls/{pearl}/links/{link}/remove', ['as' => 'pearls.removelink', 'uses' => 'PearlsController@removelink']);
Route::resource('videos', 'VideosController');
Route::get('videos/createForPearl/{pearl}', ['as' => 'videos.createForPearl', 'uses' => 'VideosController@createForPearl']);
Route::post('/videos/poster', ['as' => 'videos.updatePoster', 'uses' => 'VideosController@updatePoster']);

// Route::resource('pearldescriptions', 'PearldescriptionsControler');
// Route::resource('pearlfactsheets', 'PearlfactsheetsControler');
// Route::resource('pearlmanuals', 'PearlmanualsControler');


Auth::routes();

Route::get('/home', 'HomeController@index');
