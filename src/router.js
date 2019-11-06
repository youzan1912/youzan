import Vue from 'vue'
import VueRouter from 'vue-router'
<<<<<<< HEAD

Vue.use(VueRouter)

import Login from '@/views/login/Login.vue'
import Home from '@/views/home/Home.vue'
import Order from '@/views/order/Order.vue'
import Good from '@/views/good/Good.vue'
import Customer from '@/views/customer/Customer.vue'

const router = new VueRouter({
    routes:[
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/login',
            components: {
                login:Login
            }
        },
        {
            path: '/home',
            
            component: Home
        },
        {
            path: '/order',
            
            component: Order
        },
        {
            path: '/good',
            
            component: Good
        },
        {
            path: '/customer',
            
            component: Customer
        }
    ]
})

=======
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
>>>>>>> dev
export default router