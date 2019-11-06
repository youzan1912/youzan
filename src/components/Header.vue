<template lang="html">
<div class="header">
  <div class="header-left">
    <span v-text="username">用户名</span>
    <span class="blue">试用期</span>
    <span>SVIP</span>
    <span>有赞担保</span>
  </div>
  <div class="header-right">
    <i class="fa fa-user-circle"></i>
    <el-popover
    placement="top-start"
    width="200"
    trigger="hover">
    <el-button @click='logout'>退出登录</el-button>
    <el-button slot="reference" type="text"><span v-text="username">13200000000</span></el-button>
    </el-popover>
    <i class="fa fa-angle-right"></i>
  </div>
</div>
</template>

<script>
//映射mapState,mapActions
import {mapState,mapActions} from 'vuex'
    
export default {
    data:function(){
      return{
      }
    },
    mounted(){
      this.getUser()
    },
    computed:{
        ...mapState(['username'])
    },
    methods:{
      ...mapActions(['getUser']),
      logout(){
            //清除local storage中的login
            localStorage.removeItem('login')
            //跳转
            setTimeout(()=>{
                this.$router.replace('/login')
            },1000)
        }
    }
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 1);
  overflow: hidden;
  line-height: 60px;
  font-size: 12px;
  box-sizing: border-box;
  padding: 0 10px;
  .header-left {
    float: left;
    cursor: pointer;
    >span:nth-child(1) {
      color: #323232;
      font-size: 16px;
      font-weight: bold;
    }
    >span:nth-child(2), span:nth-child(3), span:nth-child(4) {
      // color: #155bd4;
      display: inline-block;
      border: 1px solid #999;
      height: 20px;
      vertical-align: middle;
      line-height: 20px;
      margin-left: 10px;
      padding: 0 3px;
      border-radius: 3px;
    }
    span.blue {
      color: #155bd4;
      border: 1px solid  #155bd4;
    }
  }
  .header-right {
    float: right;
    cursor: pointer;
    i {
      font-size: 20px;
      color: #999999;
    }
    span {
      padding: 0 10px;
      font-size: 14px;
      color:  #999999;
      font-weight: bold;
    }
  }
}
</style>
