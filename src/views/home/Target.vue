<template>
    <div class="target">
        <div class="target_item" v-for="(item,index) in targetList" :key="index">
            <p v-text="item.title">支付订单数</p>
            <h2 v-text="item.num">1</h2>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
     computed: {
    ...mapState(['targetList'])
    },
    mounted() {
        this.getTargetList()
    },
    methods: {
     ...mapActions(['getTargetList'])
    }
}
</script>

<style lang="scss" scoped>
    .target{
        width: 50%;
        height: 200px;
        float: right;
        .target_item{
            width: 50%;
            height: 50%;
            display: inline-block;
            >p:nth-child(1){
                margin-top: 10px;
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
        }
    }
</style>
