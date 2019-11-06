import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

<<<<<<< HEAD
<<<<<<< HEAD
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
        navList: [],
        payList:[],
        targetList:[],
        assList:[]
    },
    mutations:{
        changeLogin(state){
            state.isLogin = !state.isLogin
        },
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
        }
    }
})

export default store
=======
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
>>>>>>> dev
=======
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
        
    },
    mutations:{
        updateGoodsList(state,payload){
            state.goodsList=payload
           
        },
       
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
>>>>>>> test
