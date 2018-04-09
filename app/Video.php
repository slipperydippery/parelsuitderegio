<?php

namespace App;

use App\Pearl;
use Illuminate\Database\Eloquent\Model;

class Video extends Model
{
    public function pearls()
    {
    	return $this->belongsTo('App\Pearl');
    }
}
