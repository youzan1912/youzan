import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

function fetch(api,callback){
    axios({
        method: "GET",
        url:"http://localhost:8080"+api,
        }).then(res=>{
            let data=null;
            if(res.data.err===0){
                data=res.data.data
            }
            callback && callback(data)
        }).catch(err=>{
            console.log("请求接口异常",err)
        }).then(()=>{
            //总会执行的
        })
}

const store = new Vuex.Store({
    state:{
        goodsList:[],
        goodsList2:[],
        goodsList3:[],
         
    },
    mutations:{
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
             
        }
        
    },
    actions:{
        getGoodsList(store){
            fetch('/db/goods.json',data=>{
                console.log("商品数据",data)
                store.commit('updateGoodsList',data)   
            })
        }
    }
})
export default store