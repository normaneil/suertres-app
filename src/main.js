// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import store from './store/'
import App from './App'
import MQ from 'vue-match-media/src'
import Toasted from 'vue-toasted'
import Vuelidate from 'vuelidate'
// Vue.config.productionTip = false
import './index.scss'

Vue.use(MQ)
Vue.use(Toasted)
Vue.use(Vuelidate)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  mq: {
    phone: 'only screen and (min-width: 320px) and (max-width: 812px)',
    tablet: 'only screen and (min-width: 769px) and (max-width: 1024px)',
    desktop: 'only screen and (min-width: 1025px)',
  }
})
