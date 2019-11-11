<template>
  <div class="product">
    <el-aside>
    </el-aside>
    <el-header>
      <ProductHead></ProductHead>
    </el-header>

    <el-container class="ProductContent-box">
      <el-main>
        <ProductContent></ProductContent>
      </el-main>
    </el-container>
  </div>
</template>
<script>
 
import ProductContent from "./productContent";
import ProductHead from "./ProductHead";

export default {
  components: {
    ProductContent,
    ProductHead
  }
};
</script>
<style lang="scss" scoped>
.ProductContent-box {
  background: #f7f8fa;
  overflow: hidden;
  min-height: 500px;
}
</style>