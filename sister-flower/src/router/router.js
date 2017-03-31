import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        component: App,
        children: [
            { path: '', redirect: '/hello' },
            { path: '/hello', name: 'hello', component: Hello }
        ]
    }
  ],
  mode: 'hash',
  strict: process.env.NODE_ENV !== 'production'
})
