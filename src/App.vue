<template>
  <div id="app">
    <!-- <Login ></Login> -->
    <div v-if="$route.path=='/login'"><router-view name='login'></router-view></div>
    
    <el-container v-else>
      <el-aside width="120px"><Aside></Aside></el-aside>
      <el-container>
        <el-header><Header></Header></el-header>
        <el-main><Main></Main></el-main>
        </el-container>
    </el-container>   


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
=======
      <router-view></router-view>
>>>>>>> test
  </div>
</template>

<script>

import Aside from '@/components/Aside.vue'
import Header from '@/components/Header.vue'
import Main from '@/components/Main.vue'
// import Login from '@/views/login/Login.vue'



export default {
  name: 'app',
  components: {

    Aside,
    Header,
    Main,
    // Login
  },
   computed:{
      //  isLogin(){
      //       let res=localStorage.getItem('login')
      //       console.log(res)
      //       return res && (JSON.parse(res).isLogin === 1)
      //   }
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
</style>
