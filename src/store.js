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
    navList: []
  },
  mutations: {
    setNavList(state, payload) {
      state.navList = payload
    }
  },
  actions: {
    getNavList(store) {
      fetch('/db/nav.json', data=>{
        console.log('导航数据', data)
        store.commit('setNavList', data)
      })
    }

  }
})

export default store
