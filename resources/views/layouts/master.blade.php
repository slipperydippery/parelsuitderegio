<!DOCTYPE html>
<html lang="en">
    <head>
        @include('layouts.partials.tagmanagerhead')
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="/css/app.css">
        <link href="https://vjs.zencdn.net/5.17.0/video-js.css" rel="stylesheet">
        <link rel="shortcut icon" href="{{ asset('favicon.ico') }}">


        <meta http-equiv="refresh" content="30;url=https://www.voion.nl/inspiratie" />



        <link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.0/cookieconsent.min.css" />
        <script src="//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.0/cookieconsent.min.js"></script>
        <script>
        window.addEventListener("load", function(){
        window.cookieconsent.initialise({
          "palette": {
            "popup": {
              "background": "#7f7f7f",
              "text": "#ffffff"
            },
            "button": {
              "background": "#9f183e",
              "text": "#ffffff"
            }
          },
          "content": {
            "message": "Voion gebruikt cookies om het gedrag van bezoekers te analyseren. Als u onze website bezoekt, gaan wij er automatisch vanuit dat u akkoord gaat met deze cookies.",
            "dismiss": "Akkoord",
            "link": "Bekijk onze cookie-policy",
            "href": "https://www.voion.nl/juridisch/cookiepolicy"
          }
        })});
        </script>
        
    </head>
    <script>
        window.Laravel = { csrfToken: '{{ csrf_token() }}' };
    </script>
    <body ontouchstart class="pagina over-voion" itemscope itemtype="http://schema.org/WebPage">
        @include('layouts.partials.tagmanagerbody')
        @include('layouts.partials.analytics')
        @if(Auth::user())
            <nav class="navbar navbar-default navbar-static-top">
                <div class="container">
                    <div class="navbar-header">

                        <!-- Collapsed Hamburger -->
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-navbar-collapse">
                            <span class="sr-only">Toggle Navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>

                        <!-- Branding Image -->
                        <a class="navbar-brand" href="{{ url('/') }}">
                            Parels uit de Regio - Admin
                        </a>
                    </div>

                    <div class="collapse navbar-collapse" id="app-navbar-collapse">
                        <!-- Left Side Of Navbar -->
                        <ul class="nav navbar-nav">
                            &nbsp;
                        </ul>

                        <!-- Right Side Of Navbar -->
                        <ul class="nav navbar-nav navbar-right">
                            <li>
                                <a href=" {{ route('pearls.create') }} "> + Nieuwe Parel </a>
                            </li>
                            <li>
                                <a href=" {{ route('pearls.index') }} "> Alle parels </a>
                            </li>
                            <!-- Authentication Links -->
                            @if (Auth::guest())
                                <li><a href="{{ url('/login') }}">Login</a></li>
                                <li><a href="{{ url('/register') }}">Register</a></li>
                            @else
                                <li class="dropdown">
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                                        {{ Auth::user()->name }} <span class="caret"></span>
                                    </a>

                                    <ul class="dropdown-menu" role="menu">
                                        <li>
                                            <a href="{{ url('/logout') }}"
                                                onclick="event.preventDefault();
                                                         document.getElementById('logout-form').submit();">
                                                Logout
                                            </a>

                                            <form id="logout-form" action="{{ url('/logout') }}" method="POST" style="display: none;">
                                                {{ csrf_field() }}
                                            </form>
                                        </li>
                                    </ul>
                                </li>
                            @endif
                        </ul>
                    </div>
                </div>
            </nav>
        @endif
        <div id="container" class="container">
            <div id="header" class="row">
                <div class="col-md-12">            
                    <a href="http://www.voion.nl/" title="VOION Arbeidsmarkt &amp; Opleidingsfonds voortgezet onderwijs" id="logolink"><img src="/img/logo_voion.jpg" alt="Voion, Arbeidsmarkt &amp; opleidingsfonds voortgezet onderwijs" id="logo" /></a>
                    <a href="#MainNav" id="hamburger" class="showmmenu"><em>MENU</em><span></span></a>
                    <div id="utils">
                        <ul>
                            <li><a href="http://www.voion.nl/">home</a></li>
                            <li><a href="http://www.voion.nl/contact">contact</a></li>
                            <li class="last"><a href="http://www.voion.nl/sitemap">sitemap</a></li>
                        </ul>
                    </div>
                    <nav id="MainNav">
                        <ul>
                            <li><a href="http://www.voion.nl/over-voion">Over Voion</a></li>
                            <li><a href="http://www.voion.nl/home">Programmalijnen</a><ul>
                            <li><a href="http://www.voion.nl/programmalijnen/arbeidsmarkt-en-mobiliteit">Arbeidsmarkt &amp; mobiliteit</a></li>
                            <li><a href="http://www.voion.nl/programmalijnen/loopbaan-en-professionalisering">Loopbaan  &amp; professionalisering</a></li>
                            <li><a href="http://www.voion.nl/programmalijnen/veilig-gezond-en-vitaal-werken">Veilig, gezond &amp; vitaal werken</a></li></ul></li>
                            <li><a href="http://www.voion.nl/inspiratie">Inspiratie</a></li>
                            <li><a href="http://www.voion.nl/publicaties">Publicaties</a></li>
                            <li><a href="http://www.voion.nl/instrumenten">Instrumenten</a></li>
                            <li><a href="http://www.voion.nl/agenda">Agenda</a></li>
                            <li><a href="http://www.voion.nl/nieuws">Nieuws</a></li></ul>
                    </nav>
                </div>
        </div>
        <div id="contentcontainer">

            @yield('content')
            
        </div>

        <footer class="row">
            <div class="col-md-12">
                <div id="footer">
                    <ul id="leden" class="sprite">
                        <li><a target="_blank" href="http://www.aob.nl" title="Algemene Onderwijsbond" class="aob sprite"></a></li>
                        <li><a target="_blank" href="http://www.cnvonderwijs.nl" title="CNV Onderwijs" class="cnv sprite"></a></li>
                        <li><a target="_blank" href="http://www.fvov.nl" title="Federatie van Onderwijsvakorganisaties" class="fvov sprite"></a></li>
                        <li><a target="_blank" href="http://www.abvakabofnv.nl" title="Abvakabo FNV" class="fnv sprite"></a></li>
                        <li class="last"><a target="_blank" href="http://www.vo-raad.nl" title="VO-raad" class="voraad sprite"></a></li>
                    </ul>
                </div>
            </div>
        </footer>

        </div>
        @include ('footer')
        <div class="backdrop">
            <div class="container">
                <div class="card mx-auto bg-info">
                    <h1>Parels uit de regio is opgeheven</h1>
                    <p>Parels uit de regio was een samenwerkingsverband tussen Voion en EMB AV. Alle documenten en videos die zijn
                        gemaakt onder deze langdurige en succesvolle samenwerking zijn nu te vinden op de site van Voion: </p>
                    <p><a href="https://www.voion.nl/inspiratie">https://www.voion.nl/inspiratie</a></p>

                    <p>U wordt automatisch naar deze nieuwe pagina geleid.</p>

                    <a href="https://www.embaudio.com" class="imglinkcenter">
                        <img src="img/emblogotrans.png" alt="">
                    </a>

                </div>

            </div>
        </div>

        <script src="/js/app.js"></script>
        @yield ('additional_scripts')

    </body>
</html>
