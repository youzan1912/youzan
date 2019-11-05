import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

import constant from '@/util/constant'

function fetch(api,callback){

    axios({
        method:'GET',
        url:constant.baseUrl+api
    }).then(res=>{
        let data = null;
        if(res.data.err===0){
            data=res.data.data
        }
        callback && callback(data)
    }).catch(err=>{
        console.log('接口请求异常',err)
    }).then(()=>{

    })
}

const store=new Vuex.Store({
    state:{
        isLogin:false,
        navList: []
    },
    mutations:{
        changeLogin(state){
            state.isLogin = !state.isLogin
        },
        setNavList(state, payload) {
            state.navList = payload
          }
    },
    actions:{
        getLogin(store){
                store.commit('changeLogin')
        },
        getNavList(store) {
            fetch('/db/nav.json', data=>{
              console.log('导航数据', data)
              store.commit('setNavList', data)
            })
          }
    }
})

export default store