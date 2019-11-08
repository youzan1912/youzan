<template>
  <div class="suggest">
      <h2>经营建议</h2>
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
.suggest{
    padding:10px;
    height: 193px;
    box-sizing: border-box;
    font-size: 14px;
    background: white;
    margin-top: 20px;
    width:100%;
    >h2{
        font-size: 20px;
        font-weight: 900;
        color: #323233;
        margin: 20px 0;
    }
    >.grid_url{
        // margin-top:15px;
        display: flex;
        flex-wrap: wrap;
        height: 117px;
        justify-content: space-between;
        >div{
            flex-basis: calc(25% - 10px);
            box-sizing: border-box;
            text-align: center;
            border-radius: 4px;
            padding: 30px 0;
            background-color: #f7f8fa;
            >span{
                display: block;
                text-align: center;
            }
            >span:nth-child(1){
                font-size: 20px;
                color: #323233;
                margin-bottom: 10px;
            }
            >span:nth-child(2){
                font-size: 14px;
                color: #969799;
            }
            
        }
    }
}
</style>