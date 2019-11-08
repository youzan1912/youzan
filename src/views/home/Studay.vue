<template>
    <div class="user" >
        <h2>学习交流</h2>
        <div v-for="(item, idx) in userList" :key='idx'>
           <div class="logo-p">
            <i :class="item.class"></i>
            <span v-text="item.title">发布商品</span>
        </div>
        </div>
       
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
    computed: {
    ...mapState(['userList'])
  },
  mounted() {
    // 获取导航数据
    this.getUserListI()
  },
  methods: {
    ...mapActions(['getUserListI'])
  }
}
</script>
<style lang="scss" scoped> 
 .user{
     width: 100%;
     height: 179px;
     background:#fff;
     h2{
         font-size: 20px;
         margin-left: -850px;
         padding-top: 20px;
     }
    .logo-p{
    margin:0 20px 0 10px;
     width:200px;
     height:40px;
    //  background: greenyellow;
     line-height: 40px;
     float: left;
    } 
 }
</style>
