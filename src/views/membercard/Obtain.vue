<template>
  <div>
    <Searchinput></Searchinput>

    <el-table :data="ObtainList" style="width: 95%" max-height="250" :header-cell-style="{background:'#eef1f6',color:'#606266'}">
      <el-table-column fixed prop="date" label="领取时间"  ></el-table-column>
      <el-table-column prop="number" label="卡号" ></el-table-column>
      <el-table-column prop="" label="权益卡 | 类型" ></el-table-column>
      <el-table-column prop="name" label="领卡人" ></el-table-column>
      <el-table-column prop="issuer" label="发卡人"  ></el-table-column>
      <el-table-column prop="" label="状态" ></el-table-column>
      <el-table-column fixed="right" label="操作" >
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData)"
            type="text"
            size="small"
          >移除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import Searchinput from './Searchinput'
import {mapActions, mapState} from 'vuex'
export default {
  
  data(){
    return{
      
    }
  },
  computed: {
    ...mapState(['ObtainList'])
  },
   components: {
     Searchinput
   },
   methods:{
     ...mapActions(['getObtain'])
   },
   mounted(){
     this.getObtain()
   }
};
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