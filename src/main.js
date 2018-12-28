// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import moment from 'moment'
import 'moment/locale/zh-cn'
const navType = navigator.appName
let lang = null
if (navType === 'Netscape') {
  lang = navigator.language
} else {
  lang = navigator.userLanguage
}
lang = lang.substr(0, 2)
if (lang === 'zh') {
  moment.locale('zh-cn')
}
import 'ant-design-vue/dist/antd.css'
import Antd from 'ant-design-vue'
Vue.use(Antd)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
