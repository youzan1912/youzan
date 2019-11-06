import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
<<<<<<< HEAD
<<<<<<< HEAD
=======

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)
>>>>>>> dev
=======

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
>>>>>>> test

Vue.config.productionTip = false

// 使用 ElementUI，通常用于PC端（做PC端应用时建议使用）
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

new Vue({
<<<<<<< HEAD
  router,
  store,
=======
  store,
  router,
>>>>>>> test
  render: h => h(App),
}).$mount('#app')
