<template>
  <router-link tag="li" :to="href" active-class="active" exact="exact">
    <a :href="href">
      <i class="material-icons text-gray">{{icon}}</i>
      <p>{{title}}</p>
    </a>
  </router-link>
</template>

<script>
  export default {
    props: {
      icon: String,
      title: String,
      href: String
    }
  }
</script>
