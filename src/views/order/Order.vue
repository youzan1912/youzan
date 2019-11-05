<template>
  <div class="order">
    <div class="order-header">订单查询</div>
    <div class="order-main">
      <el-row type="flex" align="middle" :gutter="10">
        <el-col :span="1.5">订单搜索:</el-col>
        <el-col :span="5">
          <el-select v-model="value_search" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-col>
        <el-col :span="6">
          <el-input v-model="input" placeholder></el-input>
        </el-col>
      </el-row>

      <div>
        <div class="block">
          <span class="demonstrationx">下单时间:</span>
          <el-date-picker v-model="value1" type="date" class="block-left" placeholder="开始日期"></el-date-picker>
          <span class="block-time">至</span>
          <el-date-picker v-model="value1" type="date" placeholder="结束日期"></el-date-picker>
          <span class="block-right">今</span>
          <span class="block-right">昨</span>
          <span class="block-rightx">近7天</span>
          <span class="block-rightx">近30天</span>
        </div>
      </div>

      <div class="block-input2">
        <el-row type="flex" align="middle" :gutter="10">
          <el-col :span="1.5">商品名称:</el-col>

          <el-col :span="4.8">
            <el-input v-model="input" placeholder="请输入"></el-input>
          </el-col>

          <el-col :span="4.5">
            <span class="demonstration">订单类型:</span>
            <el-select v-model="value" placeholder="全部">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <span class="demonstration">维权状态:</span>
            <el-select v-model="value" placeholder="全部">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-col>
        </el-row>
      </div>

      <div class="block-input3">
        <el-col :span="4.5">
          <span class="demonstrationx">订单状态:</span>
          <el-select v-model="value" placeholder="已发货">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <span class="demonstrationxx">配送方式:</span>
          <el-select v-model="value" placeholder="全部">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <span class="demonstrationxx">付款方式:</span>
          <el-select v-model="value" placeholder="全部">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-col>
      </div>

      <div class="block-input4">
        <el-col :span="4.5">
          <span class="demonstrationx">订单来源:</span>
          <el-select v-model="value" placeholder="全部">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <span class="demonstrationxx">是否加星:</span>
          <el-select v-model="value" placeholder="全部">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-col>
      </div>

      <div block-input5>
          <span class="btn1"><el-button type="primary">筛选</el-button></span>
          <span class="btn2"><el-button type="">导出</el-button></span>
          <span class="btn3">查看已导出列表 重置筛选条件</span>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "订单号"
        },
        {
          value: "选项2",
          label: "外部单号"
        },
        {
          value: "选项3",
          label: "收获人姓名"
        },
        {
          value: "选项4",
          label: "收获人手机号"
        },
        {
          value: "选项5",
          label: "收获人后四位身份证号"
        }
      ],
      value: "",
      input: "",
      value_search: ""
    };
  },
  pickerOptions: {
    disabledDate(time) {
      return time.getTime() > Date.now();
    },
    shortcuts: [
      {
        text: "今天",
        onClick(picker) {
          picker.$emit("pick", new Date());
        }
      },
      {
        text: "昨天",
        onClick(picker) {
          const date = new Date();
          date.setTime(date.getTime() - 3600 * 1000 * 24);
          picker.$emit("pick", date);
        }
      },
      {
        text: "一周前",
        onClick(picker) {
          const date = new Date();
          date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
          picker.$emit("pick", date);
        }
      }
    ]
  },
  value1: ""
};
</script>

<style lang="scss" scoped>
.order-header {
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background: whitesmoke;
}
.order-main {
  width: 1258px;
  height: 375px;
  background: #f7f8fa;
  margin: 80px auto;
}
.block {
  margin-top: 15px;
}
.block-left {
  margin-left: 10px;
}
.block-time {
  margin-left: 20px;
  margin-right: 20px;
}
.block-right {
  display: inline-block;
  border: 1px solid #ccc;
  width: 25px;
  height: 30px;
  margin-left: 20px;
  text-align: center;
  line-height: 30px;
  color: #ccc;
}
.demonstration {
  margin-left: 10px;
}
.demonstrationxx {
  margin-left: 15px;
}
.block-rightx {
  display: inline-block;
  border: 1px solid #ccc;
  width: 55px;
  height: 30px;
  margin-left: 20px;
  text-align: center;
  line-height: 30px;
  color: #ccc;
}
.block-input2 {
  margin-top: 15px;
}
.block-input3 {
  margin-top: 15px;
}
.block-input4 {
  display: inline-block;
  margin-top: 15px;
}
.block-input5 {
  padding:40px ;
}
.btn1{
    margin-left: 70px;
}
.btn2{
    margin-left: 10px;
}
.btn3{
    margin-left: 20px;
    color: #155bd4;
}
</style>