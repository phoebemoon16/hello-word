
// state 存放的是 orders的状态

const ADD_ORDERS =  'ADD_ORDERS'

const state = {
    orders: {}
}

//改变state的唯一方法就是 提交 (commit) mutation
const mutations ={
    [ADD_ORDERS]: (state,value) => {
        state.route = value
    }
}

// commit 提交
const actions = {
    addOrders({commit}, val) {
        commit(ADD_ORDERS,val)
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}