<template lang="pug">
.card(:class="{ 'card-stats' : isStatistics }")
  .card-header(:data-background-color="backgroundColor", :class="{ 'card-chart' : isChart }")
    i.material-icons(v-if="isStatistics && icon") {{icon}}
    i.fa(v-if="faIcon", :class='faIcon')
    .ct-chart(v-if="isChart", :id="chartId")
  .card-content(v-if="isStatistics")
    p.category {{title}}
    h3.title
      slot(name="content")
  .card-content(v-if="isChart")
    h4.title {{title}}
    p.category
      slot(name="content")
  .card-footer
    .stats
      slot(name="footer")
</template>

<script>
const TYPE_STATISTICS = 'statistics'
const TYPE_CHART = 'chart'

export default {
  name: 'md-widget',
  props: {
    backgroundColor: String,
    icon: {
      type: String,
      default: undefined
    },
    faIcon: {
      type: String,
      default: undefined
    },
    title: String,
    type: {
      type: String,
      default: '' // statistics|chart|
    },
    disabled: Boolean,
    chartId: String
  },
  computed: {

    isStatistics() {
      return this.type === TYPE_STATISTICS
    },

    isChart() {
      return this.type === TYPE_CHART
    },

    isShowIcon() {
      return this.icon
    }
  }
}
</script>

<style lang="scss" src="./style.scss"></style>
