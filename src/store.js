import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

function fetch(api, callback) {
    axios({
        method: "GET",
        url: "http://localhost:8080" + api,
    }).then(res => {
        let data = null;
        if (res.data.err === 0) {
            data = res.data.data
        }
        callback && callback(data)
    }).catch(err => {
        console.log("请求接口异常", err)
    }).then(() => {
        //总会执行的
    })
}

const store = new Vuex.Store({
    state: {
        goodsList: [],
        goodsList2: [],
        goodsList3: [],
        MemberList: [], //权益卡渲染数据数组
        ObtainList: [],
        searchList: []
    },
    mutations: {
        updateGoodsList(state, payload) {
            state.goodsList = payload
        },
        updateGoodsList2(state, payload) {
            state.goodsList2 = payload
            console.log(state.goodsList2)
        },
        updateGoodsList3(state, payload) {
            console.log(payload)
            let arr1 = state.goodsList;
            let arr2 = payload;
            console.log(arr2.length)
            for (let i = 0; i < arr1.length; i++) {
                for (let j = 0; j < arr2.length; j++) {
                    if (arr1[i].id === arr2[j].id) {
                        arr1.splice(i, payload.length)
                    }
                }
            }
            state.goodsList = arr1
            state.goodsList3 = [...state.goodsList3, ...arr2]

        },
        deleteGoods(state, payload) {
            console.log(state, payload)
            let arr1 = state.goodsList
            let arr2 = payload
            console.log('arr2', arr2)
            for (let i = 0; i < arr1.length; i++) {
                for (let j = 0; j < arr2.length; j++) {
                    if (arr1[i].id === arr2[j].id) {
                        arr1.splice(i, payload.length)

                    }
                }
            }
            state.goodsList = arr1
        },
        deleteGoods2(state, payload) {
            console.log(state, payload)
            let arr1 = state.goodsList3
            let arr2 = payload
            console.log('arr2', arr2)
            for (let i = 0; i < arr1.length; i++) {
                for (let j = 0; j < arr2.length; j++) {
                    if (arr1[i].id === arr2[j].id) {
                        arr1.splice(i, payload.length)
                    }
                }
            }
            state.goodsList3 = arr1
        },
        //  权益卡表格数据渲染
        updateMember(state, payload) {
            let arr1 = payload
            let arr = []
            for (let i of arr1) {
                if (i.state === 1) {
                    arr.push(i)
                }
            }
            // console.log(arr)
            state.MemberList = arr
        },
        updateMember2(state, payload) {
            let arr2 = payload
            let arr = []
            console.log(payload)
            for (let i of arr2) {
                if (i.state == 2) {
                    arr.push(i)
                }
            }
            state.MemberList = arr
        },
        updateMember3(state, payload) {
            let arr2 = payload
            let arr = []
            console.log(payload)
            for (let i of arr2) {
                if (i.state == 3) {
                    arr.push(i)
                }
            }
            state.MemberList = arr
        },
        updateObtain(state, payload) {
            state.ObtainList = payload
        },
        updateSearchList(state, payload) {
            let arr1 = state.MemberList
            let arr3 = []

            for (let i of arr1) {
                if (i.name == payload) {
                    arr3.push(i)
                }
            }
            state.MemberList = arr3
        },
        deleteMember(state, payload) {
            let arr1 = []
            arr1.push(payload)
            let arr2 = state.MemberList;
            arr2.forEach((item, index) => {
                if (item.id === arr1[0].id) {
                    arr2.splice(index, 1)
                }
            })
            state.MemberList = arr2
        }
    },
    actions: {
        getGoodsList(store) {
            fetch('/db/goods.json', data => {
                // console.log("商品数据",data)
                store.commit('updateGoodsList', data)
            })
        },
        getMember(store) {
            fetch('/db/membercard.json', data => {
                store.commit('updateMember', data)
            })
        },
        getMember2(store) {
            fetch('/db/membercard.json', data => {
                store.commit('updateMember2', data)
            })
        },
        getMember3(store) {
            fetch('/db/membercard.json', data => {
                store.commit('updateMember3', data)
            })
        },
        getObtain(store) {
            fetch('/db/membercard.json', data => {
                store.commit('updateObtain', data)
            })
        }
    }
})
export default store