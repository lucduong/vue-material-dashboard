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
      | Crafted with&nbsp;
      i.fa.fa-heart.heart
      | &nbsp;by&nbsp;
      a(href='https://github.com/lucduong') Luc Duong.&nbsp;
      | Designed by&nbsp;
      a(href='http://www.creative-tim.com') Creative Tim
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
<style lang="scss">
.footer .heart {
  color: #EB5E28;
}
</style>

