import Vue from 'vue'
import App from './App.vue'

//导入路由
import VueRouter from 'vue-router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);

Vue.use(VueRouter)

//写组件
import index from './components/index.vue'
import detail from './components/detail.vue'


//写规则
const routes = [
  {
    path:'/index',
    component:index
  },
  {
    path:'/detail/:id',
    component:detail
  }
]

//实例化路由对象
const router = new VueRouter({
  routes
})

import './assets/statics/site/css/style.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //挂载大奥vue实例上
  router
}).$mount('#app')
