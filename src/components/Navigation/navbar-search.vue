<template>
  <form class="navbar-form navbar-right" role="search">
    <div class="form-group is-empty">
      <input class="form-control" type="text" placeholder="Search" v-model="searchText"/>
      <span class="material-input"></span>
    </div>
    <md-button class="btn btn-white btn-round btn-just-icon" type="button" @click="$emit('onSearchClick', searchText)">
      <i class="material-icons">search</i>
      <div class="ripple-container"></div>
    </md-button>
  </form>
</template>
<script>
  export default {
    name: 'navbar-search',
    data() {
      return {
        searchText: ''
      }
    }
  }
</script>
