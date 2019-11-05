<template>
    <div class="product">
        <div class="meum-list">
                //左边留下的空间
        </div>

        <el-aside>
            <ProductList></ProductList>
        </el-aside>
        <el-header>
            <ProductHead></ProductHead>
        </el-header>
            
         <el-container  class="ProductContent-box">
             <el-main>

              <ProductContent></ProductContent>
              <ProductTable></ProductTable>

             </el-main>
         </el-container>
         
   </div>
</template>
<script>
import ProductList from "./ProductList"
import ProductContent from "./productContent"
import ProductHead from "./ProductHead"
import ProductTable from "./ProductTable"
export default {
    components: {
        ProductList,
        ProductContent,
        ProductHead,
        ProductTable
    }
}
</script>

<style lang="scss" scoped>
    .meum-list{
        width:116px;
        height:940px;
        background:black;
        float: left;
    }
    .ProductContent-box{
        background:#F7F8FA;
        overflow: hidden;
        min-height:500px;
    }
</style>