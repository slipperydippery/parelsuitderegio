<?php

namespace App\Http\Controllers;

use Session;
use JavaScript;
use Illuminate\Http\Request;

class PagesController extends Controller
{
  public function factsheet()
  {
      return view ('pages.factsheet');
  }

  public function welcome()
  {
  		$visited = false;
  		if(Session::get('visited')){
  		    $visited = true;
  		}
  		Session::put('visited', true);
  		JavaScript::put([
  		    'visited' => $visited
  		]);

  	    return view('welcome');
  }
}
