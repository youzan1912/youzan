<template>
   <div class="new1">  
           <span>
           <img :src="icons.data[0].ads_src" alt="">
        </span>
        <span>
            <p v-text="icons.data[0].p1">在线客服</p>
            <p v-text="icons.data[0].p2">电话：057-89988848</p>
        </span>
   </div>
</template>

<script>
import { icons } from "@/assets/index.js";
export default {
  data: function() {
    return {
      icons
    };
  }
};
</script>

<style lang="scss" scoped>
.new1 {
  width: 210px;
  margin: 20px 0;
  padding: 30px;
  position:absolute;
  top: 240px;
  // right: -310px;
  background: #fff;
  z-index: 9;
  
  span {
    display: inline-block;
    &:first-child {
      border-right: 1px #efefef solid;
    }
    &:last-child {
      padding: 0 0 0 5px;
      p:last-child {
        padding: 5px 0px;
        font-size: 12px;
        color: #979699;
      }
    }

    > img {
      width: 42px;
      height: 43px;
      padding-right: 10px;
    }
  }
}
</style>

