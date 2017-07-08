<template lang="pug">
  li(role='presentation', :class='{ active : active }')
    a(href='#', @click.stop.prevent='onTabClick(id)', :aria-controls='id', role='tab', data-toogle='tab')
      i.material-icons(v-if='!!icon') {{icon}}
      | {{name}}
      .ripple-container
</template>

<script>
import { EVENT_ON_TAB_CLICK } from './constants'

export default {
  name: 'nav-tab',
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      default: false
    },
    icon: String
  },
  methods: {
    onTabClick(tabId) {
      this.$emit(EVENT_ON_TAB_CLICK, tabId)
    }
  }
}
</script>

