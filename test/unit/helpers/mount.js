import Vue from 'vue'

window.mount = (Component, propsData) => {
  const Ctor = Vue.extend(Component)
  const vm = new Ctor({ propsData: propsData }).$mount()
  return vm
}
