<template>
    <div class="pay">
        <div class="pay_item" v-for="(item,index) in payList" :key="index">
            <p v-text="item.title">支付订单数</p>
            <h2 v-text="item.num">1</h2>
            <p class="p2" v-text="'昨日：'+item.before"><span></span></p>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
     computed: {
    ...mapState(['payList'])
    },
    mounted() {
        this.getPayList()
    },
    methods: {
     ...mapActions(['getPayList'])
    }
}
</script>

<style lang="scss" scoped>
    .pay{
        width: 50%;
        height: 200px;
        box-sizing: border-box;
        border-right: 1px solid #666;
        float: left;
        .pay_item{
            width: 50%;
            height: 50%;
            display: inline-block;
            >p:nth-child(1){
                margin-top: 5px;
                display: block;
                font-size: 14px;
                margin-left: 30px;
                color: #777;
                margin-bottom: 5px;
            }
            >h2{
                display: block;
                font-size: 26px;
                margin-left: 30px;
                margin-bottom: 5px;
            }
            .p2{
                display: block;
                font-size: 14px;
                margin-left: 30px;
                color: #777;
            }
        }
    }
</style>
