<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Meerinfo extends Model
{
	protected $guarded = [];
	
    public function pearls()
    {
    	return $this->belongsTo('App\Pearl');
    }
}
