import Notifications from './Notifications'

const NotificationStore = {
  state: [],
  removeNotification(index) {
    this.state.splice(index, 1)
  },
  notify(notification) {
    this.state.push(notification)
  }
}

export default {
  install(Vue) {
    Object.defineProperty(Vue.prototype, '$notifications', {
      get() {
        return NotificationStore
      }
    })
    Vue.component('Notifications', Notifications)
  }
}
