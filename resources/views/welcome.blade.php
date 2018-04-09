@extends('layouts.master')

@section('content')
    <div id="parelsuitderegio">
	    <div class="row">
	        @include('pages.welcome')
	    </div>
        <div class="row">
            <pearllist :pearlid=0></pearllist>
        </div>
    </div>
@stop

@section('additional_scripts')
    <script src="http://vjs.zencdn.net/5.17.0/video.js"></script>
	<script src="/js/video.js"></script>
@stop