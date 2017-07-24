<template>
  <div class="sidebar" data-color="blue">
    <div class="logo"><a class="simple-text" href="http://www.creative-tim.com">Creative Tim</a></div>
    <div class="sidebar-wrapper">
      <navbar-search v-if="open"></navbar-search>
      <navbar-right v-if="open" :mobile="true"></navbar-right>
      <ul class="nav">
        <item title="Dashboard" icon="dashboard" href="/"></item>
        <item title="User Profile" icon="person" href="person"></item>
        <item title="Table List" icon="content_paste" href="table"></item>
        <item title="Typography" icon="library_books" href="typography"></item>
        <item title="Icons" icon="bubble_chart" href="icons"></item>
        <item title="Maps" icon="location_on" href="maps"></item>
        <item title="Notifications" icon="notifications" href="notifications"></item>
        <li :class="{ 'active-pro' : !open }"><a href="upgrade.html"><i class="material-icons">unarchive</i>
          <p>Upgrade to PRO</p></a></li>
      </ul>
    </div>
    <div class="sidebar-background"></div>
  </div>
</template>
<script>
  import Item from './item'
  import NavbarSearch from '@/components/Navigation/navbar-search'
  import NavbarRight from '@/components/Navigation/navbar-right'

  export default {
    props: {
      open: Boolean
    },
    components: {
      Item,
      NavbarSearch,
      NavbarRight
    }
  }
</script>

<style lang="scss">
  .sidebar-background {
    background-image: url('~images/sidebar-2.jpg')
  }
</style>

