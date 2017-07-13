<template lang="pug">
form.navbar-form.navbar-right(role='search')
  .form-group.is-empty
    input.form-control(type='text', placeholder='Search', v-model='searchText')
    span.material-input
  md-button.btn.btn-white.btn-round.btn-just-icon(type='button', @click='$emit("onSearchClick", searchText)')
    i.material-icons search
    .ripple-container
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
