import MdNotifications from './index'

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
    Vue.component('MdNotifications', MdNotifications)
  }
}
