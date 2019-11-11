<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="权益卡管理" name="first">
      </el-tab-pane>

      <el-tab-pane label="领卡记录" name="second">
      </el-tab-pane>
      <el-tab-pane label="退卡记录" name="third">
        
      </el-tab-pane>
      <MemberContent v-if="show"></MemberContent>
    </el-tabs>

  </div>
</template>
<script>
import MemberContent from './MemberContent'
export default {
  data() {
    return {
        show:true,
        activeName: "first"
    };
  },
    components: {
         MemberContent
    },
    methods: {
    handleClick() {
       if(this.activeName=== "first"){
          this.show=true;
           this.$router.push('/membercard').catch(()=>{})
       }
       if(this.activeName=== "second"){
           this.show=false;
           this.$router.push('/membercard/obtain').catch(()=>{})
       }
       if(this.activeName=== "third"){
           this.show=false;
           this.$router.push('/membercard/refund').catch(()=>{})
       }
    }
  }
};
</script>
<style lang="scss" scoped>
.el-tabs {
  background: #fff;
  padding-left: 10px;
}
</style>