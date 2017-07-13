<template lang="pug">
.card
  .card-header.card-chart(:data-background-color='backgroundColor')
    .ct-chart(:id='id')
  .card-content
    h4.title(v-if='!hasTitleSlot') {{title}}
    slot(name='title')
    p.category
      slot(name='subTitle')
  .card-footer
    .stats
      slot(name='footer')
</template>

<script>
export default {
  name: 'md-chart-widget',
  props: {
    id: {
      type: String,
      required: true
    },
    title: String,
    type: {
      type: String,
      default: 'Line', // Line | Pie | Bar
      validator: val => {
        return ['Line', 'Pie', 'Bar'].indexOf(val) >= 0
      }
    },
    backgroundColor: String,
    options: {
      type: Object,
      default: () => {
        return {}
      }
    },
    data: {
      type: Object,
      default: () => {
        return {
          labels: [],
          series: []
        }
      }
    },
    animation: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      seq: 0,
      seq2: 0,
      durations: 500,
      durations2: 500,
      delays: 80,
      delays2: 80
    }
  },
  computed: {
    hasTitleSlot() {
      return !!this.$slots['title']
    }
  },
  methods: {
    init(callback) {
      let idSelector = `#${this.id}`
      const chart = this.$Chartist[this.type](idSelector, this.data, this.options)
      callback(chart)
    },
    startAnimationForLineChart(chart) {
      chart.on('draw', (data) => {
        if (data.type === 'line' || data.type === 'area') {
          data.element.animate({
            d: {
              begin: 600,
              dur: 700,
              from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
              to: data.path.clone().stringify(),
              easing: this.$Chartist.Svg.Easing.easeOutQuint
            }
          })
        } else if (data.type === 'point') {
          this.seq++
          data.element.animate({
            opacity: {
              begin: this.seq * this.delays,
              dur: this.durations,
              from: 0,
              to: 1,
              easing: 'ease'
            }
          })
        }
      })
      this.seq = 0
    },
    startAnimationForBarChart(chart) {
      chart.on('draw', (data) => {
        if (data.type === 'bar') {
          this.seq2++
          data.element.animate({
            opacity: {
              begin: this.seq2 * this.delays2,
              dur: this.durations2,
              from: 0,
              to: 1,
              easing: 'ease'
            }
          })
        }
      })
      this.seq2 = 0
    },
    handleResize() {
      this.seq = 0
      this.seq2 = 0
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
    this.$nextTick(() => {
      this.init(chart => {
        switch (this.type) {
          case 'Line':
            this.animation && this.startAnimationForLineChart(chart)
            break
          case 'Bar':
            this.animation && this.startAnimationForBarChart(chart)
            break
        }
      })
    })
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
  }
}
</script>

<style lang="scss"></style>
