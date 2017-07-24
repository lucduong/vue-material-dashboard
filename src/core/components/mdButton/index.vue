<template>
  <a v-bind="$props" v-if="!!href">
    <slot></slot>
  </a>
  <button class="md-button" v-bind="$props" @click="$emit('click', $event)" v-else>
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'md-button',
    props: {
      type: {
        type: String,
        default: 'button'
      },
      disabled: Boolean,
      href: String
    }
  }
</script>

<style lang="scss"></style>
