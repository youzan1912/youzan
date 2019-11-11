<template>
    <div>
         <el-header>
            <span>权益卡</span> 
        </el-header>
          <el-main>  
              <MemberHeader></MemberHeader>
              <router-view></router-view>
          </el-main>
        
      
   </div>
</template>
<script>
import MemberHeader from './MemberHeader'
export default {
    components:{
        MemberHeader
    }
}
</script>
<style lang="scss" scoped>
.el-header{
    height:60px;
    line-height:60px;
    margin-bottom:30px;
    span{
        float: left;
    }
}
.el-main{
    background:#F7F8FA;
}
</style>