
import Vue from 'vue'
import VueRouter from 'vue-router'

const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

Vue.use(VueRouter)

import Login from '@/views/login/Login.vue'
import Home from '@/views/home/Home.vue'
import Order from '@/views/order/Order.vue'
import Good from '@/views/good/Good.vue'
import Customer from '@/views/customer/Customer.vue'

const router = new VueRouter({
    routes: [
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

router.beforeEach((to, from, next) => {
    if (to.path === '/login') {
        next()
    } else {
        let res = localStorage.getItem('login')
    console.log(res)

        if(res){
            let isLogin = JSON.parse(res).isLogin
            console.log(isLogin)
            if(isLogin===1){
                next()
            }else{
                next('/login')
            }
        }else{
            next('/login')
    }
    }
    
})

export default router
