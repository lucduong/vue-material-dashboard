<template lang="pug">
.card.card-stats
  .card-header(:data-background-color='backgroundColor')
    i.material-icons(v-if='!!icon') {{icon}}
    i.fa(v-if="!!faIcon", :class='faIcon')
  .card-content
    p.category {{title}}
    h3.title
      slot(name='content')
  .card-footer
    .stats
      slot(name='footer')
</template>
<script>
export default {
  name: 'md-stats-widget',
  props: {
    icon: String,
    faIcon: String,
    backgroundColor: String,
    title: String
  }
}
</script>

