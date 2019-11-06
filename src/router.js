import Vue from 'vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter);
 
import Product from '@/views/good/Good.vue'
const router =new VueRouter({
    routes:[
        {
        path:'/product',
        component: Product
    }
]
})
export default router;
