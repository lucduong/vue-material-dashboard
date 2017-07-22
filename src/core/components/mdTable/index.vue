<template>
  <table class="table" :class="tableClass">
    <thead>
    <tr>
      <th v-for="c in columns" :key="c">{{c}}</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="item in data" :key="item">
      <td v-for="c in columns" :key="c" v-if="hasValue(item, c)">{{itemValue(item, c)}}</td>
    </tr>
    </tbody>
  </table>
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
