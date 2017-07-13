<template lang="pug">
nav.navbar.navbar-transparent.navbar-absolute
  .container-fluid
    .navbar-header
      button.navbar-toggle(type='button', data-toggle='collapse', @click='toggleSideBar')
        span.sr-only Toggle navigation
        span.icon-bar
        span.icon-bar
        span.icon-bar
      a.navbar-brand(href='#') {{$route.name}}
    .collapse.navbar-collapse
      navbar-right
      navbar-search
</template>
<script>
import NavbarSearch from './navbar-search'
import NavbarRight from './navbar-right'

export default {
  components: {
    NavbarSearch,
    NavbarRight
  },
  methods: {
    toggleSideBar() {
      this.$emit('toggleSideBar')
    }
  }
}
</script>
