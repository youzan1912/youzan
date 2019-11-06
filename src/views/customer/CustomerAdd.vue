<template>
    <div>
         <div>
             <el-button type="primary" @click="dialogVisible = true">添加客户</el-button>
             <el-dialog title="添加客户" :visible.sync="dialogVisible" width="30%">
             
        <div class="shenfen"> 
            <span>客户身份</span>
            <el-radio v-model="identity" label="1">非会员</el-radio>
            <el-radio v-model="identity" label="2">会员</el-radio>
        </div>

        <div class="phone">
            <span>手机号</span>
            <el-input v-model="phone" placeholder="请输入内容"></el-input>
        </div>

        <div class="names">
            <span>姓名</span>
            <el-input v-model="customer" placeholder="请输入内容"></el-input>
        </div>

        <div class="bq">
             <span>标签</span>
             <el-select v-model="labels" placeholder="请选择">
             <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
             </el-select>
        </div>

        <div class="sex">
            <span>性别</span>
            <el-radio v-model="sex" label="1">男</el-radio>
            <el-radio v-model="sex" label="2">女</el-radio>
        </div>

        <div class="paty">
            <span>生日</span>
            <el-date-picker v-model="birthday" type="date" placeholder="选择日期"></el-date-picker>
        </div>
      

        <div class="address">
             <span>地域</span>
             <el-select v-model="address" placeholder="请选择">
             <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value"></el-option>
             </el-select>
        </div>
    
    
    <div class="beizhu">
        <span>备注</span>
        <div class="ipt">
        <el-input type="textarea" :rows="2" placeholder="请不要超过200字" v-model="remarks"  ></el-input>
        </div>
    </div>
  
        
        <span slot="footer" class="dialog-footer">
            <div class="btm"><el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="add">保存</el-button></div>
        </span>  
        </el-dialog>
       <el-link :underline="false">粉丝管理</el-link>
     </div>
    </div>
</template>

<script>
import {mapState,mapActions,mapMutations} from 'vuex'
export default {
  data() {
    return {
      dialogVisible: false,
      identity: "",
      radio1: "",
      value: "",
      birthday: "",
      input: "",
      phone: "",
      customer: "",
      sex: "",
      address: "",
      labels: "",
      remarks: "",
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      options1: [
        {
          value: "选项1",
          label: "深圳"
        },
        {
          value: "选项2",
          label: "北京"
        },
        {
          value: "选项3",
          label: "上海"
        },
        {
          value: "选项4",
          label: "广州"
        },
        {
          value: "选项5",
          label: "廖宝炜"
        }
      ]
    };
  },
  methods: {
    ...mapMutations(['updateAdd']),
    ...mapActions(['getAdd']),
    add() {
      this.dialogVisible = false;

      var custArr = {
        identity: this.identity,
        phone: this.phone,
        customer: this.customer,
        labels: this.labels,
        sex: this.sex,
        birthday: this.birthday,
        address: this.address,
        remarks: this.remarks
      }
      console.log(custArr);
    }
  },
  mounted() {
    this.getAdd(this.custArr);
  },
  computed: {
    ...mapState(["customer2"])
  }
};
</script>

<style lang="scss" scoped>
.el-button {
  float: left;
  margin-left: 20px;
}
.el-link {
  float: right;
  margin-top: 10px;
}
.shenfen {
  margin-left: -150px;
  span {
    padding: 10px;
  }
}
.phone {
  margin-left: -65px;
  margin-top: 20px;
  span {
    padding: 10px;
  }
}
.names {
  margin-left: -52px;
  margin-top: 20px;
  span {
    padding: 10px;
  }
}
.bq {
  margin-left: -52px;
  margin-top: 20px;
  span {
    padding: 10px;
  }
}
.sex {
  margin-left: -166px;
  margin-top: 20px;
  span {
    padding: 10px;
  }
}
.paty {
  margin-left: -52px;
  margin-top: 20px;
  span {
    padding: 10px;
  }
}
.address {
  margin-left: -52px;
  margin-top: 20px;
  span {
    padding: 10px;
  }
}
.beizhu {
  margin-top: 20px;
  span {
    margin-left: -268px;
  }
  .ipt {
    width: 160px;
    margin-left: 99px;
    margin-top: -20px;
    height: 50px;
  }
}
.btm {
  margin-top: -30px;
  margin-left: 241px;
}
</style>
