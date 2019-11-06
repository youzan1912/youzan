<template>
  <div id="app">
<<<<<<< HEAD
    <!-- <Login ></Login> -->
    <div v-if="isLogin"><router-view name='login'></router-view></div>
    
    <el-container v-else>
      <el-aside width="120px"><Aside></Aside></el-aside>
      <el-container>
        <el-header><Header></Header></el-header>
        <el-main><Main></Main></el-main>
        </el-container>
    </el-container>   
=======

    <el-container>


      <el-aside width='135px'>
        <Aside></Aside>
      </el-aside>

      <el-container>
        <el-header>
          <Header></Header>
        </el-header>

        <el-main>
          <Main></Main>
        </el-main>
      </el-container>

  </el-container>


>>>>>>> dev
  </div>
</template>

<script>
<<<<<<< HEAD
import Aside from '@/components/Aside.vue'
import Header from '@/components/Header.vue'
import Main from '@/components/Main.vue'
// import Login from '@/views/login/Login.vue'

import {mapState} from 'vuex'
=======
import Header from '@/components/Header.vue'
import Aside from '@/components/Aside.vue'
import Main from '@/components/Main.vue'
>>>>>>> dev

export default {
  name: 'app',
  components: {
<<<<<<< HEAD
    Aside,
    Header,
    Main,
    // Login
  },
   computed:{
        ...mapState(['isLogin']),  
    }
=======
    // Home
    Header,
    Aside,
    Main
  }
>>>>>>> dev
}
</script>

<style>
<<<<<<< HEAD
html,body{
  margin: 0;
  padding: 0;
  background: rgba(247, 248, 250, 1);
}
*{
  margin: 0;
  padding: 0;
=======
html, body {
  padding: 0;
  margin: 0;
  background: rgba(247, 248, 250, 1);
>>>>>>> dev
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
<<<<<<< HEAD
=======
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
>>>>>>> dev
}
</style>
