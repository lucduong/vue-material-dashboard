<template lang="pug">
.content
  .container-fluid
    .row
      .col-lg-3.col-md-6.col-sm-6
        md-stats-widget(icon='content_copy', backgroundColor='orange', title='Used Space')
          div(slot='content')
            | 49/50
            small GB
          div(slot='footer')
            i.material-icons.text-danger warning
            router-link(to='Dashboard') Get More Space...
      .col-lg-3.col-md-6.col-sm-6
        md-stats-widget(icon='warning', backgroundColor='green', title='Revenue')
          div(slot='content') $34,245
          div(slot='footer')
            i.material-icons date_range
            |  Last 24 Hours
      .col-lg-3.col-md-6.col-sm-6
        md-stats-widget(icon='info_outline', backgroundColor='red', title='Fixed Issues')
          div(slot='content') 75
          div(slot='footer')
            i.material-icons local_offer
            |  Tracked from Github
      .col-lg-3.col-md-6.col-sm-6
        md-stats-widget(faIcon='fa-twitter', backgroundColor='blue', title='Followers')
          div(slot='content') +245
          div(slot='footer')
            i.material-icons update
            |  Just Updated
    .row
      .col-md-4
        md-chart-widget(type='Line', 
                        backgroundColor='green', 
                        title='Daily Sales', 
                        id='dailySalesChart',
                        :options='dailySalesChart.options',
                        :data='dailySalesChart.data')
          div(slot='subTitle')
            span.text-success
              i.fa.fa-long-arrow-up
              |  55%
            |  increase in today sales.
          div(slot='footer')
            i.material-icons access_time
            |  updated 4 minutes ago
      .col-md-4
        md-chart-widget(type='Bar', 
                        backgroundColor='orange', 
                        title='Email Subscriptions', 
                        id='emailsSubscriptionChart',
                        :options='emailsSubscriptionChart.options',
                        :data='emailsSubscriptionChart.data')
          div(slot='subTitle')
            | Last Campaign Performance
          div(slot='footer')
            i.material-icons access_time
            |  campaign sent 2 days ago
      .col-md-4
        md-chart-widget(type='Line', 
                        backgroundColor='red', 
                        title='Completed Tasks', 
                        id='completedTasksChart',
                        :options='completedTasksChart.options',
                        :data='completedTasksChart.data')
          div(slot='subTitle')
            | Last Campaign Performance
          div(slot='footer')
            i.material-icons access_time
            |  campaign sent 2 days ago
    .row
      .col-lg-6.col-md-12
        md-card.card-nav-tabs(backgroundColor='purple')
          .nav-tabs-navigation(slot='header')
            .nav-tabs-wrapper
              span.nav-tabs-title Tasks:
              md-nav-tabs(:tabs='tabs', @onTabClick='onTabClick')
          md-tab(:tab='tabs')
            md-tab-content(:tab='tabs[0]', slot='content')
              table.table
                tbody
                  tr
                    td
                      .checkbox
                        label
                          input(type='checkbox', name='optionsCheckboxes', checked='')
                    td Sign contract for "What are conference organizers afraid of?"
                    td.td-actions.text-right
                      button.btn.btn-primary.btn-simple.btn-xs(type='button', rel='tooltip', title='Edit Task')
                        i.material-icons edit
                      button.btn.btn-danger.btn-simple.btn-xs(type='button', rel='tooltip', title='Remove')
                        i.material-icons close
                  tr
                    td
                      .checkbox
                        label
                          input(type='checkbox', name='optionsCheckboxes')
                    td Lines From Great Russian Literature? Or E-mails From My Boss?
                    td.td-actions.text-right
                      button.btn.btn-primary.btn-simple.btn-xs(type='button', rel='tooltip', title='Edit Task')
                        i.material-icons edit
                      button.btn.btn-danger.btn-simple.btn-xs(type='button', rel='tooltip', title='Remove')
                        i.material-icons close
                  tr
                    td
                      .checkbox
                        label
                          input(type='checkbox', name='optionsCheckboxes')
                    td
                      | Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit
                    td.td-actions.text-right
                      button.btn.btn-primary.btn-simple.btn-xs(type='button', rel='tooltip', title='Edit Task')
                        i.material-icons edit
                      button.btn.btn-danger.btn-simple.btn-xs(type='button', rel='tooltip', title='Remove')
                        i.material-icons close
                  tr
                    td
                      .checkbox
                        label
                          input(type='checkbox', name='optionsCheckboxes', checked='')
                    td Create 4 Invisible User Experiences you Never Knew About
                    td.td-actions.text-right
                      button.btn.btn-primary.btn-simple.btn-xs(type='button', rel='tooltip', title='Edit Task')
                        i.material-icons edit
                      button.btn.btn-danger.btn-simple.btn-xs(type='button', rel='tooltip', title='Remove')
                        i.material-icons close
            md-tab-content(:tab='tabs[1]', slot='content')
              table.table
                tbody
                  tr
                    td
                      .checkbox
                        label
                          input(type='checkbox', name='optionsCheckboxes', checked='')
                    td
                      | Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit
                    td.td-actions.text-right
                      button.btn.btn-primary.btn-simple.btn-xs(type='button', rel='tooltip', title='Edit Task')
                        i.material-icons edit
                      button.btn.btn-danger.btn-simple.btn-xs(type='button', rel='tooltip', title='Remove')
                        i.material-icons close
                  tr
                    td
                      .checkbox
                        label
                          input(type='checkbox', name='optionsCheckboxes')
                    td Sign contract for "What are conference organizers afraid of?"
                    td.td-actions.text-right
                      button.btn.btn-primary.btn-simple.btn-xs(type='button', rel='tooltip', title='Edit Task')
                        i.material-icons edit
                      button.btn.btn-danger.btn-simple.btn-xs(type='button', rel='tooltip', title='Remove')
                        i.material-icons close
            md-tab-content(:tab='tabs[2]', slot='content')
              table.table
                tbody
                  tr
                    td
                      .checkbox
                        label
                          input(type='checkbox', name='optionsCheckboxes')
                    td Lines From Great Russian Literature? Or E-mails From My Boss?
                    td.td-actions.text-right
                      button.btn.btn-primary.btn-simple.btn-xs(type='button', rel='tooltip', title='Edit Task')
                        i.material-icons edit
                      button.btn.btn-danger.btn-simple.btn-xs(type='button', rel='tooltip', title='Remove')
                        i.material-icons close
                  tr
                    td
                      .checkbox
                        label
                          input(type='checkbox', name='optionsCheckboxes', checked='')
                    td
                      | Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit
                    td.td-actions.text-right
                      button.btn.btn-primary.btn-simple.btn-xs(type='button', rel='tooltip', title='Edit Task')
                        i.material-icons edit
                      button.btn.btn-danger.btn-simple.btn-xs(type='button', rel='tooltip', title='Remove')
                        i.material-icons close
                  tr
                    td
                      .checkbox
                        label
                          input(type='checkbox', name='optionsCheckboxes')
                    td Sign contract for "What are conference organizers afraid of?"
                    td.td-actions.text-right
                      button.btn.btn-primary.btn-simple.btn-xs(type='button', rel='tooltip', title='Edit Task')
                        i.material-icons edit
                      button.btn.btn-danger.btn-simple.btn-xs(type='button', rel='tooltip', title='Remove')
                        i.material-icons close
      .col-lg-6.col-md-12
        md-card(title='Employees Stats', category='New Employees on 15th September, 2016', backgroundColor='orange')
          table.table.table-hover
            thead.text-warning
              th ID
              th Name
              th Salary
              th Country
            tbody
              tr
                td 1
                td Dakota Rice
                td $36,738
                td Niger
              tr
                td 2
                td Minerva Hooper
                td $23,789
                td Curaçao
              tr
                td 3
                td Sage Rodriguez
                td $56,142
                td Netherlands
              tr
                td 4
                td Philip Chaney
                td $38,735
                td Korea, South
