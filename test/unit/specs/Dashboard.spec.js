import Vue from 'vue'
import Dashboard from '@/components/Dashboard'
import Chartist from 'chartist'
import CoreComponents from '@/core/components'

Vue.use(CoreComponents)

function getRenderedComponent(Component, propsData) {
  Vue.mixin({
    beforeCreate() {
      this._Chartist = Chartist
    }
  })

  Object.defineProperty(Vue.prototype, '$Chartist', {
    get() { return this.$root._Chartist }
  })

  return mount(Component, propsData) // eslint-disable-line
}

describe('Dashboard.vue', () => {
  it('should contains 4 stats cards and 3 chart cards', () => {
    const vm = getRenderedComponent(Dashboard)
    const statsCards = vm.$children.filter((child) => child.$options.name === 'md-stats-widget').length
    const chartCards = vm.$children.filter((child) => child.$options.name === 'md-chart-widget').length
    expect(statsCards).to.equal(4)
    expect(chartCards).to.equal(3)
  })
})
