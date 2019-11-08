<template>
<div class="news4">
    <div class="header">
        <span>有赞资讯</span>    
    </div>
    <div class="main" v-for="(item,idx) in newsArr" :key="idx">
        <p v-text="item.title">10/24 一卡一码下单兑换规则变更</p>
    </div>
</div>  
</template>

<script>
import { newsList } from "@/assets/index.js";
import { mapState, mapActions } from "vuex";
export default {
  data: function() {
    return {
      newsList
    };
  },
  computed: {
    ...mapState("shop", ["newsArr"])
  },
  mounted() {
    this.getNewsArr();
  },
  methods: {
    ...mapActions("shop", ["getNewsArr"])
  }
};
</script>
<style lang="scss" scoped>
.news4 {
  width: 230px;
  padding: 20px;
  background: #fff;
  margin-top: 20px;
  > .header {
    padding-bottom: 20px;
    span {
      font-size: 15px;
      color: #323233;
      font-weight: bold;
      margin: 0 5px 20px 0;
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