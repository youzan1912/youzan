<template>
    <div class="productTable">
        <el-row type="flex" >
           <el-table :data="goodsList" style="width: 100%" :default-sort = "{prop: 'date', order: 'descending'}" >
               
              <el-table-column type="selection"  width="55" class="first-btn"> </el-table-column>
              <el-table-column  label="商品图片 "   width="150">
                <img class="goodspic" prop="img">
              </el-table-column>
             <el-table-column prop="good" label="商品 价格" sortable width="150"> </el-table-column>
             
             <el-table-column prop="goodsList" label="访问量" sortable width="150"></el-table-column>
             <el-table-column prop="stock" label="库存" sortable width="150"></el-table-column>
             <el-table-column prop="sales" label="总销量" sortable width="150"></el-table-column>
             <el-table-column prop="date" label="创建时间" sortable width="150"></el-table-column>
             <el-table-column prop="number" label="序号" sortable width="150"></el-table-column>
             <el-table-column prop="handle" label="操作"  ><a href="###">编辑</a><span>|</span><a href="###">推广</a>
             </el-table-column>
           
            
           </el-table>
     
        </el-row>
        <el-row type="flex" style="margin-top: 20px" align="middle">

            <el-col :span="10" >
               <el-button>改分组</el-button>
               <el-button>下架</el-button>
               <el-button>删除</el-button>
               <el-button>批量设置</el-button>
            </el-col>

            <el-col :span="7" >

                <el-col :span="2" :offset="13" >
                     <span>共</span>
                </el-col>

                <el-col :span="1">
                    <span v-text="goodsList.length" >3</span>
                </el-col>
                
                <el-col :span="2" >
                    <span>条</span>
                </el-col>

                <el-col :span="6">
                    <span>每页5条</span>   
                 </el-col>
               
               
               
                
             </el-col>

           <el-col :span="6">
             
               
             
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage1" :page-size="5" layout="prev, pager, next, jumper" :total="20"  ></el-pagination>

           </el-col>
        </el-row>

   </div>
</template>
<script>
 
import {mapState,mapActions} from 'vuex'
export default {
      data() {
      return {
        currentPage1: 1,
         
      }
    },
    computed:{
      ...mapState(['goodsList'])
    },
    methods: {
        handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      ...mapActions(['getGoodsList'])
    
    },
    mounted () {
        this.getGoodsList()
    }
      
}
</script>
<style lang="scss" scoped>
    .productTable{
        margin-left:164px;
        // overflow: hidden;
    }
    .goodspic{
         width:60px;
         height:60px;
       }
       .el-table td, .el-table th.is-leaf {
    border-bottom: 2px solid #EBEEF5;
}
    
</style>