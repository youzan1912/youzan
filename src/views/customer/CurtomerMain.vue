<template>
    <div>
        <div>
            <el-button plain class="plain">全部客户</el-button>
            <el-button plain class="plain">新增客户</el-button>
            <el-button plain class="plain">兴趣人群</el-button>
            <el-button plain class="plain">微信互动粉丝</el-button>
        </div>
        <div>
   <div class="block">
     <div>
     <span class="demonstration">上次消费时间：</span>
     <el-date-picker
      v-model="value2"
      type="datetimerange"
      
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      align="right">
    </el-date-picker>
     </div>

     <div>
     <span class="demonstration">成为客户时间：</span>
     <el-date-picker
      v-model="value2"
      type="datetimerange"
     
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      align="right">
    </el-date-picker>
     </div>

     <div>
     <span class="demonstration">成为会员时间：</span>
     <el-date-picker
      v-model="value2"
      type="datetimerange"
      
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      align="right">
    </el-date-picker>
    </div>

         <div class="gjc">
            <span class="span1">关键词：</span>
             <el-input v-model='shai' @change="inpOne" placeholder="手机号/微信昵称/姓名"></el-input>
        </div>
        
  </div>
        </div>
    </div>
</template>

<script>
import Bus from '@/views/customer/Bus.js'
export default {
    data:function(){
        return{
            value2:'',
            shai:''
        }
    },
    methods:{
        inpOne(){
        Bus.$emit('chat',this.shai)
      }

    }
}
</script>

<style lang="scss" scoped>
    .el-button{
        float: left;
        margin-left:50px;
        width: 150px ;
        height: 60px ;
    }
    .block{
       padding-top:80px;
    //    margin-left: -720px;
       margin-top:20px;
       >div{
           margin-top:20px;
       }
    }
      .el-input{
        
       width: 220px !important;
   }
   .span1{
       margin-left:47px;
   }

</style>
