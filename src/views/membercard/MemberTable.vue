<template>
  <div>
    <el-table
      :data="MemberList.slice((currentPage-1)*pagesize,currentPage*pagesize)"
      style="width: 100%"
      :header-cell-style="{background:'#eef1f6',color:'#606266'}"
    >
      <el-table-column prop="name" label="权益卡名称"></el-table-column>
      <el-table-column prop="receipt" label="领取条件"></el-table-column>
      <el-table-column prop="date" label="有效期"></el-table-column>
      <el-table-column prop="rights" label="权益"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="handleCheck(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small" @click="detele(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页组件 -->
    <el-row type="flex" align="middle">
     <el-col :span="5" :offset="15">
       <span>共有</span>
       <span>{{MemberList.length}}</span>
       <span>条数据</span>
     </el-col>
      <el-col :span="6" >
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-size="pagesize"
          layout="prev, pager, next, jumper"
          :total="total"
        >
        </el-pagination>
      </el-col>
    </el-row>
  </div>
</template>
<script>
 import {mapState,mapActions, mapMutations} from "vuex"
export default {
  data() {
    return {
       //当前选中的页数
      currentPage: 1,
      //每页条数
      pagesize: 3,
      //数据总条数
      total:5,
      deleteitem:[]
    };
  },
  computed: {
   ...mapState(["MemberList"])
  },
  components: {
     
  },
  methods: {
    ...mapMutations(['deleteMember']),
    ...mapActions(['getMember']),
    handleCheck(row) {
      console.log(row);
    },
     handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
    },
      handleCurrentChange(currentPage) {
        this.currentPage=currentPage
    },
    detele(row){
      this.deleteitem=row
      console.log(this.deleteitem)
       this.deleteMember(this.deleteitem)
    }
  },
  mounted () {
    this.getMember()
  
  },
  updated(){
  this.total=this.MemberList.length
  }
};
</script>
<style lang="scss" scoped>
.el-pagination{
  margin-top:20px;
}
</style>
