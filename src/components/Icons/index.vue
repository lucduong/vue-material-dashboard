<template lang="pug">
.content
  .row
    .col-md-12
      .card.card-plain
        .card-header(data-background-color='purple')
          h4.title Material Design Icons
          p.category
            | Handcrafted by our friends from 
            a(target='_blank', href='https://design.google.com/icons/') Google
        .card-content
          .iframe-container.hidden-sm.hidden-xs
            iframe(src='https://design.google.com/icons/')
              p Your browser does not support iframes.
          .col-md-6.hidden-lg.hidden-md.text-center
            h5
              | The icons are visible on Desktop mode inside an iframe. Since the iframe is not working on Mobile and Tablets please visit the icons on their original page on Google. Check the  
              a(href='https://design.google.com/icons/', target='_blank') Material Icons
</template>

<script>
export default {

}
</script>
<style lang="sass">

</style>

