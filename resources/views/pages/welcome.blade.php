        <div class="pearls">
        @php
            $autoplay = isset($_GET['autoplay']) ? $_GET['autoplay'] : '';
        @endphp
            <div class=" entree" >
                <div class="row">
                    <div class="col-xs-12 ">
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
                </div>
                <div class="row">
                    <div class="overview--video col-md-10 col-md-offset-1">
                        <video 
                            preload="auto" 
                            id="intro-video"
                            class="video-js vjs-big-play-centered vjs-16-9" 
                            poster="/video/poster/introductie.png"
                            data-setup="{}" 
                            <?= $autoplay?'autoplay':'' ?>
                            controls
                            playsinline
                        >
                            <source src="/video/introductie.mp4" type="video/mp4">
                            <p class="vjs-no-js">
                                To view this video please enable JavaScript, and consider upgrading to a web browser that
                                <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
                            </p>
                        </video>
                        <div class="videooverlay" id="videooverlay" style="overflow: hidden">
                            <div class="videooverlay--content">
                                <a href="{{ URL::to('pearls/1')}}" class="csspearl--link csspearl csspearl-1"> </a>
                                <span class="csspearl--description">Tweedegraads PLUS</span>
                                <a href="{{ URL::to('pearls/2')}}" class="csspearl--link  csspearl csspearl-2"> </a>
                                <span class="csspearl--description">Slimmer Werken TV</span>
                                <a href="{{ URL::to('pearls/3')}}" class="csspearl--link csspearl csspearl-3"> </a>
                                <span class="csspearl--description">Banenafspraak</span>
                                <a href="{{ URL::to('pearls/4')}}" class="csspearl--link csspearl csspearl-4"> </a>
                                <span class="csspearl--description">Loopbaanscans</span>
                                <a href="{{ URL::to('pearls/5')}}" class="csspearl--link csspearl csspearl-5"> </a>
                                <span class="csspearl--description">Veranderlandschap</span>
                                <a href="{{ URL::to('pearls/6')}}" class="csspearl--link csspearl csspearl-6"> </a>
                                <span class="csspearl--description">Professionaliseringsportaal</span>
                                <a href="{{ URL::to('pearls/7')}}" class="csspearl--link csspearl csspearl-7"> </a>
                                <span class="csspearl--description">Job Twinning</span>
                                <a href="{{ URL::to('pearls/8')}}" class="csspearl--link csspearl csspearl-8"> </a>
                                <span class="csspearl--description">Strategisch Beleidsplan</span>
                                <a href="{{ URL::to('pearls/9')}}" class="csspearl--link csspearl csspearl-9"> </a>
                                <span class="csspearl--description">Arbo Aanpak</span>
                                <a href="{{ URL::to('pearls/10')}}" class="csspearl--link csspearl csspearl-10"> </a>
                                <span class="csspearl--description">Identiteit Vertalen</span>
                                <a href="{{ URL::to('pearls/11')}}" class="csspearl--link csspearl csspearl-11"> </a>
                                <span class="csspearl--description">Zin in Lesgeven</span>
                            </div>
                        </div>
                        
                        <div class="video_sub_text">
                            Waar zijn andere scholen in het voortgezet onderwijs mee bezig? Welke onderwerpen houden hen bezig? Laat u hier inspireren door hun verhalen. Gedurende dit jaar vullen we de website doorlopend aan met nieuwe parels. Wilt u op de hoogte blijven van deze nieuwe verhalen? Volg ons dan via <a href="https://twitter.com/voion_aenofonds">Twitter <img src="img/twitter.png" alt="twitter" class="inline_social_icon"></a> of <a href="https://www.linkedin.com/company/3082156">Linkedin <img src="img/linkedin.png" alt="linkedin" class="inline_social_icon"></a> of abonneer u op onze <a href="http://www.voion.nl/aanmelden">gratis nieuwsbrief</a>.
                            De parels die gepubliceerd zijn tot en met november 2018, zijn ook gebundeld in een <a href="http://www.embav.nl/admin/digitaaljaarboek6" target="_blank">jaarboek</a>.
                        </div>
                    </div>
                </div>
            </div>
        </div>
