<template lang='pug'>
.notifications
  transition-group(name='list')
    md-notification(v-for='(n,index) in notifications',
                    :key='n',
                    :message='n.message',
                    :icon='n.icon',
                    :type='n.type',
                    :placement='n.placement',
                    @onClose='removeNotification(index)')
</template>
<script>
import MdNotification from '@/core/components/mdNotification'

export default {
  name: 'md-notifications',
  components: {
    MdNotification
  },
  data() {
    return {
      notifications: this.$notifications.state
    }
  },
  methods: {
    removeNotification(index) {
      this.$notifications.removeNotification(index)
    }
  }
}

</script>
<style lang="scss" scoped>
.list-item {
  display: inline-block;
  margin-right: 10px;
}

.list-enter-active,
.list-leave-active {
  transition: all 1s;
}

.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
