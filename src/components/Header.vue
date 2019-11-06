<template lang="html">
<div class="header">
<<<<<<< HEAD
  <div class="header-left">
    <span>用户名</span>
    <span class="blue">试用期</span>
    <span>SVIP</span>
    <span>有赞担保</span>
  </div>
  <div class="header-right">
    <i class="fa fa-user-circle"></i>
    <span>13200000000</span>
    <i class="fa fa-angle-right"></i>
  </div>
=======
  
>>>>>>> dev
</div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 1);
  overflow: hidden;
  line-height: 60px;
  font-size: 12px;
  box-sizing: border-box;
  padding: 0 10px;
  .header-left {
    float: left;
    cursor: pointer;
    >span:nth-child(1) {
      color: #323232;
      font-size: 16px;
      font-weight: bold;
    }
    >span:nth-child(2), span:nth-child(3), span:nth-child(4) {
      // color: #155bd4;
      display: inline-block;
      border: 1px solid #999;
      height: 20px;
      vertical-align: middle;
      line-height: 20px;
      margin-left: 10px;
      padding: 0 3px;
      border-radius: 3px;
    }
    span.blue {
      color: #155bd4;
      border: 1px solid  #155bd4;
    }
  }
  .header-right {
    float: right;
    cursor: pointer;
    i {
      font-size: 20px;
      color: #999999;
    }
    span {
      padding: 0 10px;
      font-size: 14px;
      color:  #999999;
      font-weight: bold;
    }
  }
}
</style>
