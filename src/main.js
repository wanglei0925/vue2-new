// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index.js'
import axios from 'axios'
import filters from './filter/index.js'
console.log(filters)
Object.keys(filters).forEach((key) => Vue.filter(key, filters[key]))
axios.interceptors.request.use(function (config) {
  store.dispatch('showLoading')
  return config
}, function (error) {
  return Promise.reject(error)
})
axios.interceptors.response.use(function (response) {
  store.dispatch('hideLoading')
  return response
}, function (error) {
  return Promise.reject(error)
})
// /*axios.defaults.baseURL = (process.env.NODE_ENV !=='production' ? config.dev.httpUrl:config.build.httpUrl);
//  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';*/
// //axios.defaults.baseURL='http://localhost:8082/';配置请求根目录
// 其他页面在使用axios的时候直接  this.$http就可以了
Vue.prototype.$http = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
