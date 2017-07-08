<template lang="pug">
router-link(tag="li", :to="href", active-class="active", exact)
  a(:href='href')
    i.material-icons.text-gray {{icon}}
    p {{title}}
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
