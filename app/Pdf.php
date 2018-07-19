<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pdf extends Model
{
	protected $guarded = [];
	
    public function pearls()
    {
    	return $this->belongsToMany('App\Pearl');
    }
}
