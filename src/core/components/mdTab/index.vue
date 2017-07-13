<template lang="pug">
.md-tab
  nav-tabs(v-if='!hasTabSlot', :tabs='tabs', @onTabClick='onTabClick')
  slot(name='tab')
  .tab-content
    slot(v-if='!hasTabContent')
    slot(name='content')
</template>

<script>
import NavTabs from './nav-tabs'
import { EVENT_ON_TAB_CLICK } from './constants'

export default {
  name: 'md-tab',
  props: {
    tabs: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  components: {
    NavTabs
  },
  computed: {
    hasDefaultSlot() {
      return !!this.$slots.default
    },

    hasTabSlot() {
      return !!this.$slots['tab']
    },

    hasTabContent() {
      return !!this.$slots['content']
    }
  },
  methods: {
    onTabClick(tab) {
      this.$emit(EVENT_ON_TAB_CLICK, tab)
    }
  }
}
</script>

<style lang="scss"></style>
