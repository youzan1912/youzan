import Vue from 'vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter);
 
import Good from '@/views/good/Good.vue'
import MemberCard from '@/views/membercard/MemberCard.vue'
import Obtain from '@/views/membercard/Obtain.vue'
import Refund from '@/views/membercard/Refund.vue'
const router =new VueRouter({
    routes:[
        {
        path:'/good',
        component: Good,     
        },
        {
        path:'/membercard',
        component:MemberCard,
        children:[
             {
                path:'obtain',
                component:Obtain
              },
              {
                path:'refund',
                component:Refund
              }
         ]
        },
        {
            path:'/',
            redirect:"/membercard"
        }
]
})
export default router;
