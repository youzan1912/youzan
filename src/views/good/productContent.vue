<template>
  <div class="productContent">
    <div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="销售中" name="first">
          <ProductInput></ProductInput>
          <ProductTable></ProductTable>
        </el-tab-pane>

        <el-tab-pane label="已售罄" name="second">
            <ProductInput></ProductInput>
        </el-tab-pane>

        <el-tab-pane label="仓库中" name="third">
          <ProductInput></ProductInput>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import ProductTable from "./ProductTable";
import ProductInput from "./productInput";
import {mapState } from "vuex"
export default {
  components: {
    ProductTable,
    ProductInput
  },
  data() {
    return {
      activeName: "first"
    };
  },
  computed:{
        ...mapState(['goodslist'])
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
      if(this.activeName=="second"){
       console.log("11111")
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.productContent {
  margin-left: 164px;
  margin-top: 10px;
  background: #fff;
  overflow: hidden;
}
</style>