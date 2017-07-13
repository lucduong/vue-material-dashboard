import Vue from 'vue'
import router from '@/router'

window.mount = (Component, propsData) => {
  const Ctor = Vue.extend(Component)
  const vm = new Ctor({ router, propsData: propsData }).$mount()
  return vm
}
