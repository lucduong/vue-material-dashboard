<template lang="pug">
.form-group(:class="{ 'label-floating' : labelFloating }")
  label.control-label(v-if='label')
    | {{label}}
  textarea.form-control(v-bind='$props', @input="$emit('input',$event.target.value)" , v-if="type === 'textarea'")
  input.form-control(v-bind='$props', :value='value', @input="$emit('input',$event.target.value)", v-else)
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
