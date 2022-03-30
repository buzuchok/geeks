// window.Vue = require("vue").default;
require('./bootstrap');
import Vue from 'vue';

import VueRouter from "vue-router";
// resources/js/routes/index.js
import {routes} from './routes';
// import routes from "./routes";
import common from "./common";

import {BootstrapVue, IconsPlugin} from "bootstrap-vue";
import mainapp from './components/MainApp.vue';  // resources/js/components/MainApp.vue

Vue.use(VueRouter);
Vue.mixin(common);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);


import VModal from 'vue-js-modal' // https://github.com/euvl/vue-js-modal
Vue.use(VModal, { dialog: true })

// const NODE_ENV = "prod";
const NODE_ENV = "dev";

var origin = window.location.origin;

export const bus = new Vue();

window.image_path = origin + "/uploads/";
window.local_image_path = origin + "/frontassets/images/";
window.api_path = origin + "/api/";

/*
if (NODE_ENV == "prod") {
    // window.image_path = origin + "/public/uploads/";
    window.image_path = origin + "/uploads/";
    window.local_image_path = origin + "/frontassets/images/";
    window.api_path = origin + "/api/";
} else {

    window.image_path =
        "http://127.0.0.1:8000/uploads/";
    window.local_image_path =
        "http://127.0.0.1:8000/frontassets/images/";
    window.api_path = "http://127.0.0.1:8000/api/";
}
*/

if (localStorage.getItem("sgname") == null) {
    localStorage.setItem("sgname", "");
}

if (localStorage.getItem("sgemail") == null) {
    localStorage.setItem("sgemail", "");
}

if (localStorage.getItem("sgphoto") == null) {
    localStorage.setItem("sgphoto", "");
}

if (localStorage.getItem("sgtoken") != null) {
    window.isAuthenticated = true;
} else {
    window.isAuthenticated = false;
}

if (localStorage.getItem("sgtype") != null) {
    window.sgtype = localStorage.getItem("sgtype");
} else {
    window.sgtype = 4;
}

window.linkedin_callback = origin + "/linkedin_callback";
const router = new VueRouter({
    routes,
    mode : 'history'
})

const app = new Vue({
    el: "#app_wrapper",
    router,
    mixins: [common],
    components: {
        mainapp
    },

    // router: router_for_store
});


router.afterEach(( to, from ) => {
    bus.$emit('page_changed', from, to);
});
