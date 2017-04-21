import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import Home from '@/pages/home'
import Hello from '@/components/Hello'
import Login from '@/pages/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        component: App,
        children: [
            { path: '', redirect: '/home' },
            { path: '/home', name: 'home', component: Home},
            { path: '/hello', name: 'hello', component: Hello },
            { path: '/login', name: 'logon', component: Login}
        ]
    }
  ],
  mode: 'hash',
  strict: process.env.NODE_ENV !== 'production'
})
