<template lang="pug">
nav.navbar.navbar-transparent.navbar-absolute
  .container-fluid
    .navbar-header
      button.navbar-toggle(type='button', data-toggle='collapse')
        span.sr-only Toggle navigation
        span.icon-bar
        span.icon-bar
        span.icon-bar
      a.navbar-brand(href='#') {{$route.name}}
    .collapse.navbar-collapse
      ul.nav.navbar-nav.navbar-right
        li
          a.dropdown-toggle(href='#pablo', data-toggle='dropdown')
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
          a.dropdown-toggle(href='#pablo', data-toggle='dropdown')
            i.material-icons person
            p.hidden-lg.hidden-md Profile
      form.navbar-form.navbar-right(role='search')
        .form-group.is-empty
          input.form-control(type='text', placeholder='Search')
          span.material-input
        button.btn.btn-white.btn-round.btn-just-icon(type='submit')
          i.material-icons search
          .ripple-container
</template>
<script>
export default {
}
</script>
