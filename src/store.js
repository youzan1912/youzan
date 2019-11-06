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

<<<<<<< HEAD
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
=======
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
>>>>>>> dev
})
export default store

