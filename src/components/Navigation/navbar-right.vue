<template lang="pug">
ul.nav(:class='navClasses')
  li
    router-link.dropdown-toggle(to='/', data-toggle='dropdown')
      i.material-icons dashboard
      p.hidden-lg.hidden-md Dashboard
  li.dropdown
    a.dropdown-toggle(href='#', data-toggle='dropdown')
      i.material-icons notifications
      span.notification 5
      p.hidden-lg.hidden-md Notifications
    ul.dropdown-menu
      li
        a(href='#') Mike John responded to your email
      li
        a(href='#') You have 5 new tasks
      li
        a(href='#') You're now friend with Andrew
      li
        a(href='#') Another Notification
      li
        a(href='#') Another One
  li
    a.dropdown-toggle(href='#', data-toggle='dropdown')
      i.material-icons person
      p.hidden-lg.hidden-md Profile
</template>
<script>
export default {
  name: 'navbar-right',
  props: {
    mobile: Boolean
  },
  computed: {
    navClasses() {
      return this.mobile ? ['nav-mobile-menu'] : ['navbar-nav', 'navbar-right']
    }
  }
}
</script>

