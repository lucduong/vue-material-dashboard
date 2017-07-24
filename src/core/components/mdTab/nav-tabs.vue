<template lang="pug">
ul.md-nav-tabs.nav.nav-tabs(role='tablist')
  nav-tab(v-if='!hasDefaultSlot', v-for='t in tabs', :key='t.id', :id='t.id', :name='t.name', :active='t.active', :icon='t.icon', @onTabClick='onTabClick')
  slot
</template>

<script>
import NavTab from './nav-tab'
import { EVENT_ON_TAB_CLICK } from './constants'

export default {
  name: 'nav-tabs',
  props: {
    tabs: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  components: {
    NavTab
  },
  computed: {
    hasDefaultSlot() {
      return !!this.$slots.default
    }
  },
  methods: {
    onTabClick(tabId) {
      let tab = this.tabs.find(t => t.id === tabId)
      tab.active = true
      this.tabs.forEach((tab) => {
        if (tab.id === tabId) {
          tab.active = true
          this.$emit(EVENT_ON_TAB_CLICK, tab || tabId)
        } else {
          tab.active = false
        }
      }, this)
    }
  }
}
</script>

<style lang="scss"></style>
