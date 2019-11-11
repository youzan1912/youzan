<template>
  <div class="productTable">
    <el-row type="flex" >
      <el-table
        :data="goodsList.slice((currentPage-1)*pagesize,currentPage*pagesize)" style="width: 100%"
        :default-sort="{prop: 'date', order: 'descending'}"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"  ></el-table-column>
        <el-table-column label="商品图片 " width="140">
          <template scope="scope">
            <img :src="scope.row.img" class="goodspic" />
          </template>
        </el-table-column>
        <el-table-column prop="good"  label="商品价格" sortable width="170"></el-table-column>
        <el-table-column prop="visit" label="访问量" sortable width="170"></el-table-column>
        <el-table-column prop="stock" label="库存" sortable width="170"></el-table-column>
        <el-table-column prop="sales" label="总销量" sortable width="170"></el-table-column>
        <el-table-column prop="date" label="创建时间" sortable width="170"></el-table-column>
        <el-table-column prop="number" label="序号" sortable width="170"></el-table-column>
        <el-table-column prop="handle" label="操作">
          <a href="###">编辑</a>
          <span>|</span>
          <a href="###">推广</a>
        </el-table-column>
      </el-table>
      
    </el-row>
      <!-- table end  -->

    <el-row type="flex" style="margin-top: 20px" align="middle">
      <el-col :span="10">
        <el-button>改分组</el-button>
        <el-button @click="changeGoods" >下架</el-button>
        <el-button @click="deleteBtn">删除</el-button>

        <el-button>批量设置</el-button>
      </el-col>

      <el-col :span="7">
        <el-col :span="2" :offset="13">
          <span>共</span>
        </el-col>

        <el-col :span="1">
          <span v-text="goodsList.length">3</span>
        </el-col>

        <el-col :span="2">
          <span>条</span>
        </el-col>

        <el-col :span="6">
          <span>每页{{pagesize}}条</span>
        </el-col>
      </el-col>

      <!-- 分页条 -->
      <el-col :span="6">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-size="pagesize"
          layout="prev, pager, next, jumper"
          :total="total"
        ></el-pagination>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";
 
export default {
  data() {
    return {
      total: 1,
      pagesize:4,
      currentPage: 1,
      multipleSelection: [],
    };
  },
  computed: {
    ...mapState(["goodsList","goodsList3"])
  },
  methods: {
    deleteBtn() {
       if(this.multipleSelection.length>0){
         this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
             confirmButtonText: '确定',
             cancelButtonText: '取消',
             type: 'warning'
           }).then(() => {
             
             this.deleteGoods(this.multipleSelection);
             this.$message({
               type: 'success',
               message: '删除成功!'
             });
           }).catch(() => {
             this.$message({
               type: 'info',
               message: '已取消删除'
             });          
           });
          }else{
            this.$message({
          message: '请选择需要删除的信息',
          type: 'warning'
          });
         }
      
 
    },
    changeGoods(){
      this.updateGoodsList3(this.multipleSelection)
    },
    handleCurrentChange(currentPage) {
      //当前页面
      this.currentPage = currentPage;
    },
    ...mapMutations(["deleteGoods","updateGoodsList3"]),
    ...mapActions(["getGoodsList"]),

    handleSelectionChange(val) {
      console.log(val)
      this.multipleSelection = val;
      console.log(this.multipleSelection);
    }
  },
  mounted() {
    this.getGoodsList();
  },
  updated() {
    this.total = this.goodsList.length;
     
  }
};
</script>
<style lang="scss" scoped>
.goodspic {
  width: 60px;
  height: 60px;
}
 
</style>