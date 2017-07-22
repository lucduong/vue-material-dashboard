<template>
  <ul class="nav" :class="navClasses">
    <li>
      <router-link class="dropdown-toggle" to="/" data-toggle="dropdown"><i class="material-icons">dashboard</i>
        <p class="hidden-lg hidden-md">Dashboard</p>
      </router-link>
    </li>
    <li class="dropdown" :class="{ open : isDropdownOpened }" v-click-outside="closeDropdown">
      <a class="dropdown-toggle" href="#" data-toggle="dropdown" @click.prevent="openDropdown">
        <i class="material-icons">notifications</i>
        <span class="notification">5</span>
        <p class="hidden-lg hidden-md">Notifications</p>
      </a>
      <ul class="dropdown-menu">
        <li><a href="#">Mike John responded to your email</a></li>
        <li><a href="#">You have 5 new tasks</a></li>
        <li><a href="#">You're now friend with Andrew</a></li>
        <li><a href="#">Another Notification</a></li>
        <li><a href="#">Another One</a></li>
      </ul>
    </li>
    <li>
      <a class="dropdown-toggle" href="#" data-toggle="dropdown">
        <i class="material-icons">person</i>
        <p class="hidden-lg hidden-md">Profile</p>
      </a>
    </li>
  </ul>
</template>
<script>
  export default {
    name: 'navbar-right',
    props: {
      mobile: Boolean
    },
    data() {
      return {
        isDropdownOpened: false
      }
    },
    computed: {
      navClasses() {
        return this.mobile ? ['nav-mobile-menu'] : ['navbar-nav', 'navbar-right']
      }
    },
    methods: {
      openDropdown() {
        this.isDropdownOpened = !this.isDropdownOpened
      },
      closeDropdown() {
        if (this.isDropdownOpened) {
          this.isDropdownOpened = false
        }
      }
    }
  }
</script>

