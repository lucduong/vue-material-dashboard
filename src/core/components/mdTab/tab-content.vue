<template lang="pug">
.md-tab-content.tab-pane(:class='{ active : tab.active}', :id='tab.id', :ref='tab.id')
  slot
</template>

<script>
export default {
  name: 'tab-content',
  props: {
    tab: Object
  }
}
</script>

<style lang="scss"></style>
