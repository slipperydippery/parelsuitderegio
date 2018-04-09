<template>
    <div class="pearls">
        <div class="video-tabs-bottom"
            v-for="category in categories"
        >
            <div 
                class="btn"
                :class="['category-' + category.id, nonActive(category)]"
                @click="setActive(category)"
            >
                {{ category.title }}
            </div>
        </div>
        <div class="row pearllist">
            <h3 class="parels_head">Gerelateerde Parels:</h3>
            <pearl
                v-for="pearl in filteredpearls"
                :pearl="pearl"
            >
            </pearl>
        </div>
    </div>  
</template>

<script>
    import pearl from '../components/Pearl.vue';

    export default {
        data() {
            return {
                pearls: [],
                filteredpearls: [],
                categories: [],
                active: {},
            }
        },

        mounted() {
            this.getPearls();
            this.getCategories();
        },

        methods: {
            getPearls: function () {
                this.$http.get('/api/pearl/')
                    .then(response => {
                        this.pearls = response.data;
                        this.filteredpearls = response.data;
                    });
            },

            getCategories: function () {
                this.$http.get('/api/category')
                    .then(response => {
                        this.categories = response.data;
                    });
            },

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

            nonActive(category) {
                if (this.active != {}) {
                    if (this.active.id != category.id) {
                        return 'nonactive'
                    }
                }
                return 'active';
            },
        }
    }
</script>
