<template>
  <nav class="navbar navbar-transparent navbar-absolute">
    <div class="container-fluid">
      <div class="navbar-header">
        <button class="navbar-toggle" type="button" data-toggle="collapse" @click="toggleSideBar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">{{$route.name}}</a>
      </div>
      <div class="collapse navbar-collapse">
        <navbar-right></navbar-right>
        <navbar-search></navbar-search>
      </div>
    </div>
  </nav>
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
