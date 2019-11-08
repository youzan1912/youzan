<template>
  <div class="newset">
      <h2>最新推荐</h2>
      <div class="grid_url">
          <div><span>多人拼团</span><span>裂变式营销玩法</span></div>
          <div><span>百度小程序</span><span>打造商家新官网</span></div>
          <div><span>分销市场</span><span>一键上架，快速补充货源</span></div>
          <div><span>微信小程序</span><span>抢占微信社交流量红利</span></div>
      </div>
  </div>
</template>

<script>
export default {

}

</script>

<style lang='scss' scoped>
.newset{
    padding: 10px;
    height: 198px;
    box-sizing: border-box;
    font-size: 14px;
    background: white;
    // margin-top: 20px;
    margin: 0 auto;
    width: 100%;
    >h2{
        font-size: 20px;
        font-weight: 900;
        color: #323233;
        margin-bottom:20px;
        margin-top: 20px;
    }
    >.grid_url{
        // margin-top:10px;
        display: flex;
        flex-wrap: wrap;
        height: 117px;
        justify-content: space-between;
        >div:nth-child(1){
            background-color: #8fcf8f;
        }
        >div:nth-child(2){
            background-color: #8fbdd0;
        }
        >div:nth-child(3){
            background-color: #849bd0;
        }
        >div:nth-child(4){
            background-color: #a984d0;
        }
        >div{
            flex-basis: calc(25% - 10px);
            box-sizing: border-box;
            text-align: center;
            border-radius: 4px;
            padding: 30px 0;
            >span{
                display: block;
                text-align: center;
            }
            >span:nth-child(1){
                color: #fff;
                font-size: 20px;
            }
            >span:nth-child(2){
                color: #fff;
                font-size: 14px;
                margin-top:15px; 
            }
            
        }
    }
}
</style>