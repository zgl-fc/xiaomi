import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import vueAxios from 'vue-axios'
import VueCookie from 'vue-cookie'
// import env from './env'
// 在做了代理的时候直接写个短地址就行了

// axios.defaults.baseURL = '/'
// axios.defaults.baseURL = env.baseURL


// Tell Vue to use the plugin
Vue.use(VueCookie);

// 使用mockjs模拟
const mock = true 
if(mock) {
  console.log('mock');
  require('./mock/api')
}
axios.defaults.baseURL = '/api'
// axios.defaults.baseURL = `https://www.easy-mock.com/mock/5f12dc739111f12c854791d9`

axios.defaults.tiemout = 8000

axios.interceptors.response.use(response => {
  let res = response.data;
  // 0是成功
  if(res.status == 0) {
    return res.data;
  // 10未登录
  } else if(res.status == 10){
    window.location.href = '/#/login'
  }
})

Vue.use(vueAxios,axios)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
