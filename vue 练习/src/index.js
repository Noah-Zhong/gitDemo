// 入口模块

// 负责新创建一个vue实例
import App from "./App.js";
import router from './components/VueRouter.js';
import store from "./vuexWareHouse/vuexHouse.js"
new Vue({
  components: {
    App,
  },
  router,
  store,
  el: "#app",
  template: `<App/>`
});
