import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {//data

    },
    mutations: { //在 Vuex store 中，实际改变 状态(state) 的唯一方式是通过 提交(commit) 一个 mutation

    },
    actions: { //Action 处理函数接收一个上下文对象(context object)，该对象提供了跟 store 实例相同的方法/属性，因此你可以调用 context.commit 提交一个 mutation，或者通过 context.state 和 context.getters 访问 state 和 getters。

    },
    getter: { //Vuex 允许我们在 store 定义 “getters” （将它们视为 store 的计算属性）。getter 函数将接收 state 作为第一个参数

    }
})

