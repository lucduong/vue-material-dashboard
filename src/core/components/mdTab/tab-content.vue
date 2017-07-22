<template>
  <div class="md-tab-content tab-pane" :class="{ active : tab.active}" :id="tab.id" :ref="tab.id">
    <slot></slot>
  </div>
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
