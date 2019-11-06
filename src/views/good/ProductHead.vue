<template>
  <!-- 顶部的header组件 -->
  <div class="nav-top-box">
    <div class="nav-top">
      <el-row type="flex" align="middle" justify="between">
        <el-col :span="5" :offset="2">
          <span>商品管理</span>
        </el-col>

        <el-col :span="3" :offset="14">
          <span>
            <i class="fa fa-graduation-cap"></i>
          </span>
          <span>帮助和服务</span>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.el-row {
  line-height: 60px;
  .el-col {
    span {
      margin-right: 20px;
    }
  }
}
</style>