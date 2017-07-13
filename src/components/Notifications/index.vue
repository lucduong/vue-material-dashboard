<template lang="pug">
.content
  .container-fluid
    .card
      .card-header(data-background-color='purple')
        h4.title Notifications
        p.category
          | Handcrafted by our friend 
          a(target='_blank', href='https://github.com/mouse0270') Robert McIntosh
          | . Please checkout the 
          a(href='http://bootstrap-notify.remabledesigns.com/', target='_blank') full documentation.
      .card-content
        .row
          .col-md-6
            h5 Notifications Style
            .alert.alert-info
              span This is a plain notification
            .alert.alert-info
              button.close(type='button', aria-hidden='true') ×
              span This is a notification with close button.
            .alert.alert-info.alert-with-icon(data-notify='container')
              button.close(type='button', aria-hidden='true') ×
              i.material-icons(data-notify='icon') add_alert
              span(data-notify='message') This is a notification with close button and icon.
            .alert.alert-info.alert-with-icon(data-notify='container')
              button.close(type='button', aria-hidden='true') ×
              i.material-icons(data-notify='icon') add_alert
              span(data-notify='message')
                | This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.
          .col-md-6
            h5 Notification states
            .alert.alert-info
              button.close(type='button', aria-hidden='true') ×
              span
                b  Info - 
                |  This is a regular notification made with ".alert-info"
            .alert.alert-success
              button.close(type='button', aria-hidden='true') ×
              span
                b  Success - 
                |  This is a regular notification made with ".alert-success"
            .alert.alert-warning
              button.close(type='button', aria-hidden='true') ×
              span
                b  Warning - 
                |  This is a regular notification made with ".alert-warning"
            .alert.alert-danger
              button.close(type='button', aria-hidden='true') ×
              span
                b  Danger - 
                |  This is a regular notification made with ".alert-danger"
            .alert.alert-primary
              button.close(type='button', aria-hidden='true') ×
              span
                b  Primary - 
                |  This is a regular notification made with ".alert-primary"
        br
        br
        .places-buttons
          .row
            .col-md-6.col-md-offset-3.text-center
              h5
                | Notifications Places
                p.category Click to view notifications
          .row
            .col-md-8.col-md-offset-2
              .col-md-4
                md-button.btn.btn-primary.btn-block(@click="showNotification('top', 'left')") Top Left
              .col-md-4
                md-button.btn.btn-primary.btn-block(@click="showNotification('top', 'center')") Top Center
              .col-md-4
                md-button.btn.btn-primary.btn-block(@click="showNotification('top', 'right')") Top Right
          .row
            .col-md-8.col-md-offset-2
              .col-md-4
                md-button.btn.btn-primary.btn-block(@click="showNotification('bottom', 'left')") Bottom Left
              .col-md-4
                md-button.btn.btn-primary.btn-block(@click="showNotification('bottom', 'center')") Bottom Center
              .col-md-4
                md-button.btn.btn-primary.btn-block(@click="showNotification('bottom', 'right')") Bottom Right
</template>

<script>
import MdNotification from '@/core/components/mdNotification'
export default {
  components: {
    MdNotification
  },
  data() {
    return {
      type: ['', 'primary', 'info', 'success', 'warning', 'danger']
    }
  },
  methods: {
    showNotification(from, align) {
      const color = Math.floor((Math.random() * 5) + 1)
      this.$notifications.notify({
        type: this.type[color],
        icon: 'notifications',
        message: 'Welcome to <b>Material Dashboard</b> - a beautiful freebie for every web developer.',
        placement: {
          from,
          align
        }
      })
    }
  }
}
</script>
<style lang="scss">

</style>

