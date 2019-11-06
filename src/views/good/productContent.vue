<template>
    <div class="productContent">
      
              <div>
                <el-tabs v-model="activeName" @tab-click="handleClick">
                      <el-tab-pane label="销售中" name="first"></el-tab-pane>
                      <el-tab-pane label="已售罄" name="second"></el-tab-pane>
                      <el-tab-pane label="仓库中" name="third"></el-tab-pane>
                </el-tabs>
              </div>
              <el-row type="flex"  >
                   <el-button type="primary">发布商品</el-button>
              </el-row>


        <el-form ref="form" :model="form" label-width="150px" >
            <el-row type="flex"   >
                <el-col :span="6">
                    <el-form-item label="商品名称或编码："  >
                         <el-input v-model="form.name" ></el-input>   
                    </el-form-item>
                </el-col>

                <el-col :span="6" >
                        <!-- 商品分组下拉列表框 -->
                          <el-form-item label="商品分组："   >
                         
                             <el-select v-model="form.region" placeholder="全部">
                               <el-option label="全部" value="quanbu"></el-option>
                               <el-option label="其他" value="qita"></el-option>
                               <el-option label="列表中隐藏" value="liebiaozhongyincang"></el-option>
                               <el-option label="最热商品" value="zuireshangpin"></el-option>
                                <el-option label="最新商品" value="zuixinshangpin"></el-option>
                             </el-select>
              
                          </el-form-item>

                </el-col>

                <el-col :span="6">
                  <!-- 商品类型下拉列表框 -->
                  <el-form-item label="商品类型：">
                    <el-select v-model="form.region2" placeholder="全部">
                      <el-option label="全部" value="quanbu"></el-option>
                      <el-option label="实物商品" value="shiwushangpin"></el-option>
                      <el-option label="电子卡券" value="dianzikaquan"></el-option>
                      <el-option label="酒店商品" value="jiudianshangpin"></el-option>
                       <el-option label="分销商品" value="fenxiaoshangpin"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>

               
            </el-row>

            <el-row type="flex" >
               <el-col :span="6">
                      <el-form-item label="总销量："  >
                           <el-col :span="11" > 
                                <el-input v-model="form.name1" > </el-input>
                            </el-col> 
                          <el-col :span="2" >
                              <span>-</span>
                          </el-col>  

                          <el-col :span="11"  >
                              <el-input v-model="form.name2" ></el-input> 
                          </el-col>  
                     </el-form-item>
                </el-col>

              <el-col :span="6">
                    <el-form-item label="价格："  >
                           <el-col :span="11" > 
                                <el-input v-model="form.name3" > </el-input>
                            </el-col> 
                          <el-col :span="2" >
                              <span>-</span>
                          </el-col>  

                          <el-col :span="11"  >
                              <el-input v-model="form.name4" ></el-input> 
                          </el-col>  
                     </el-form-item>
              </el-col>

                 <el-col :span="6">
                  <el-form-item label="扣减库存方式：">
                    <el-select v-model="form.region3" placeholder="全部">
                      <el-option label="全部" value="quanbu"></el-option>
                      <el-option label="拍下扣减库存" value="paixiakoujiankucun"></el-option>
                      <el-option label="付款扣减库存" value="fukuankoujiankucun"></el-option>
                       
                    </el-select>
                  </el-form-item>
                </el-col>

            </el-row>


            <el-row type="flex">
               <el-form-item>
                <el-button type="primary" @click="onSubmit">筛选</el-button>
                <el-button>导出报表</el-button>
              </el-form-item>
            </el-row>
            </el-form>  

        
   </div>
</template>
<script>
 
export default {
    
     data() {
      return {
        activeName: 'second',
        form: {
          name1: '',
          name2: '',
          name3: '',
          name4: '', 
          region: '',
          region2:'',
          region3:'',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
       onSubmit() {
        console.log('submit!');
      }
    }
}
</script>
<style lang="scss" scoped>
    .productContent{
        margin-left:164px;
        margin-top: 10px;
        background:#fff;
        overflow: hidden;
        
    }
</style>