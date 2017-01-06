import Vue from "vue";
import Router from "./router/router";
import Store from "./store/store";

Vue.config.debug = true;
window.log = console.log;

new Vue({
    el:"#app",
    router:Router,
    store:Store
});//.$mount("#app");
