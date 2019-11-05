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
        
    },
    mutations:{
    
    },
    actions:{
        
    }
})

export default store