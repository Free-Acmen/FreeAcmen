import Vue from "vue";
import Router from "vue-router";
import App from "../app";
import Index from "../pages/index";
import Home from "../pages/home";
import HomeUserInfo from "../pages/homeuserinfo";

Vue.use(Router);

const routes = [{
    path: "/",
    component: App,
    children: [
        { path: "/index/:type", name: "index", component: Index },
        { path: "/home", name: "home", component: Home },
        { path: "/homeuserinfo/:uid", name: "homeuserinfo", component: HomeUserInfo}
    ]
}];

const router = new Router({
    routes,
    linkActiveClass: "active",
    history: true
});

export default router;
