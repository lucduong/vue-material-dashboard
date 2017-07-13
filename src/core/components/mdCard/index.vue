<template lang="pug">
.card(:class="cardClass")
  .card-header(:data-background-color="backgroundColor")
    h4.title(v-if="!hasHeaderSlot") {{title}}
    p.category(v-if="!hasHeaderSlot") {{category}}
    slot(name='header')
  .card-content(:class="{ 'table-responsive' : hasTable }")
    slot
</template>

<script>

export default {
  name: 'md-card',
  props: {
    title: String,
    category: String,
    hasTable: Boolean,
    backgroundColor: String,
    cardClass: String
  },
  computed: {
    hasHeaderSlot() {
      return !!this.$slots['header']
    }
  }
}
</script>

<style lang="scss"></style>
