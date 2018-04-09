<template>
	<a :href="PearlAdress(pearl)"
		class="pearl col-md-2 col-sm-4 col-xs-4"
	>
		<img :src="returnRoot + '/img/transparent.png'" alt="" class="tsquare">
		<div 
			class="ring"
			:class="'ring-' + pearl.categories[0].id"
            :style="{ backgroundImage: 'url(' + returnRoot + '/video/poster/parel' + pearl.id + '.png)' }"
		>
            <img src="/img/playtrans.png" alt="" class="playicon center-block">
		</div>
		<span v-html="pearl.title"></span>
	</a>
</template>

<script>
    export default {
        mounted() {
        },

        data: function() {
            return {
                image: "http://1.bp.blogspot.com/-8PfnHfgrH4I/TylX2v8pTMI/AAAAAAAAJJ4/TICBoSEI57o/s1600/search_by_image_image.png"
            }
        },

        props: [
        	'pearl'
        ],

        methods: {
            PearlAdress: function(pearl){
                return this.returnRoot + '/pearls/' + pearl.id;
            }
        },

        computed: {
            returnRoot: function () {
                return (window.location.protocol + "//" + window.location.host);
            },
        }

    }
</script>
