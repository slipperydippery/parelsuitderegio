<?php

namespace App;

use App\Video;
use Illuminate\Database\Eloquent\Model;

class Pearl extends Model
{
    public function links()
    {
    	return $this->belongsToMany('App\Pearl', 'link_pearl', 'link_id', 'pearl_id');
    }

    public function categories()
    {
    	return $this->belongsToMany('App\Category');
    }

    public function video()
    {
    	return $this->hasOne('App\Video');
    }

    public function pdfs()
    {
        return $this->belongsToMany('App\Pdf');
    }

    public function meerinfos()
    {
        return $this->hasMany('App\Meerinfo');
    }
}
