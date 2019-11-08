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
        goodsList:[],
        goodsList2:[],
        goodsList3:[],
        customer:[],
        customer2:[]
         
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
        updateGoodsList2(state,payload){
            state.goodsList=payload
            console.log(state.goodsList2)
        },
        updateGoodsList3(state,payload){
            state.goodsList=payload
             
        },
         
        deleteGoods(state, payload) {
            console.log(state, payload)
            let arr1 = state.goodsList
            let arr2 = payload
            console.log('arr2', arr2)
            for(let i=0; i<arr1.length; i++) {
                for(let j=0; j<arr2.length; j++) {
                    if (arr1[i].id === arr2[j].id) {
                        arr1.splice(i, 1)
                    }
                }
            }
            state.goodsList = arr1
        },
        changeGoods(state, payload){
            console.log(state, payload)
            state.goodsList3=payload
             
        },
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
          }
    }
})
export default store

