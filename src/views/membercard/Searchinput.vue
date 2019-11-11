<template>
    <div>
    <el-row type="flex">
      <el-col :span="3" :offset="19">
        <el-input placeholder="请输入权益卡卡号" prefix-icon="el-icon-search" v-model="input"></el-input>
      </el-col>
    </el-row>
   </div>
</template>
<script>
export default {
    data(){
      return{
        input:''
      }
    }
}
</script>
<style lang="scss" scoped>

</style>