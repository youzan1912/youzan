import Vue from 'vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter);
 
import Product from '@/views/product/Product.vue'
const router =new VueRouter({
    routes:[
        {
        path:'/product',
        component: Product
    }
]
})
export default router;
