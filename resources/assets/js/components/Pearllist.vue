<template>
    <div class="pearllist-container">
        <div class="pearllist col-xs-12" v-if="pearlid && filteredpearls.length > 0">
            <h3 class="pearls_head" v-if="pearlid && filteredpearls.length > 0">Gerelateerde Parels:</h3>
            <h3 class="pearls_head" v-if="! pearlid" >
                Parels{{ nothing }}<span :class="['category-' + active.id, 'pearls_head--category'] " >{{active.title}}</span>:
            </h3>
            <pearl
                v-for="pearl in filteredpearls"
                :pearl="pearl"
                v-if="true || pearlIsInTheme(pearl, 1)"
            >
            </pearl>
            <h4 
                v-if="active.id != null" 
                @click="reSetActive( )"
                class="pearls_head--back"
                v-html="'<< terug naar alle parels'"
            >   
                terug naar alle parels
            </h4>
        </div>

        <div class="pearllist col-xs-12" v-if="! pearlid" v-for="theme in themes" >
            <h3 class="pearls_head">
                {{ theme.title }}:
            </h3>
            <pearl
                v-for="pearl in filteredpearls"
                :pearl="pearl"
                v-if="pearlIsInTheme(pearl, theme.id)"
            >
            </pearl>
            <h4 
                v-if="active.id != null" 
                @click="reSetActive( )"
                class="pearls_head--back"
                v-html="'<< terug naar alle parels'"
            >   
                terug naar alle parels
            </h4>
        </div>
       
    </div>
</template>

<script>
    import pearl from '../components/Pearl.vue';

    export default {
        data: function() {
            return {
                pearls: [],
                filteredpearls: [],
                categories: [],
                themes: [],
                active: {},
                pearl: {},
            }
        },

        props: [
            'pearlid'
        ],

        created() {
            Event.$on('setcategory', this.setActive);
        },

        mounted() {
            this.getPearls();
            this.getCategories();
            this.getThemes();
        },

        computed: {
            nothing: function () {
                if(this.active.id == null){
                    return "";
                }
                return " ";
            },
        },

        methods: {
            getPearls: function () {
                this.$http.get('/api/pearl/')
                    .then(response => {
                        this.pearls = response.data;
                        this.filteredpearls = response.data;
                        if(this.pearlid != 0) {
                            this.setRelatedPearls();
                        }
                    });
            },

            setRelatedPearls: function () {
                var home = this;
                for (var pearl in this.pearls){
                    if (this.pearls[pearl].id == home.pearlid) {
                        home.pearl = this.pearls[pearl];
                    }
                }
                this.pearls = this.pearls.filter( function(thispearl){
                    for (var link in home.pearl.links) {
                        if(thispearl.id == home.pearl.links[link].id) {
                            return true;
                        }
                    }
                    return false;
                });
                this.filteredpearls = this.pearls;
            },

            getCategories: function () {
                this.$http.get('/api/category')
                    .then(response => {
                        this.categories = response.data;
                    });
            },

            getThemes: function() {
                this.$http.get('/api/theme')
                    .then(response => {
                        this.themes = response.data;
                    });
            },

            setActive: function (category) {
                if (category.id == null) {
                    this.filteredpearls = this.pearls;
                    return
                }
                this.active = category;
                this.filteredpearls = this.pearls.filter( function(pearl){
                    for (var thispearl in pearl.categories) {
                        if (pearl.categories[thispearl].id == category.id) {
                            return true;
                        }
                    }
                })
            },

            reSetActive: function() {
                this.filteredpearls = this.pearls;
                this.active = {id: null};
            },

            nonActive(category) {
                if (this.active != {}) {
                    if (this.active.id != category.id) {
                        return 'nonactive'
                    }
                }
                return 'active';
            },

            pearlIsInTheme: function(pearl, theme_id) {
                var isInTheme = false;
                pearl.themes.forEach(function(theme){
                    if(theme.id == theme_id){
                        isInTheme = true;
                    }
                })
                return isInTheme;
            },

        }
    }
</script>
