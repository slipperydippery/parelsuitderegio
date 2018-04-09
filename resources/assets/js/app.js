
/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example', require('./components/Example.vue'));
Vue.component('pearls', require('./components/Pearls.vue'));
Vue.component('pearl', require('./components/Pearl.vue'));
Vue.component('singlepearl', require('./components/Singlepearl.vue'));
Vue.component('pearllist', require('./components/Pearllist.vue'));
Vue.component('relatedpearls', require('./components/Relatedpearls.vue'));
Vue.component('pearllistfilter', require('./components/Pearllistfilter.vue'));
window.Event = new Vue();
const app = new Vue({
    el: '#parelsuitderegio',

    components: {
    }
});
