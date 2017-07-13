<template lang="pug">
  a(v-bind='$props', v-if='!!href')
    slot
  button.md-button(v-bind='$props', @click="$emit('click', $event)", v-else)
    slot
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
