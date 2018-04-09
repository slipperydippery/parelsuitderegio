<template>
    <div class="singlepearl clearfix" id="singlepearl">
        <div class="col-xs-12 backheader">
            <a href="#overview"
            >
                <img src="/img/parelcorp.png" alt="" class="backimg">
                terug naar alle parels
           </a>
        </div>
        <div class="col-md-4">
            <div class="flex-video widescreen">
                <iframe width="350" height="197"
                    :src="'https://www.youtube.com/embed/' + pearl.video[0].adress + '?rel=0&amp;showinfo=0'" 
                    frameborder="0" allowfullscreen
                    v-if="!isTablet"
                >
                </iframe>
                <iframe width="283" height="159"
                    :src="'https://www.youtube.com/embed/' + pearl.video[0].adress + '?rel=0&amp;showinfo=0'" 
                    frameborder="0" allowfullscreen
                    v-if="isTablet"
                >
                </iframe>
            </div>
        </div>
        <div class="col-md-8">
            <div class="contentelement pearlinfo">
                <h2>{{ pearl.title }} </h2> 

                <div>
                    <span v-html="pearl.description"></span>
                    <br>
                    Neem contact op met <a href="#">de betrokkenen</a>

                </div>
            </div>
        </div>    

        <div class="col-md-12">
            <div class="row linkrow">
                <div class="col-md-2">
                    <a href="/pdf/casebeschrijving-v4.pdf" class="btn">Parelbeschrijving</a>
                </div>
                <div class="col-md-2">
                    <a href="/pdf/factsheet-v3.pdf" class="btn">Factsheet</a>
                </div>
                <div class="col-md-2">
                    <a href="/pdf/infographic-v5.pdf" class="btn">Handleiding</a>
                </div>
                <div class="col-md-2">
                    <a href="#" class="btn">Share</a>
                </div>
                <div class="col-md-2">
                    <a href="#" class="btn">Geef reactie</a>
                </div>
                <div class="col-md-2">
                    <a href="#" class="btn">Houd me op de hoogte</a>
                </div>
            </div>
            
        </div> 

</template>

<script>

    export default {
        props: [
            'pearl',
            'active'
        ],

    	data() {
    		return {

    		}
    	},

        mounted() {
            console.log('Single Pearl ready.');

        },

		methods: {
            setActive: function (category) {
                if (category.id == this.active.id) {
                    this.filteredpearls = this.pearls;
                    this.active = {};
                    return
                }
                this.active = category;
                this.filteredpearls = this.pearls.filter( function(pearl){
                    return pearl.categories[0].id == category.id;
                })
            },
        },

        computed: {
            isTablet: function () {
                return window.innerWidth < 1200;
            },
            screenSize: function () {
                return window.innerWidth;
            },
        }
    }
</script>
