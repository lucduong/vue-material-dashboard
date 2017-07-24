<template>
  <div class="card" :class="cardClass">
    <div class="card-header" :data-background-color="backgroundColor"><h4 class="title" v-if="!hasHeaderSlot">
      {{title}}</h4>
      <p class="category" v-if="!hasHeaderSlot">{{category}}</p>
      <slot name="header"></slot>
    </div>
    <div class="card-content" :class="{ 'table-responsive' : hasTable }">
      <slot></slot>
    </div>
  </div>
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
