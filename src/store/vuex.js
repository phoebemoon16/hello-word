import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        userName: 'phoebe',
        age: '23',
        habit: 'dance'
    },
    mutations: {
        getUserName (state,value) {
            //只有调用过之后才会重新赋值，否则就还是以前的值。
            // 使用看study.vue 仔细看清楚使用方法
            state.userName = value
        }
    },
    // action就是为了提交mutation
    actions: {
        getUserName (context,value) {
            context.commit('getUserName',value)
        }
    }
})

export default store