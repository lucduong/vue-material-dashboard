// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// Libraries
import 'bootstrap/dist/css/bootstrap.css'
import './assets/sass/material-dashboard.scss'
import 'es6-promise/auto'
import CoreComponents from '@/core/components'

Vue.config.productionTip = false

Vue.use(CoreComponents)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
