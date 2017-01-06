import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

new Vuex.Store({
    state:{
        commom:{
            isloading:false,
            login:{
                useId:"",
                useData:""
            },
            indexConf:{
                isSearch:true,
                isFooter:true,
                isBack:false,
                isShare:false,
                title:""
            }
        }
    },
    mutations:{

    },
    actions:{

    },
    getter:{

    }
});
