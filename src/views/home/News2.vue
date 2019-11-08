<template>
   <div class="new1">  
        <span>
           <img :src="icons.data[1].ads_src" alt="">
        </span>
        <span>
            <p v-text="icons.data[1].p1">在线客服</p>
            <p v-text="icons.data[1].p2">电话：057-89988848</p>
        </span> 
         <span>
           <img :src="icons.data[2].ads_src" alt="">
        </span>
        <span>
            <p v-text="icons.data[2].p1">在线客服</p>
            <p v-text="icons.data[2].p2">电话：057-89988848</p>
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
  padding: 30px;
  background: #fff;
  position: absolute;
  top: 390px;
  // right: -310px;
  span {
    display: inline-block;
    &:nth-child(1),
    &:nth-child(3) {
      border-right: 1px #efefef solid;
    }
    &:nth-child(2) {
      margin-bottom: 30px;
    }
    &:nth-child(2),
    &:nth-child(4) {
      padding: 0 0 0 5px;
      p:last-child {
        padding: 5px 0px;
        font-size: 12px;
        color: #979699;
      }
    }

    img {
      width: 42px;
      height: 43px;
      padding-right: 10px;
    }
  }
}
</style>

