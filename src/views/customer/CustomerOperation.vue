<template>
<div>
  <el-table
    :data="customer2"
    style="width: 100%"
    max-height="200">
    <el-table-column
      fixed
      prop="customer"
      label="客户"
      width="200px">
    </el-table-column>
    <el-table-column
      prop="card"
      label="权益卡"
      width="170">
    </el-table-column>
    <el-table-column
      prop="integral"
      label="积分"
      width="170">
    </el-table-column>
    <el-table-column
      prop="balance"
      label="储值余额"
      width="170">
    </el-table-column>
    <el-table-column
      prop="frequency"
      label="购买次数"
      width="170">
    </el-table-column>
    <el-table-column
      prop="consumption"
      label="累计消费金额"
      width="170">
    </el-table-column>
     <el-table-column
      prop="timemo"
      label="上次消费时间"
      width="170">
    </el-table-column>
   <el-table-column
      fixed="right"
      label="操作"
      width="220">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData)"
          type="text"
          size="small">
          设置权益卡|加标签|更多
        </el-button>
      </template>
    </el-table-column>
  </el-table>


<el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-sizes="[4, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>


  </div>
</template>
<script>
import {mapState,mapActions, mapMutations} from 'vuex'
   export default {
       data:function () {
        return{ 
        }
    },
    methods: {
      ...mapActions(['getCustomer']),
      ...mapMutations(['updateOrderList']),

        deleteRow(index, rows) {
        rows.splice(index, 1);
      },

       handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.updateOrderList({page:val})
      }
    },
    mounted(){
        this.handleCurrentChange()
        this.getCustomer()
    },
    computed:{
        ...mapState(['customer2'])
    }
  }
</script>
<style lang="scss">

</style>

