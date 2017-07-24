<template>
  <blockquote>
    <p>{{content}}</p>
    <small v-if="!!author">{{author}}</small>
  </blockquote>
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
