import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Customer from '@/views/customer/Customer.vue'

const router=new VueRouter({
    routes:[
        {
            path:'/customer',
            component:Customer
        },
  ]
})
export default router