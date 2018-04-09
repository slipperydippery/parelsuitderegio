<template>
    <div class="pearllistbuttons clearfix">
        <div 
            v-for="category in categories"
            class="video-tabs-bottom col-md-4"
        >
            <div 
                class="btn"
                :class="['category-1' + category.id, nonActive(category)]"
                @click="setActive(category)"
            >
                {{ category.title }}
            </div>
        </div>
    </div>  
</template>

<script>
    import pearl from '../components/Pearl.vue';

    export default {
        data: function() {
            return {
                categories: [],
                active: {},
            }
        },

        mounted() {
            this.getCategories();
        },

        methods: {
            getCategories: function () {
                this.$http.get('/api/category')
                    .then(response => {
                        this.categories = response.data;
                    });
            },

            setActive: function (category) {
                // if (category.id == this.active.id) {
                //     this.active = {};
                // }
                // else {
                    this.active = category;
                // }
                Event.$emit('setcategory', this.active)
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
