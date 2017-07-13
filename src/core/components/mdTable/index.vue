<template lang="pug">
table.table(:class='tableClass')
  thead
    tr
      th(v-for='c in columns', :key='c') {{c}}
  tbody
    tr(v-for='item in data', :key='item')
      td(v-for='c in columns', :key='c', v-if='hasValue(item, c)') {{itemValue(item, c)}}
</template>

<script>
export default {
  name: 'md-table',
  props: {
    columns: Array,
    data: Array,
    type: {
      type: String, // default | striped | hover
      default: ''
    }
  },
  computed: {
    tableClass() {
      return `table-${this.type}`
    }
  },
  methods: {
    hasValue(item, column) {
      return item[column.toLowerCase()] !== 'undefined'
    },
    itemValue(item, column) {
      return item[column.toLowerCase()]
    }
  }
}

</script>
<style lang="scss"></style>
