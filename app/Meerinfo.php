<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Meerinfo extends Model
{
    public function pearls()
    {
    	return $this->belongsTo('App\Pearl');
    }
}
