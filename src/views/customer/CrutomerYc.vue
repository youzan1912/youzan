<template>
<div>
  <div>
    <div>
      <el-collapse-transition>
        <div v-show="show3">
          
         <div class="book1"> 
             <span>客户身份： </span>
             <el-select v-model="value" placeholder="请选择">
             <el-option v-model="value">
             </el-option>
             </el-select>

             <span>权益卡： </span>
             <el-select v-model="value" placeholder="请选择">
             <el-option v-model="value">
             </el-option>
             </el-select>

             <span>性别： </span>
             <el-select v-model="value" placeholder="请选择">
             <el-option v-model="value">
             </el-option>
             </el-select>
         </div>
        

          <div class="book2"> 
            <div class="laiyuan1">
            <span class="bkspan1">来源渠道： </span>
            <el-select v-model="value" placeholder="请选择">
            <el-option v-model="value">
            </el-option>
            </el-select>
          </div>

            <div  class="laiyuan2">
             <span class="bkspan2">来源方式：</span>
             <el-select v-model="value" placeholder="请选择">
             <el-option v-model="value">
             </el-option>
             </el-select>
            </div>

          <div class="laiyuan3">
             <span class="bkspan3">微信地域： </span>
             <el-select v-model="value" placeholder="请选择">
             <el-option v-model="value">
             </el-option>
             </el-select>
            </div>

         </div>
      <div class="bq1">
            <span>标签： </span>
            <el-select v-model="value" placeholder="请选择">
            <el-option v-model="value" >
            </el-option>
            </el-select>
        </div>

        <div class="ddd"> 
            <div class="goumai">
              <span class="block">购买次数：</span>
              <span>                        
              <el-input placeholder="0" ><i slot="suffix" style="font-style:normal;line-height:40px">次</i></el-input>
              </span>
              <span>-</span>
              <span>
              <el-input placeholder="0"><i slot="suffix" style="font-style:normal;line-height:40px">次</i></el-input>
              </span>
          
          </div>

          <div class="danjia">
              <span class="block">笔单价：</span>
              <span>                        
              <el-input placeholder="0"><i slot="suffix" style="font-style:normal;line-height:40px">元</i></el-input>
              </span>
              <span>-</span>
              <span>
              <el-input placeholder="0" ><i slot="suffix" style="font-style:normal;line-height:40px">元</i></el-input>
              </span>
           </div>

         </div>

      <div class="ccc">
           <div class="yue">
                <span>积分：</span>
              <span>                        
                <el-input placeholder="0" ><i slot="suffix" style="font-style:normal;line-height:40px">分</i></el-input>
              </span>
              <span>-</span>
              <span>
                <el-input placeholder="0" ><i slot="suffix" style="font-style:normal;line-height:40px">分</i></el-input>
              </span>
            </div>


            <div class="jine">
                <span>储值余额：</span>
              <span>                        
                <el-input placeholder="0"><i slot="suffix" style="font-style:normal;line-height:40px">元</i></el-input>
              </span>
              <span>-</span>
              <span>
                <el-input placeholder="0"><i slot="suffix" style="font-style:normal;line-height:40px">元</i></el-input>
              </span>
            </div>


          <div class="xfje">
                <span>累计消费金额：</span>
              <span>                        
                <el-input placeholder="0" ><i slot="suffix" style="font-style:normal;line-height:40px">元</i></el-input>
              </span>
              <span>-</span>
              <span>
                <el-input placeholder="0"><i slot="suffix" style="font-style:normal;line-height:40px">元</i></el-input>
              </span>
          </div>  
        </div>

        </div>
      </el-collapse-transition>
    </div>
  
    <div class="Yc">
      <div>
      <el-button type="primary" @click="sx">筛选</el-button>
      <el-link :underline="false">重置筛选条件</el-link>
      <el-button @click="show3 = !show3">展开</el-button>
     </div>
    </div>
  </div>
</div>
</template>

<script>
import Bus from '@/views/customer/Bus.js'
import { mapMutations } from 'vuex';
export default {
    data: () => ({
      show3: false,
      value:null,
      msg:''
    }),
    methods:{
      ...mapMutations(['updateDress']),
      sx(){
        this.updateDress({customer:this.msg})
      }
    },
    mounted(){
      var that=this
      Bus.$on('chat',function(msg){
          that.msg=msg
          console.log(that.msg)
      })

    }
  }
</script>

<style lang="scss">
.Yc{
    float: left;
    padding-top:20px;
    background-color: #F7F8FA;
    width:580px;
    height: 100px;
    margin-left:110px 
}
.el-link{
    margin-right: 5px;
    margin-left: 5px;
}
.book1{
   margin-top: 20px;
  margin-left: -55px;
  >span{
    margin-left: 80px;
  }
}.laiyuan1{
  margin-left: -865px;
}.laiyuan2{
  margin-top:-40px;
   margin-left: -491px;
}.laiyuan3{
  margin-top:-40px;
   margin-left: -144px;
}.book2{
  margin-top:20px;
  margin-left: 890px;
}.bq1{
  margin-left:56px;
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
  margin-left: 400px;
}
.danjia{
  margin-top: -40px;
  margin-left: 765px;
}
.ccc{
  .el-input{
     width:110px!important;
  }
}
.yue{
   margin-top: 20px;
  margin-left: 60px;
}
.jine{
  margin-top: -40px;
  margin-left: 400px;
}.xfje{
  margin-top: -40px;
  margin-left: 715px;
}




</style>
