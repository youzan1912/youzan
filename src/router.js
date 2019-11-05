import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

import Order from '@/views/order/Order.vue'

const router = new VueRouter({
    routes: [
        {
          path: '/order',
          component: Order
        }
    ]
})

export default router