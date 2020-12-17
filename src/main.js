// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App'
import vueRouter from 'vue-router'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { DropdownPlugin, TablePlugin } from 'bootstrap-vue'




Vue.use(DropdownPlugin)
Vue.use(TablePlugin)



Vue.use(vueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)



Vue.config.productionTip = false

new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>',
})