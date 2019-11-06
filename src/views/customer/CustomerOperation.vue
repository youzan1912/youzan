<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    max-height="300">
    <el-table-column
      fixed
      prop="date"
      label="客户"
      width="100%">
    </el-table-column>
    <el-table-column
      prop="name"
      label="权益卡"
      width="120">
    </el-table-column>
    <el-table-column
      prop="province"
      label="积分"
      width="120">
    </el-table-column>
    <el-table-column
      prop="city"
      label="储值余额"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="购买次数"
      width="300">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="累计消费金额"
      width="120">
    </el-table-column>
     <el-table-column
      prop="timemo"
      label="上次消费时间"
      width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="120">
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
</template>
<script>
   export default {
    methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      }
    },
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
      }
    }
  }
</script>
<style>

</style>

