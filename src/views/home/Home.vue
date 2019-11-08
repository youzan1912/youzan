<template>
    <div class="home">
        <div class="left">
            <div class="survey">
                <div class="widget">
                    <div class="header">
                        <h2 class="header_title">实况概括
                            <div>
                                <span class="updata_time">更新时间：2019-11-05 15:13:41</span>
                            </div>
                        </h2>
                        <div class="header_action">
                            <span>编辑</span>
                        </div>
                    </div>
                    <div class="box">
                        <Pay></Pay>
                        <Target></Target>
                    </div>
                </div>
            </div>
            <div class="ass">
                <Assistant></Assistant>
            </div>
            <!-- <div class="gn">
                <User></User>
            </div> -->
            <div class="tj">
                <Tj></Tj>
            </div>
            <div class="jy">
                <Suggest></Suggest>
            </div>
        </div>
        <div class="rights">
            <img :src="icons.ad_src" alt="yz" class="right-img">
            <News1></News1>
            <News2></News2>
            <News3></News3>
            <News4></News4>
        </div>
    </div>
</template>

<script>
import { icons } from "@/assets/index.js";
import Pay from './Pay.vue'
import Target from './Target.vue'
import Assistant from './Assistant.vue'
// import User from './User.vue'
import Tj from './Tj.vue'
import Suggest from './Suggest.vue'
import News1 from './News1.vue'
import News2 from './News2.vue'
import News3 from './News3.vue'
import News4 from './News4.vue'

export default {
    data: function() {
    return {
      icons
    }
  },
    components:{
        Pay,
        Target,
        Assistant,
        // User,
        Tj,
        Suggest,
        News1,
        News2,
        News3,
        News4
    }
}
</script>

<style lang="scss" scoped>
.home{
    width: 100%;
    height: 100%;
    .left{
        width: 80%;
        height: 100%;
        box-sizing: border-box;
        border-right: 1px solid #666;
        float: left;
        .survey{
            width: 100%;
            height: 282px;
            .widget{
                padding:10px 20px;
                margin-bottom: 20px;
                .header{
                    display: flex;
                    -ms-flex-pack: justify;
                    justify-content: space-between;
                    padding-left: 5px;
                    margin-bottom: 10px;
                    .header_title{
                        font-size: 16px;
                        font-weight: 900;
                        color: #323233;
                        display: -ms-inline-flexbox;
                        display: inline-flex;
                        -ms-flex-align: center;
                        align-items: center;
                        .updata_time{
                            font-size: 14px;
                            color: #969799;
                            margin-left: 7px;
                            font-weight: 400;
                        }
                    }
                    .header_action{
                        font-size: 14px;
                        display: -ms-inline-flexbox;
                        display: inline-flex;
                        -ms-flex-align: center;
                        align-items: center;
                    }
                }
                .box{
                    width: 100%;
                    height: 200px;
                }
            }
        }
        .ass{
            width: 100%;
            height: 340px;
        }
        // .gn{
        //     width: 100%;
        //     height: 180px;
        // }
        .tj{
            width: 100%;
            height: 180px;
            margin-top: 20px;
        }
        .jy{
            width: 100%;
            height: 180px;
        }
    }
    .rights{
        float: right;
        width: 20%;
        // height: 100px;
         
        .right-img{
            display: block;
            margin: 0 auto;
        }
    }
}
</style>
