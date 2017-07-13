<template lang="pug">
.md-notification.col-xs-11.col-sm-3.alert.open(data-notify='container', :class='[placement.from, placement.align, `alert-${type}`, withIcon]', role='alert', :style='customPosition', data-notify-position='top-center')
  button.close(v-if='allowDismiss', type='button', aria-hidden='true', data-notify='dismiss', @click='close') ×
  i.material-icons(data-notify='icon', v-if='!!icon') {{icon}}
  span(data-notify='title', v-if='!!title') {{title}}
  slot(name='message')
    span(data-notify='message', v-if='!!message', v-html='message')
  .progress(data-notify='progressbar', v-if='progressbar')
    .progress-bar(class='`progress-bar-${type}`', role='progressbar', aria-valuenow='0', aria-valuemin='0', aria-valuemax='100', style='width: 0%;')
  a(v-if='!!url', href='url', target='target', data-notify='url')
</template>
<script>
const EVENT_ON_CLOSE = 'onClose'

export default {
  name: 'md-notification',
  props: {
    type: {
      type: String,
      default: 'info',
      validator: val => ['', 'primary', 'info', 'success', 'warning', 'danger'].indexOf(val) !== -1
    },
    icon: String,
    title: String,
    message: String,
    allowDismiss: {
      type: Boolean,
      default: true
    },
    progressbar: {
      type: Object
    },
    url: String,
    target: {
      type: String,
      default: '_blank',
      validator: val => {
        const targets = ['', '_self', '_blank']
        return targets.indexOf(val) !== -1
      }
    },
    placement: {
      type: Object,
      default: () => {
        return {
          from: 'top',
          align: 'right'
        }
      },
      validator: plmt => {
        const froms = ['top', 'bottom']
        const aligns = ['left', 'center', 'right']
        return froms.indexOf(plmt.from) !== -1 && aligns.indexOf(plmt.align) !== -1
      }
    },
    timeout: {
      type: Number,
      default: 5000
    }
  },
  data() {
    return {}
  },
  computed: {
    withIcon() {
      return (this.icon && this.icon.length > 0) ? 'alert-with-icon' : ''
    },
    customPosition() {
      let initialMargin = 20
      let alertHeight = 90
      let sameAlertsCount = this.$notifications.state.filter((alert) => {
        return alert.placement.align === this.placement.align && alert.placement.from === this.placement.from
      }).length
      let pixels = (sameAlertsCount - 1) * alertHeight + initialMargin
      let styles = {}
      if (this.placement.from === 'top') {
        styles.top = `${pixels}px`
      } else {
        styles.bottom = `${pixels}px`
      }
      return styles
    }
  },
  methods: {
    close() {
      this.$emit(EVENT_ON_CLOSE)
    }
  },
  mounted() {
    if (this.timeout) {
      setTimeout(this.close, this.timeout)
    }
  }
}
</script>
<style lang="scss">
@import "../../../assets/sass/md/variables";

.fade-enter-active,
.fade-leave-active {
  transition: opacity .3s
}

.fade-enter,
.fade-leave-to {
  opacity: 0
}

.md-notification {
  &.alert {
    border: 0;
    border-radius: 0;
    color: #FFFFFF;
    padding: 10px 15px;
    font-size: 14px;
    z-index: 100;
    display: inline-block;
    position: fixed;
    transition: all 0.5s ease-in-out;

    &.center {
      left: 0px;
      right: 0px;
      margin: 0 auto;
    }
    &.left {
      left: 20px;
    }
    &.right {
      right: 20px;
    }
    .container & {
      border-radius: 4px;
    }
    .navbar & {
      border-radius: 0;
      left: 0;
      position: absolute;
      right: 0;
      top: 85px;
      width: 100%;
      z-index: 3;
    }
    .navbar:not(.navbar-transparent) & {
      top: 70px;
    }

    .alert-icon {
      font-size: 30px;
      margin-right: 5px;
    }

    .close~span {
      display: block;
      max-width: 89%;
    }

    &[data-notify="container"] {
      width: 350px;
      padding: 10px 10px 10px 20px;
      border-radius: $border-radius-base;
    }

    &.alert-with-icon {
      padding-left: 65px;
    }
  }

  .alert-info {
    background-color: $brand-info;
    color: $white;
  }

  .alert-success {
    background-color: $brand-success;
    color: $white;
  }

  .alert-warning {
    background-color: $brand-warning;
    color: $white;
  }

  .alert-danger {
    background-color: $brand-danger;
    color: $white;
  }
}
</style>
