@extends('layouts.master')

@section('content')

@php
    $autoplay = isset($_GET['autoplay']) ? $_GET['autoplay'] : '';
@endphp

<div id="parelsuitderegio" class="clearfix">
   <div class="row pearls singlepearl clearfix" name="singlepearl">
        <div class="col-lg-4 col-xs-12">
            <div class="row backicon__container">
                    <a href="{{ URL::to('/') }}" title="Terug naar alle parels">
                    <div class="icon backicon">
                        <svg class="icon--back icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 26.676 26.676" xml:space="preserve">
                            <g class="icon--back icon">
                                <path  d="M26.105,21.891c-0.229,0-0.439-0.131-0.529-0.346l0,0c-0.066-0.156-1.716-3.857-7.885-4.59   c-1.285-0.156-2.824-0.236-4.693-0.25v4.613c0,0.213-0.115,0.406-0.304,0.508c-0.188,0.098-0.413,0.084-0.588-0.033L0.254,13.815   C0.094,13.708,0,13.528,0,13.339c0-0.191,0.094-0.365,0.254-0.477l11.857-7.979c0.175-0.121,0.398-0.129,0.588-0.029   c0.19,0.102,0.303,0.295,0.303,0.502v4.293c2.578,0.336,13.674,2.33,13.674,11.674c0,0.271-0.191,0.508-0.459,0.562   C26.18,21.891,26.141,21.891,26.105,21.891z"></path>
                            </g>
                        </svg>
                        <span class="icon--accompanyingtext">terug naar alle parels</span>
                    </div>
                </a>
            </div>
            <video 
                preload="auto" 
                id="singlepearl-video"
                class="video-js vjs-big-play-centered vjs-16-9 vjs-nofull" 
                poster="/video/poster/parel{{ $pearl->id }}.png"
                <?= $autoplay?'autoplay':'' ?>
                data-setup="{}" controls
            >
                <source src="/video/parel{{ $pearl->id }}.mp4" type="video/mp4" >,
                <p class="vjs-no-js">
                    To view this video please enable JavaScript, and consider upgrading to a web browser that
                    <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
                </p>
            </video>
        </div>
        <div class="col-lg-8 col-xs-12">
            <div class="row contentelement pearlinfo">
                <h2>{{ $pearl->title }}  </h2> 
                <div>
                    <p><b> {{ $pearl->subtitle }} </b></p>
                    <?php 
                        $paragraphs = explode(PHP_EOL, $pearl->description);
                    ?>
                    <span>
                        @foreach($paragraphs as $paragraph)
                            <p>{{{ $paragraph }}}</p>
                        @endforeach
                    </span>
                        <br>
                </div>
            </div> 
             <div class="row ">
                @foreach($pearl->pdfs as $pdf)
                    <div class="col-md-4">
                        <a href="/pdf/{{ $pdf->adress }}" class="btn">
                            {{ $pdf->title }}
                        </a>
                    </div>
                @endforeach
            </div>
        </div>       
    </div>
    <div class="row pearls row--social clearfix">
        <div class="col-xs-12 icons icons--social">
                <a href="https://www.linkedin.com/shareArticle?mini=true&url=http%3A//parelsuitderegio.nl/pearls/{{ $pearl->id}}&title={{ $pearl->title }}&summary={{ $pearl->subtitle }}&source=">
                    <div class="icon icon--social linkedin"></div>
                </a>
                <a href="https://twitter.com/home?status=Ik%20kwam%20dit%20verhaal%20van%20Voion%20tegen%20op%20www.parelsuitderegio.nl/pearls/{{ $pearl->id}}.%20Inspirerend%20voor%20iedereen%20die%20werkt%20in%20het%20voortgezet%20onderwijs!">

                    <div class="icon icon--social twitter"></div>
                </a>
                <a href="https://www.facebook.com/sharer/sharer.php?u=http%3A//parelsuitderegio.nl/pearls/{{ $pearl->id }}/">
                    <div class="icon icon--social facebook"></div>
                </a>
                @if($pearl->meerinfos->count())
                    <ul class="meerinfo">
                        <a href="#">Meer info</a>
                        @foreach($pearl->meerinfos as $meerinfo)
                            @if($meerinfo->ismail == 0)
                                <li> <a href="{{ $meerinfo->adress }}" target="_blank"> {{ $meerinfo->title }} </a></li>
                            @else
                                <li> <a href="mailto:{{ $meerinfo->adress }}" target="_blank"> {{ $meerinfo->title }} </a></li>
                            @endif
                        @endforeach
                    </ul>
                @endif
        </div>   
    </div>
    <div class="row">
        <pearllist pearlid="{{ $pearl->id }}"></pearllist>
    </div>

</div>

@stop

@section('additional_scripts')
    <script src="http://vjs.zencdn.net/5.17.0/video.js"></script>
@stop