<template>
  <div class="card card-stats">
    <div class="card-header" :data-background-color="backgroundColor">
      <i class="material-icons" v-if="!!icon">{{icon}}</i>
      <i class="fa" v-if="!!faIcon" :class="faIcon"></i>
    </div>
    <div class="card-content"><p class="category">{{title}}</p>
      <h3 class="title">
        <slot name="content"></slot>
      </h3>
    </div>
    <div class="card-footer">
      <div class="stats">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'md-stats-widget',
    props: {
      icon: String,
      faIcon: String,
      backgroundColor: String,
      title: String
    }
  }
</script>

