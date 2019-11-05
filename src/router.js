import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Login from '@/views/login/Login.vue'
import Home from '@/views/home/Home.vue'

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
        }
    ]
})

export default router