// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// Libraries
import 'bootstrap/dist/css/bootstrap.css'
import './assets/sass/material-dashboard.scss'
import 'es6-promise/auto'
import Chartist from 'chartist'
import CoreComponents from '@/core/components'
import NotificationPlugin from '@/core/components/mdNotifications/install'
import vClickOutside from 'v-click-outside'

Vue.config.productionTip = false

// global library setup
Object.defineProperty(Vue.prototype, '$Chartist', {
  get() {
    return this.$root.Chartist
  }
})

// Use Core Components
Vue.use(CoreComponents)
Vue.use(NotificationPlugin)
Vue.use(vClickOutside)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  data: {
    Chartist
  }
})
