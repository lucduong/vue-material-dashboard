<template lang="pug">
blockquote
  p {{content}}
  small(v-if="!!author") {{author}}
</template>

<script>
export default {
  name: 'md-blockquote',
  props: {
    content: {
      type: String,
      required: true
    },
    author: String
  }
}
</script>

<style lang="scss"></style>
