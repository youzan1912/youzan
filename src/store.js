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
        navList: [],
        payList:[],
        targetList:[],
        assList:[],
        username:"",
        goodsList:[]
    },
    mutations:{
        setNavList(state, payload) {
            state.navList = payload
          },
          updatePayList(state,payload){
            state.payList=payload
          },
          updateTargetList(state,payload){
            state.targetList=payload
          },
          updateAssList(state,payload){
            state.assList=payload
          },
          updateUser(state,payload){
              state.username=payload
          },
          updateGoodsList(state,payload){
            state.goodsList=payload
           
        },
    },
    actions:{
        getNavList(store) {
            fetch('/db/nav.json', data=>{
              console.log('导航数据', data)
              store.commit('setNavList', data)
            })
        },
        getPayList(store){
            fetch('/db/pay.json',data=>{
                store.commit('updatePayList',data)            
            })
        },
        getTargetList(store){
            fetch('/db/target.json',data=>{
                store.commit('updateTargetList',data)            
            })
        },
        getAssList(store){
            fetch('/db/ass.json',data=>{
                store.commit('updateAssList',data)
            })
        },
        getUser(store){
            let res=localStorage.getItem('login')
            console.log(res)
            if(res){
                store.commit('updateUser',JSON.parse(res).username)
            console.log(store.state.username)
            }else{
                store.commit('updateUser',"未登录")
            }
        },
        getGoodsList(store){
            fetch('/db/goods.json',data=>{
                console.log("商品数据",data)
                store.commit('updateGoodsList',data)
             
            })
        } 
    }
})
export default store

