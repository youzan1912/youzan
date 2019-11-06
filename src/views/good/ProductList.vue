<template>
  <div>
         <div class="productList">
            <el-row class="tac"  >
               <el-col :span="24" >
                  <div class="h5-border">
                   <span>商品管理</span>
                   </div>

                   <el-menu default-active="2" class="el-menu-vertical-demo"  @open="handleOpen"
                     @close="handleClose" 

                     >
                     <el-submenu index="1" >
                       <template slot="title" >
                       
                         <span>商品管理</span>
                       </template>

                       <el-menu-item-group >

                         <el-menu-item index="1-1" >商品管理</el-menu-item>
                         <el-menu-item index="1-2">商品分组</el-menu-item>
                          <el-menu-item index="1-3">商品页模板</el-menu-item>
                       </el-menu-item-group>

                     </el-submenu>

                     <el-submenu index="2">
                       <template slot="title">
                         <span>商品工具</span>
                       </template>

                       <el-menu-item-group>
                         <el-menu-item index="2-1">批量改价</el-menu-item>
                         <el-menu-item index="2-2">商品导入</el-menu-item>
                          <el-menu-item index="2-3">素材导入</el-menu-item>
                       </el-menu-item-group>

                     </el-submenu>
                          <el-divider></el-divider>
                     <el-submenu index="3"  >

                       <template slot="title">

                         <span>我要分销</span>
                       </template>

                       <el-menu-item-group>
                         <el-menu-item index="2-1">市场选货</el-menu-item>
                       </el-menu-item-group>
                     </el-submenu>
                   </el-menu>
              </el-col>        
         </el-row>
        </div>

    
  </div>
</template>
<script>
 
export default {
     methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
    }
 
</script>
<style lang="scss" scoped>
.productList{
  width:147px;
  position:fixed;
  left:116px;
      .el-menu{
        min-height:700px;
      }

    .el-submenu  .el-menu-item{
      min-width:100px;
      
      
    }
    .el-menu-item.is-active {
          color: #6681FA;
          background-color: #EBEDF0;
        }
     
}
.h5-border{
    border-bottom:1px solid #e6e6e6;
    border-right:1px solid #e6e6e6;
    height:64px;
    line-height: 64px;
     
}

</style>