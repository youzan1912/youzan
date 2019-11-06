import Vue from 'vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter);
 
import Good from '@/views/good/Good.vue'
const router =new VueRouter({
    routes:[
        {
        path:'/good',
        component: Good
    }
]
})
export default router;
