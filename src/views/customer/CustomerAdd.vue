<template>
    <div>
         <div>
             <el-button type="primary" @click="dialogVisible = true">添加客户</el-button>
             <el-dialog title="添加客户" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
             
        <div class="shenfen"> 
            <span>客户身份</span>
            <el-radio v-model="radio" label="1">非会员</el-radio>
            <el-radio v-model="radio" label="2">会员</el-radio>
        </div>

        <div class="phone">
            <span>手机号</span>
            <el-input v-model="input" placeholder="请输入内容"></el-input>
        </div>

        <div class="names">
            <span>姓名</span>
            <el-input v-model="input" placeholder="请输入内容"></el-input>
        </div>

        <div class="bq">
             <span>标签</span>
             <el-select v-model="value" placeholder="请选择">
             <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
             </el-select>
        </div>

        <div class="sex">
            <span>性别</span>
            <el-radio v-model="radio1" label="1">男</el-radio>
            <el-radio v-model="radio1" label="2">女</el-radio>
        </div>

        <div class="paty">
            <span>生日</span>
            <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
        </div>
      

        <div class="address">
             <span>地域</span>
             <el-select v-model="value" placeholder="请选择">
             <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
             </el-select>
        </div>
    
    
    <div class="beizhu">
        <span>备注</span>
        <div class="ipt">
        <el-input type="textarea" :rows="2" placeholder="请不要超过200字" v-model="textarea" ></el-input>
        </div>
    </div>
  
        
             <span slot="footer" class="dialog-footer">

             <div class="btm"><el-button @click="dialogVisible = false">取 消</el-button>
             <el-button type="primary" @click="dialogVisible  = false">保存</el-button></div>

             </span>  
            </el-dialog>
        
            <el-link :underline="false">粉丝管理</el-link>
         </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        dialogVisible: false,
        radio: '1',
        radio1:'1'
      };
    },
    methods: {

    }
  };
</script>

<style lang="scss" scoped>
.el-button{
    float: left;
    margin-left:20px;
}
.el-link{
    float: right;
    margin-top:10px;
}
.shenfen{
    margin-left: -150px;
    span{
        padding: 10px;
    }
}
.phone{
    margin-left: -65px;
    margin-top:20px;
    span{
        padding: 10px;
    }
}
.names{
    margin-left: -52px;
    margin-top:20px;
    span{
        padding: 10px;
    }
}
.bq{
    margin-left: -52px;
    margin-top:20px;
    span{
        padding: 10px;
    }
}
.sex{
     margin-left: -166px;
    margin-top:20px;
    span{
        padding: 10px;
    }
}
.paty{
     margin-left: -52px;
    margin-top:20px;
    span{
        padding: 10px;
    }
}
.address{
     margin-left: -52px;
    margin-top:20px;
    span{
        padding: 10px;
    }
}
.beizhu{
   margin-top:20px;
    span{
       margin-left: -268px; 
    }
    .ipt{
        width:160px;
        margin-left: 99px;
        margin-top: -20px;
        height: 50px;
    }
   
}
.btm{
    margin-top: -30px;
    margin-left:241px;
}
</style>
