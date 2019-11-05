<template>
  <div id="app">

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


  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Aside from '@/components/Aside.vue'
import Main from '@/components/Main.vue'

export default {
  name: 'app',
  components: {
    // Home
    Header,
    Aside,
    Main
  }
}
</script>

<style>
html, body {
  padding: 0;
  margin: 0;
  background: rgba(247, 248, 250, 1);
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
