// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store/store'
import router from './router/router'
import FastClick from 'fastclick'
// import swiper from './plugins/swiper'
import './config/fontsize'

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body);
  },{passive: false});
}

Vue.config.productionTip = false

Vue.directive('focus', function(el, binding){
        if(binding.value){
            el.focus();
        }
    })
/* eslint-disable no-new */
new Vue({
  router,
  store
}).$mount('#app')
