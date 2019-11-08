<template>
<div class="new3">
    <div class="header">
        <span>产品动态</span>
        <span>更多</span>
    </div>
    <div class="main" v-for="(item,idx) in newsList" :key="idx">
        <p v-text="item.news">10/24 一卡一码下单兑换规则变更</p>
    </div>
</div>
    
</template>

<script>
import { newsList } from "@/assets/index.js";
export default {
  data: function() {
    return {
      newsList
    };
  }
};
</script>
<style lang="scss" scoped>
.new3 {
  margin-top: 20px;
  width: 230px;
  padding: 20px;
  background: #fff;
  position: absolute;
  top: 600px;
  // right: -310px;
  > .header {
    padding-bottom: 20px;
    span {
      font-size: 15px;
      &:first-child {
        color: #323233;
        font-weight: bold;
        margin-right: 5px;
      }
      &:last-child {
        color: #155bd4;
      }
    }
  }
  > .main {
    p {
      font-size: 12px;
      color: #969799;
    }
  }
}
</style>

