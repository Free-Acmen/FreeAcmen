import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

const store=new Vuex.Store({
    state:{
        common:{
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

export default store