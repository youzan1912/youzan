<<<<<<< HEAD
<template>
    <div class="aside">
        <div class="logo">
            <i class="fa fa-thumbs-up"></i>
        </div>
        <div v-for="(item, idx) in navList" :key='idx'>
            <router-link :to="item.path" active-class='nav_on' tag="span">
                <div class="nav">
                    <i class="fa" :class='item.class'></i>
                    <span v-text="item.title"></span>
                </div>
            </router-link>
        </div>
    </div>
=======
<template lang="html">
<div class="aside" >
  <div class="logo">
    <i class="fa fa-thumbs-up"></i>
  </div>

  <div v-for="(item, idx) in navList" :key='idx'>

    <router-link :to="item.path" active-class='nav_on' tag="span">
      <div class="nav">
        <i class="fa" :class='item.class'></i>
        <span v-text="item.title"></span>
      </div>
    </router-link>


  </div>
</div>
>>>>>>> dev
</template>

<script>
import { mapState, mapActions } from 'vuex'
<<<<<<< HEAD

export default {
    computed: {
=======
export default {
  computed: {
>>>>>>> dev
    ...mapState(['navList'])
  },
  mounted() {
    // 获取导航数据
    this.getNavList()
  },
  methods: {
    ...mapActions(['getNavList'])
  }
}
</script>

<style lang="scss" scoped>
<<<<<<< HEAD
    .aside{
        width: 100%;
        height: 100%;
        background: rgba(68,68,68,1);
        .logo{
            width: 100%;
            height: 55px;
            padding-top: 15px;
            >i{
                display: block;
                width: 40px;
                height: 40px;
                margin: 0 auto;
                text-align: center;
                font-size: 30px;
                background: white;
                line-height: 40px;
                border-radius: 50%;
                color: red;
            }
        }
        .nav {
=======
.aside {
  height: 100%;
  width: 100%;
  background: rgba(68, 68, 68, 1);
  .nav {
>>>>>>> dev
    color: #aaa;
    line-height: 50px;
    text-align: center;
    font-size: 14px;
    cursor: pointer;
    > span {
      padding-left: 5px;
    }
  }
  .nav:hover {
    background: rgba(102, 102, 102, 1);
    color: white;
  }
  .nav_on .nav {
    background: white;
    color: black;
  }
  .logo {
    height: 80px;
    box-sizing: border-box;
    padding-top: 20px;
<<<<<<< HEAD
    text-align: center;
=======
>>>>>>> dev
    > i {
      display: inline-block;
      width: 40px;
      height: 40px;
      line-height: 40px;
      border-radius: 50%;
      background: white;
      font-size: 24px;
      color: rgba(238, 0, 0, 1);
      cursor: pointer;
    }
  }
<<<<<<< HEAD
    }
=======
}
>>>>>>> dev
</style>
