<template>
  <div class="productContent">
    <div>
        <keep-alive>
      <el-tabs v-model="activeName" @tab-click="handleClick">
           <el-tab-pane label="销售中" name="first">
             <ProductInput></ProductInput>
             <ProductTable></ProductTable>
           </el-tab-pane>
        

       
         <el-tab-pane label="已售罄" name="second">
            <ProductInput></ProductInput>
             <ProductTable2></ProductTable2>
        </el-tab-pane> 
           
             <el-tab-pane label="仓库中" name="third">
               <ProductInput></ProductInput>
                 <ProductTable3></ProductTable3>
             </el-tab-pane>
      </el-tabs>
        </keep-alive>
    </div>
  </div>
</template>
<script>
import ProductTable from "./ProductTable";
import ProductTable2 from "./ProductTable2";
import ProductTable3 from "./ProductTable3";
import ProductInput from "./productInput";
import {mapState, mapMutations,mapActions } from "vuex"
export default {
  components: {
    ProductTable,
    ProductInput,
    ProductTable2,
    ProductTable3
  },
  data() {
    return {
      activeName: "first",
        goodsList2:[{
            "id":2,
            "img":"//img14.360buyimg.com/n2/s240x240_jfs/t1/79558/28/12532/419786/5d9f01e7Ee9e13f38/76a2830d587a8f20.jpg!q70.jpg", 
           "good":"橡皮糖",
           "visit":0,
           "stock":80,
           "sales":20,
           "date":"2017-05-07",
           "number":2
           },],
        
      
    };
  },
  computed:{
        ...mapState(['goodslist'  ])
  },
  methods: {
    ...mapActions(['getGoodsList']),
    ...mapMutations(['updateGoodsList2','updateGoodsList3']),
    handleClick(tab, event) {
      console.log(tab, event);
         
    }
  }
};
</script>
<style lang="scss" scoped>
.productContent {
 padding-left:10px;
 padding-bottom:20px;
  margin-top: 10px;
  background: #fff;
  overflow: hidden;
}

</style>