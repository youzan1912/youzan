<template>
  <div id="app">
    <!-- <Login ></Login> -->
    <div v-if="isLogin"><router-view name='login'></router-view></div>
    
    <el-container v-else>
      <el-aside width="120px"><Aside></Aside></el-aside>
      <el-container>
        <el-header><Header></Header></el-header>
        <el-main><Main></Main></el-main>
        </el-container>
    </el-container>   
  </div>
</template>

<script>
import Aside from '@/components/Aside.vue'
import Header from '@/components/Header.vue'
import Main from '@/components/Main.vue'
// import Login from '@/views/login/Login.vue'

import {mapState} from 'vuex'

export default {
  name: 'app',
  components: {
    Aside,
    Header,
    Main,
    // Login
  },
   computed:{
        ...mapState(['isLogin']),  
    }
}
</script>

<style>
html,body{
  margin: 0;
  padding: 0;
  background: rgba(247, 248, 250, 1);
}
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
