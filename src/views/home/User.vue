<template>
    <div class="user" >
        <h2>常用功能</h2>
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
     margin:  0 auto;
     margin-top:20px;
     h2{
         font-size: 20px;
         margin: 20px 0;
         padding-top: 20px;
     }
    .logo-p{
    // margin:0 20px 0 10px;
    text-align: center;
     width:25%;
     height:40px;
    //  background: greenyellow;
     line-height: 40px;
     float: left;
    } 
 }
</style>
