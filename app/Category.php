<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    public function pearls()
    {
    	return $this->belongsToMany('App\Pearl');
    }
}
