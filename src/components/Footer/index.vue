<template>
  <footer class="footer">
    <div class="container-fluid">
      <nav class="pull-left">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Company</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
      </nav>
      <p class="copyright pull-right">©
        {{year}}&nbsp;
        Crafted with&nbsp;<i class="fa fa-heart heart"></i>&nbsp;by&nbsp;<a href="https://github.com/lucduong">Luc Duong.&nbsp;</a>Designed
        by&nbsp;<a href="http://www.creative-tim.com">Creative Tim</a>
      </p>
    </div>
  </footer>
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
