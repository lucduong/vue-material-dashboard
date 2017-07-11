<template lang="pug">
.content
  .row
    .col-md-12
      md-card(title='Simple Table', category='Here is a subtitle for this table', backgroundColor='purple')
        md-table(:data='table1.data', :columns='table1.columns')
    .col-md-12
      md-card.card-plain(title='Table on Plain Background', category='Here is a subtitle for this table', backgroundColor='purple')
        md-table(type='hover', :data='table2.data', :columns='table2.columns')
</template>

<script>
const tableColumns = ['Id', 'Name', 'Salary', 'Country', 'City']
const tableData = [
  { id: 1, name: 'Dakota Rice', salary: '$36.738', country: 'Niger', city: 'Oud-Turnhout' },
  { id: 2, name: 'Minerva Hooper', salary: '$23,789', country: 'Curaçao', city: 'Sinaai-Waas' },
  { id: 3, name: 'Sage Rodriguez', salary: '$56,142', country: 'Netherlands', city: 'Baileux' },
  { id: 4, name: 'Philip Chaney', salary: '$38,735', country: 'Korea,  South', city: 'Overland Park' },
  { id: 5, name: 'Doris Greene', salary: '$63,542', country: 'Malawi', city: 'Feldkirchen in Kärnten' }
]
export default {
  data() {
    return {
      table1: {
        columns: [...tableColumns],
        data: [...tableData]
      },
      table2: {
        columns: [...tableColumns],
        data: [...tableData]
      }
    }
  }
}
</script>
<style lang="sass">

</style>
