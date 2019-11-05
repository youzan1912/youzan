<template>
    <div class="pay">
        <div class="pay_item">
            <p>支付订单数</p>
            <h2>1</h2>
            <p class="p2">昨日：<span></span></p>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .pay{
        width: 446px;
        height: 200px;
        background: yellow;
        .pay_item{
            width: 50%;
            height: 50%;
            background: wheat;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            >p:nth-child(1){
                font-size: 14px;
                margin-left: 30px;
                color: #777;
            }
            >h2{
                font-size: 26px;
                margin-left: 30px;
            }
            .p2{
                font-size: 14px;
                margin-left: 30px;
                color: #777;
            }
        }
    }
</style>
