<template>
    <div>
        <Searchinput></Searchinput>
        <el-table :data="tableData"   style="width: 95%" :header-cell-style="{background:'#eef1f6',color:'#606266'}" >
           <el-table-column prop="name" label="退卡时间"  ></el-table-column>
           <el-table-column prop="receipt" label="卡号"  ></el-table-column>
           <el-table-column prop="date" label="权益卡 | 类型"   ></el-table-column>
           <el-table-column prop="rights" label="退卡金额"  ></el-table-column>
           <el-table-column prop="rights" label="会员"  ></el-table-column>
           <el-table-column prop="rights" label="操作人"  ></el-table-column>
           <el-table-column label="操作"  >
             <template slot-scope="scope">
               <el-button @click="handleCheck(scope.row)" type="text" size="small">查看</el-button>
               <el-button type="text" size="small">编辑</el-button>
             </template>
           </el-table-column>
        </el-table>
   </div>
   
</template>
<script>
import Searchinput from './Searchinput'
export default {
     data(){
    return{
      tableData:[],
    }
  },
    components: {
        Searchinput
    }
}
</script>
<style lang="scss" scoped>
div{
  background:#fff;
}
.el-table{
  margin-left:20px;
   margin-top:20px
}
</style>