<template>
<div>
   
    
    <div>
    

    <div>
      <el-collapse-transition>
        <div v-show="show3">
          
         <div class="book1"> 
             <span>客户身份： </span>
             <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                   </el-option>
             </el-select>

             <span>权益卡： </span>
             <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                   </el-option>
             </el-select>

              <span>性别： </span>
             <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                   </el-option>
             </el-select>
         </div>
        

          <div class="book2"> 
              <span class="bkspan1">来源渠道： </span>
             <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                   </el-option>
             </el-select>
            
             <span class="bkspan2">来源方式：</span>
             <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                   </el-option>
             </el-select>

             <span class="bkspan3">微信地域： </span>
             <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                   </el-option>
             </el-select>
         </div>

        <div> 
             <span>标签： </span>
             <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                   </el-option>
             </el-select>

               <span class="block">购买次数:</span>
            <div class="num">
              <span>                        
                <el-input placeholder="0" v-model="input3"><i slot="suffix">次</i></el-input>
              </span>
              <span>-</span>
              <span>
                <el-input placeholder="0" v-model="input3"><i slot="suffix">次</i></el-input>
              </span>
            </div>

                 <span class="block">笔单价:</span>
            <div class="num">
              <span>                        
                <el-input placeholder="0" v-model="input3"><i slot="suffix">元</i></el-input>
              </span>
              <span>-</span>
              <span>
                <el-input placeholder="0" v-model="input3"><i slot="suffix">元</i></el-input>
              </span>
            </div>
         </div>

            <div>
                   <span class="block">积分:</span>
            <div class="num">
              <span>                        
                <el-input placeholder="0" v-model="input3"><i slot="suffix">分</i></el-input>
              </span>
              <span>-</span>
              <span>
                <el-input placeholder="0" v-model="input3"><i slot="suffix">分</i></el-input>
              </span>
            </div>


                   <span class="block">储值余额:</span>
            <div class="num">
              <span>                        
                <el-input placeholder="0" v-model="input3"><i slot="suffix">元</i></el-input>
              </span>
              <span>-</span>
              <span>
                <el-input placeholder="0" v-model="input3"><i slot="suffix">元</i></el-input>
              </span>
            </div>


                  <span class="block">累计消费金额:</span>
            <div class="num">
              <span>                        
                <el-input placeholder="0" v-model="input3"><i slot="suffix">元</i></el-input>
              </span>
              <span>-</span>
              <span>
                <el-input placeholder="0" v-model="input3"><i slot="suffix">元</i></el-input>
              </span>
            </div>


            </div>
        </div>
      </el-collapse-transition>
    </div>
     <div class="Yc">
      <el-button type="primary">筛选</el-button>
      <el-link :underline="false">重置筛选条件</el-link>
      <el-button @click="show3 = !show3">展开</el-button>
    </div>
  </div>

</div>
</template>

<script>
export default {
    data: () => ({
      show3: false
    })
  }
</script>

<style lang="scss">
.Yc{
    float: left;
    margin-left:170px;
}
.el-link{
    margin-left: 15px;
}
.book1{
   margin-top: 20px;
  margin-left: -223px;
  >span{
    margin-left: 80px;
  }
}
.book2{
   margin-top: 20px;
  .bkspan1{
     margin-left: -120px;
  }
   .bkspan2{
     padding-left: 90px;
  }
   .bkspan3{
     margin-left: 50px;
  }
}


</style>
