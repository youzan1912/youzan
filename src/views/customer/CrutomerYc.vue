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

            <div class="laiyuan1">
              <span class="bkspan1">来源渠道： </span>
             <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                   </el-option>
             </el-select>
            </div>

            <div  class="laiyuan2">
             <span class="bkspan2">来源方式：</span>
             <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                   </el-option>
             </el-select>
            </div>

            <div class="laiyuan3">
             <span class="bkspan3">微信地域： </span>
             <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                   </el-option>
             </el-select>
             </div>

         </div>
     <div class="bq1">
               <span>标签： </span>
             <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                   </el-option>
             </el-select>
             </div>

        <div class="ddd"> 
            <div class="goumai">
               <span class="block">购买次数：</span>
           
              <span>                        
                <el-input placeholder="0" v-model="input3"><i slot="suffix" style="font-style:normal;line-height:40px">次</i></el-input>
              </span>
              <span>-</span>
              <span>
                <el-input placeholder="0" v-model="input3"><i slot="suffix" style="font-style:normal;line-height:40px">次</i></el-input>
              </span>
          
          </div>

          <div class="danjia">
                <span class="block">笔单价：</span>
              <span>                        
                <el-input placeholder="0" v-model="input3"><i slot="suffix" style="font-style:normal;line-height:40px">元</i></el-input>
              </span>
              <span>-</span>
              <span>
                <el-input placeholder="0" v-model="input3"><i slot="suffix" style="font-style:normal;line-height:40px">元</i></el-input>
              </span>
           </div>

         </div>

      <div class="ccc">
           <div class="yue">
                <span>积分：</span>
              <span>                        
                <el-input placeholder="0" v-model="input3"><i slot="suffix" style="font-style:normal;line-height:40px">分</i></el-input>
              </span>
              <span>-</span>
              <span>
                <el-input placeholder="0" v-model="input3"><i slot="suffix" style="font-style:normal;line-height:40px">分</i></el-input>
              </span>
           </div>


            <div class="jine">
                <span>储值余额：</span>
              <span>                        
                <el-input placeholder="0" v-model="input3"><i slot="suffix" style="font-style:normal;line-height:40px">元</i></el-input>
              </span>
              <span>-</span>
              <span>
                <el-input placeholder="0" v-model="input3"><i slot="suffix" style="font-style:normal;line-height:40px">元</i></el-input>
              </span>
           </div>


          <div class="xfje">
                <span>累计消费金额：</span>
              <span>                        
                <el-input placeholder="0" v-model="input3"><i slot="suffix" style="font-style:normal;line-height:40px">元</i></el-input>
              </span>
              <span>-</span>
              <span>
                <el-input placeholder="0" v-model="input3"><i slot="suffix" style="font-style:normal;line-height:40px">元</i></el-input>
              </span>
         </div>  
</div>



        </div>
      </el-collapse-transition>
    </div>
  
         <div class="Yc">
      <div>
      <el-button type="primary">筛选</el-button>
      <el-link :underline="false">重置筛选条件</el-link>
      <el-button @click="show3 = !show3">展开</el-button>
      </div>
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
    margin-left:-765px;
    padding-top:20px;
    background-color: #F7F8FA;
    width:2110px;
    height: 100px;
}
.el-link{
    margin-right: 5px;
    margin-left: 5px;
}
.book1{
   margin-top: 20px;
  margin-left: -230px;
  >span{
    margin-left: 80px;
  }
}.laiyuan1{
  margin-left: -870px;
}.laiyuan2{
  margin-top:-40px;
   margin-left: -130px;
}.laiyuan3{
  margin-top:-40px;
   margin-left: 570px;
}.book2{
  margin-top:20px;
}.bq1{
  margin-left:-840px;
  margin-top:20px;
}.el-input{
  width:220px !important;
}.ddd{
  .el-input{
    width:110px!important;
  }
}
.goumai{
  margin-top: -40px;
  margin-left: -122px;
}
.danjia{
  margin-top: -40px;
  margin-left: 600px;
}
.ccc{
  .el-input{
     width:110px!important;
  }
}
.yue{
   margin-top: 20px;
  margin-left: -830px;
}
.jine{
  margin-top: -40px;
  margin-left: -120px;
}.xfje{
  margin-top: -40px;
  margin-left: 550px;
}




</style>
