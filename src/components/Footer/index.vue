<template lang="pug">
footer.footer
  .container-fluid
    nav.pull-left
      ul
        li
          a(href='#')
            | Home
        li
          a(href='#')
            | Company
        li
          a(href='#')
            | Portfolio
        li
          a(href='#')
            | Blog
    p.copyright.pull-right
      | © 
      | {{year}}&nbsp;
      a(href='http://www.creative-tim.com') Creative Tim
      | , made with love for a better web
</template>
<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>

