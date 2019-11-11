<template>
  <div>
    <!-- el-input and el-button start -->
    <el-row type="flex">
      <el-col :span="3">
        <el-button type="primary">新建权益卡</el-button>
      </el-col>

      <el-col :span="3" :offset="16">
        <el-input placeholder="请输入权益卡名称" prefix-icon="el-icon-search" v-model="input" @change="search()"></el-input>
      </el-col>
    </el-row>
    <!-- el-input and el-button end  -->
    <!-- el-tabs  start  -->
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="使用中" name="first" ></el-tab-pane>
      <el-tab-pane label="已禁用" name="second"  ></el-tab-pane>
      <el-tab-pane label="已过期" name="third" ></el-tab-pane>
    </el-tabs>
    <!-- el-tabs end  -->
    <!-- MemberTable component  -->
    <MemberTable  ></MemberTable>
  </div>
</template>
<script>
import { mapMutations,mapActions} from 'vuex'
import MemberTable from "./MemberTable";
export default {
  data() {
    return {
      input: "", //搜索框的默认值
      activeName: "first", //   分页点击的默认首选
      show1:false,
    };
  },
  methods: {
    ...mapMutations(['updateMember2','updateSearchList']),
     ...mapActions(['getMember','getMember2','getMember3']),
    //   分页导航的点击的方法
    handleClick() {
      if( this.activeName == "first"){
         this.getMember()
      }
      if( this.activeName == "second"){
          
          this.getMember2()
      }
      if( this.activeName == "third"){
         this.getMember3()
      }
    },
    search(){
        this.updateSearchList(this.input)
    }
  },
  components: {
    MemberTable //底部表格组件
  },
  mounted(){
    this.getMember()
  }
};
</script>
<style lang="scss" scoped>
.el-tabs {
  margin-top: 20px;
}
</style>