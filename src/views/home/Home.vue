<template>
    <div class="home">
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
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Pay from './Pay.vue'

export default {
    components:{
        Pay
    }
}
</script>

<style lang="scss" scoped>
    .home{
        width: 80%;
        height: 100%;
        background: pink;
        .survey{
            width: 100%;
            height: 282px;
            background: yellowgreen;
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
                    background: wheat;
                }
            }
        }
    }
</style>
