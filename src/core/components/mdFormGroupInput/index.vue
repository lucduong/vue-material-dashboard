<template>
  <div class="form-group" :class="{ 'label-floating' : labelFloating }">
    <label class="control-label" v-if="label">{{label}}</label>
    <textarea class="form-control" v-bind="$props" v-if="type === 'textarea'"></textarea>
    <input class="form-control" v-bind="$props" :value="value" @input="$emit('input',$event.target.value)" v-else>
  </div>
</template>

<script>
  export default {
    name: 'md-fg-input',
    props: {
      type: {
        type: String,
        default: 'text'
      },
      label: String,
      name: String,
      disabled: Boolean,
      placeholder: String,
      value: [String, Number],
      labelFloating: Boolean,
      rows: Number,
      cols: Number
    }
  }
</script>

<style lang="scss"></style>
