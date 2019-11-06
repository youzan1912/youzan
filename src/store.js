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
        goodsList:[]
    },
    mutations:{
        updateGoodsList(state,payload){
            state.goodsList=payload
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