</template>

<script>
import MdNavTabs from '@/core/components/mdTab/nav-tabs'
import MdTabContent from '@/core/components/mdTab/tab-content'

export default {
  name: 'dashboard',
  components: {
    MdTabContent,
    MdNavTabs
  },

  data() {
    const lineSmooth = this.$Chartist.Interpolation.cardinal({ tension: 0 })
    return {
      tabs: [
        { id: 'home', name: 'Home', icon: 'bug_report', active: true },
        { id: 'website', name: 'Website', icon: 'code', active: false },
        { id: 'server', name: 'Server', icon: 'cloud', active: false }
      ],
      dailySalesChart: {
        data: {
          labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
          series: [
            [12, 17, 7, 17, 23, 18, 38]
          ]
        },
        options: {
          lineSmooth: lineSmooth,
          low: 0,
          high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: { top: 0, right: 0, bottom: 0, left: 0 }
        }
      },
      emailsSubscriptionChart: {
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          series: [
            [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]

          ]
        },
        options: {
          axisX: {
            showGrid: false
          },
          low: 0,
          high: 1000,
          chartPadding: { top: 0, right: 5, bottom: 0, left: 0 }
        }
      },
      completedTasksChart: {
        data: {
          labels: ['12am', '3pm', '6pm', '9pm', '12pm', '3am', '6am', '9am'],
          series: [
            [230, 750, 450, 300, 280, 240, 200, 190]
          ]
        },
        options: {
          lineSmooth: lineSmooth,
          low: 0,
          high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: { top: 0, right: 0, bottom: 0, left: 0 }
        }
      }
    }
  },

  methods: {
    onTabClick(tab) {
      console.log(`onTabClick: `, tab)
      // console.log(`tabs: `, this.tabs)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
