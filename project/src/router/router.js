import App from '../app'
// import Home from '../pages/home/home'
const Home = r => require.ensure([], () => r(require('../pages/home/home')), 'Home')
const Cities = r => require.ensure([], () => r(require('../pages/cities/cities')), 'Cities')

export default [{
    path:'/',
    component:App,
    children:[
        {path: '',redirect: '/home'},
        {path:'/home',component:Home},
        {path:'/cities/:cityid',component:Cities}
    ]
}]
