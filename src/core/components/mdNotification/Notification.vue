<template lang="pug">
.col-xs-11.col-sm-4.alert.open(data-notify='container', role='alert', :class='[verticalAlign, horizontalAlign, alertType]', :style='customPosition', data-notify-position='top-center')
  button.close(type='button', aria-hidden='true', data-notify='dismiss', style='position: absolute; right: 10px; top: 5px; z-index: 1033;', @click='close')
    | ×
  .row
    span.col-xs-1.alert-icon(:class='icon')
    div(:class="hasIcon ? 'col-xs-8' : 'col-xs-12'")
      slot(name='message')
        div(v-html='message')
</template>
<script>
import { EVENT_ON_CLOSE } from './constants'

export default {
  name: 'md-notification',
  props: {
    message: String,
    icon: String,
    verticalAlign: {
      type: String,
      default: 'top',
      validator: val => val === 'top' || val === 'bottom'
    },
    horizontalAlign: {
      type: String,
      default: 'right',
      validator: val => ['left', 'center', 'right'].indexOf(val) >= 0
    },
    type: {
      type: String,
      default: 'info',
      validator: val => ['', 'primary', 'info', 'warning', 'success'].indexOf(val) >= 0
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
    hasIcon() {
      return this.icon && this.icon.length > 0
    },
    alertType() {
      return `alert-${this.type}`
    },
    customPosition() {
      let initialMargin = 20
      let alertHeight = 90
      let sameAlertsCount = this.$notifications.state.filter((alert) => {
        return alert.horizontalAlign === this.horizontalAlign && alert.verticalAlign === this.verticalAlign
      }).length
      let pixels = (sameAlertsCount - 1) * alertHeight + initialMargin
      let styles = {}
      if (this.verticalAlign === 'top') {
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

.alert {
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
</style>
