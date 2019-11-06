<template>
    <div class="one">
        <p>第一页</p>
        <div class="line" v-for="(item,index) in assList" :key="index">
            <i class="fa fa-sticky-note"></i>
            <div>
                <span class="title" v-text="item.title">未创建客户分群</span>
                <span class="sub" v-text="item.content">通过对客户行为、属性的分析，更好的针对不同客户进行运营管理</span>
                <span class="active" v-text="item.active">立即创建</span>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    computed: {
    ...mapState(['assList'])
    },
    mounted() {
        this.getAssList()
    },
    methods: {
     ...mapActions(['getAssList'])
    }
}
</script>

<style lang="scss" scoped>
    .one{
        width: 100%;
        height: 100%;
        overflow-x: hidden;
        overflow-y: scroll;
        .line{
            padding: 5px;
            margin: 5px 0;
            width: 100%;
            >i{
                color: red;
            }
            >div{
                width: 95%;
                display: inline-block;
                .title{
                    margin-left: 8px;
                }
                .sub{
                    margin-left: 10px;
                    color: #999;
                }
                .active{
                    float: right;
                    color: skyblue;
                    cursor: pointer;
                }
            }
        }
    }
</style>
