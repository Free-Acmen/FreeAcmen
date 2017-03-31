// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import routes from './router/router'
import FastClick from 'fastclick'

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body);
  }, false);
}

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
    routes,
    linkActiveClass: 'active',  // router-link的选中状态的class，也有一个默认的值
    history: true
})


/* eslint-disable no-new */
new Vue({
  router
}).$mount('#app')
