import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

function fetch(api, callback) {
  // 显示加载中
  axios({
    method: "GET",
    url: 'http://localhost:8080'+api,
  }).then(res=>{
    let data = null
    if (res.data.err === 0) {
      data = res.data.data
    }
    callback && callback(data)
  }).catch(err=>{
    console.log('接口请求异常', err)
  }).then(()=>{
    // 总是会执行
    // 隐藏加载中
  })
}

const store = new Vuex.Store({
  state: {
    navList: [],
    customer:[],
    customer2:[]
  },
  mutations: {
    setNavList(state, payload) {
      state.navList = payload
    },
    // updateCustomer(state,payload){
    //   state.customer=[...state.customer, ...payload]
    //   console.log(state.customer)
    // },
    updateOrderList(state,payload){  //分页
      if (payload.list) {
          state.customer=payload.list
      }
      let page=payload.page||1
      let list = state.customer
      state.customer2 = list.slice((page-1)*4, page*4)  
  },
    updateAdd(state,payload){
      //state.customer2=[... state.customer2, ...payload]
      state.customer2.push(payload)
      console.log(state.customer2)
    },

    updateDress(state,payload){  //筛选
      let arr=[]
      state.customer.map((ele)=>{
          if(ele.customer==payload.customer){
              arr.push(ele)
          }
      })
      state.customer2 = arr
    }
  },

  actions: {
    getNavList(store) {
      fetch('/db/nav.json', data=>{
        console.log('导航数据', data)
        store.commit('setNavList', data)
      })
    },
    getCustomer(store){
      fetch('/db/customer.json',(data)=>{
        let payload = {
          page: 1,
          list: data,
          customer:''
      }
      store.commit('updateOrderList', payload)
        // console.log(data)
        // console.log('当前页',page)
        // store.commit('updateOrderList',payload)
      })
    },
    // getAdd(store){
    //   fetch('/db/customer.json', (data) => {
    //     console.log(data)
    //   store.commit('updateAdd',data)
    // })
    // }

  }
})

export default store
