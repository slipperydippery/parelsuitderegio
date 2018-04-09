@extends('layouts.master')

@section('content')
    <div id="parelsuitderegio">
	    <div class="row">
	        <div class="pearls">
	            <div class="row entree" >
	                <div class="col-xs-12">
	                    <h1 class="programmalijn">Parels uit de regio</h1>   
	                    <div class="introtext">
	                    <p>Voion presenteert 24 parels uit de regio. Prachtige verhalen van scholen in het voortgezet onderwijs die u inspireren en helpen bij:
	                    <ul>
	                        <li>opleiding & professionalisering</li>
	                        <li>arbeidsmarkt en mobiliteit</li>
	                        <li>veilig en gezond werken</li>
	                    </ul>
	                        Wij presenteren de parels dit jaar een voor een. Klik op de animatiefilm voor een overzicht van de parels of op een parel hieronder.</p>
	                    </div>
	                </div>
	                <div class="overview--video col-md-10 col-md-offset-1">
	                    <video 
	                        preload="auto" 
	                        id="intro-video"
	                        class="video-js vjs-big-play-centered vjs-16-9" 
	                        poster="/video/poster/introductie.png"
	                        data-setup="{}" controls
	                    >
	                        <source src="/video/test2.mp4" type="video/mp4">
	                        <p class="vjs-no-js">
	                            To view this video please enable JavaScript, and consider upgrading to a web browser that
	                            <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
	                        </p>
	                    </video>
	                    <div class="videooverlay" id="videooverlay">
	                        <div class="videooverlay--content">
	                            <a href="{{ URL::to('pearls/1')}}">
	                                <div class="csspearl csspearl-1"></div>
	                                <span class="csspearl--description">Tweedegraads PLUS</span>
	                            </a>
	                            <a href="{{ URL::to('pearls/2')}}">
	                                <div class="csspearl csspearl-2"></div>
	                                <span class="csspearl--description">Slimmer Werken TV</span>
	                            </a>
	                            <a href="{{ URL::to('pearls/3')}}">
	                                <div class="csspearl csspearl-3"></div>
	                                <span class="csspearl--description">Banenafspraak</span>
	                            </a>
	                        </div>
	                    </div>
	                    <pearllistfilter></pearllistfilter>
	                </div>
	            </div>
	        </div>

	    </div>
        <div class="row">
            <pearllist :pearlid=0></pearllist>
        </div>
    </div>
@stop