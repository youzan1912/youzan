import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// 使用 ElementUI，通常用于PC端（做PC端应用时建议使用）
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
