<template>
    <div class="productTable">
        <el-row type="flex" >
           <el-table :data="tableData" style="width: 100%" :default-sort = "{prop: 'date', order: 'descending'}" >
            
             <el-table-column type="selection"  width="55" > </el-table-column>
             <el-table-column prop="good" label="商品 价格" sortable width="150"></el-table-column>
             <el-table-column prop="come" label="访问量" sortable width="150"></el-table-column>
             <el-table-column prop="stock" label="库存" sortable width="150"></el-table-column>
             <el-table-column prop="sales" label="总销量" sortable width="150"></el-table-column>
             <el-table-column prop="date" label="创建时间" sortable width="150"></el-table-column>
             <el-table-column prop="number" label="序号" sortable width="150"></el-table-column>
             <el-table-column prop="handle" label="操作"  ><a href="###">编辑</a><span>|</span><a href="###">推广</a>
             </el-table-column>
            
           </el-table>
         
        </el-row>
        <el-row type="flex" style="margin-top: 20px">
            <el-col :span="10" align="center">
            
            <el-button>改分组</el-button>
            <el-button>下架</el-button>
            <el-button>删除</el-button>
            <el-button>批量设置</el-button>

            </el-col>
            
           <el-col :span="6" :offset="6">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage1" :page-size="5" layout="prev, pager, next, jumper" :total="20"  ></el-pagination>

           </el-col>
        </el-row>


            

         
   </div>
</template>
<script>
export default {
      data() {
      return {
        currentPage1: 1,
        tableData: [{
        good:'棉花糖',
        come:0,
        stock:100,
        sales:20,
        date:'2016-05-02',
        number:0
        }, {
        good:'棉花糖',
        come:0,
        stock:100,
        sales:20,
        date:'2016-05-02',
        number:0
        },
        {
        good:'棉花糖',
        come:0,
        stock:100,
        sales:20,
        date:'2016-05-02',
        number:0
        },
        {
        good:'棉花糖',
        come:0,
        stock:100,
        sales:20,
        date:'2016-05-02',
        number:0
        }
        ],
         
      }
    },
    methods: {
        handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    }
      
}
</script>
<style lang="scss" scoped>
    .productTable{
        margin-left:164px;
        // overflow: hidden;
    }
</style>