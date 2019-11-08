<template>
    <div class="assistant">
        <div class="top">
            <div class="tabs">
                <div v-for="(item,index) in tabs" :key="index" v-on:click="changeShow(index)">
                    <span v-text="item.title">全部事项</span>
                </div>
            </div>
        </div>
        <div class="content">
            <keep-alive>
                <component v-bind:is="show"></component>
            </keep-alive>
        </div>
    </div>
</template>

<script>
import One from './One.vue'
import Two from './Two.vue'
import Third from './Third.vue'

export default {
    data:function(){
        return{
            tabs:[
                {
                    title:"全部事项"
                },
                {
                    title:"店铺基础"
                },
                {
                    title:"商品体验"
                },
                {
                    title:"物流体验"
                },
                {
                    title:"售后体验"
                },
                {
                    title:"服务体验"
                },
                {
                    title:"流量表现"
                }
            ],
            show:"One"
        }
    },
    components:{
        One,
        Two,
        Third
    },
    methods:{
         changeShow:function(index){
             switch(index){
                 case 0:
                 this.show="One"
                 break;
                 case 1:
                 this.show="Two"
                 break;
                 case 2:
                 this.show="Third"
                 break;
                 default:
                 break;
                }
           }
    }
}
</script>

<style lang="scss" scoped>
    .assistant{
        width: 80%;
        height: 340px;
        margin: 0 auto;
        background: white;
        .top{
            .tabs{
                display: flex;
                justify-content: space-around;
                >div{
                    margin-top: 10px;
                    text-align: center;
                    width: 12.5%;
                    height: 34px;
                    border: 1px solid #666;
                    background: rgba(247,248,250,1);
                    line-height: 34px;
                    cursor: pointer;
                }
            }
        }
        .content{
            width: 100%;
            height: 280px;
            margin-top: 10px;
        }
    }
</style>
