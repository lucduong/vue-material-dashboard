<template lang="pug">
.sidebar(data-color='blue')
  .logo
    a.simple-text(href='http://www.creative-tim.com')
      | Creative Tim
  .sidebar-wrapper
    ul.nav
      item(title='Dashboard', icon='dashboard', href='/')
      item(title='User Profile', icon='person', href='person')
      item(title='Table List', icon='content_paste', href='table')
      item(title='Typography', icon='library_books', href='typography')
      item(title='Icons', icon='bubble_chart', href='icons')
      item(title='Maps', icon='location_on', href='maps')
      item(title='Notifications', icon='notifications', href='notifications')
      li.active-pro
        a(href='upgrade.html')
          i.material-icons unarchive
          p Upgrade to PRO
  .sidebar-background
</template>
<script>
import Item from './item'

export default {
  components: {
    Item
  }
}
</script>

<style lang="scss">
.sidebar-background {
  background-image: url('~images/sidebar-2.jpg')
}
</style>

