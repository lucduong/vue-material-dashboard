<template>
  <div class="content">
    <div class="container-fluid">
      <div class="card">
        <div class="card-header" data-background-color="purple"><h4 class="title">Notifications</h4>
          <p class="category">Handcrafted by our friend<a target="_blank" href="https://github.com/mouse0270">Robert
            McIntosh</a>. Please checkout the<a href="http://bootstrap-notify.remabledesigns.com/" target="_blank">full
            documentation.</a></p></div>
        <div class="card-content">
          <div class="row">
            <div class="col-md-6"><h5>Notifications Style</h5>
              <div class="alert alert-info"><span>This is a plain notification</span></div>
              <div class="alert alert-info">
                <button class="close" type="button">×</button>
                <span>This is a notification with close button.</span></div>
              <div class="alert alert-info alert-with-icon" data-notify="container">
                <button class="close" type="button">×</button>
                <i class="material-icons" data-notify="icon">add_alert</i><span data-notify="message">This is a notification with close button and icon.</span>
              </div>
              <div class="alert alert-info alert-with-icon" data-notify="container">
                <button class="close" type="button">×</button>
                <i class="material-icons" data-notify="icon">add_alert</i><span data-notify="message">This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.</span>
              </div>
            </div>
            <div class="col-md-6"><h5>Notification states</h5>
              <div class="alert alert-info">
                <button class="close" type="button">×</button>
                <span><b> Info -</b> This is a regular notification made with ".alert-info"</span></div>
              <div class="alert alert-success">
                <button class="close" type="button">×</button>
                <span><b> Success -</b> This is a regular notification made with ".alert-success"</span></div>
              <div class="alert alert-warning">
                <button class="close" type="button">×</button>
                <span><b> Warning -</b> This is a regular notification made with ".alert-warning"</span></div>
              <div class="alert alert-danger">
                <button class="close" type="button">×</button>
                <span><b> Danger -</b> This is a regular notification made with ".alert-danger"</span></div>
              <div class="alert alert-primary">
                <button class="close" type="button">×</button>
                <span><b> Primary -</b> This is a regular notification made with ".alert-primary"</span></div>
            </div>
          </div>
          <br/><br/>
          <div class="places-buttons">
            <div class="row">
              <div class="col-md-6 col-md-offset-3 text-center">
                <h5>Notifications Places<p class="category">Click to view notifications</p></h5>
              </div>
            </div>
            <div class="row">
              <div class="col-md-8 col-md-offset-2">
                <div class="col-md-4">
                  <md-button class="btn btn-primary btn-block" @click="showNotification('top', 'left')">Top Left
                  </md-button>
                </div>
                <div class="col-md-4">
                  <md-button class="btn btn-primary btn-block" @click="showNotification('top', 'center')">Top Center
                  </md-button>
                </div>
                <div class="col-md-4">
                  <md-button class="btn btn-primary btn-block" @click="showNotification('top', 'right')">Top Right
                  </md-button>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-8 col-md-offset-2">
                <div class="col-md-4">
                  <md-button class="btn btn-primary btn-block" @click="showNotification('bottom', 'left')">Bottom Left
                  </md-button>
                </div>
                <div class="col-md-4">
                  <md-button class="btn btn-primary btn-block" @click="showNotification('bottom', 'center')">Bottom
                    Center
                  </md-button>
                </div>
                <div class="col-md-4">
                  <md-button class="btn btn-primary btn-block" @click="showNotification('bottom', 'right')">Bottom Right
                  </md-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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

