<template lang="pug">
.content
  .row
    .col-md-8
      .card
        .card-header(data-background-color='purple')
          h4.title Edit Profile
          p.category Complete your profile
        .card-content
          form
            .row
              .col-md-5
                md-fg-input(label='Company (disbaled)', :disabled='true', :labelFloating='true', v-model='user.company')
              .col-md-3
                md-fg-input(label='Username', :labelFloating='true', v-model='user.username')
              .col-md-4
                md-fg-input(type='email', label='Email address', :labelFloating='true', v-model='user.email')
            .row
              .col-md-6
                md-fg-input(label='First Name', :labelFloating='true', v-model='user.firstName')
              .col-md-6
                md-fg-input(label='Last Name', :labelFloating='true', v-model='user.lastName')
            .row
              .col-md-12
                md-fg-input(label='Adress', :labelFloating='true', v-model='user.address')
            .row
              .col-md-4
                md-fg-input(label='City', :labelFloating='true', v-model='user.city')
              .col-md-4
                md-fg-input(label='Country', :labelFloating='true', v-model='user.country')
              .col-md-4
                md-fg-input(label='Postal Code', :labelFloating='true', v-model='user.postalCode')
            .row
              .col-md-12
                md-fg-input(type='textarea', label='About Me', :labelFloating='true', :rows='5', v-model='user.aboutMe')
            md-button.btn.btn-primary.pull-right(@click.prevent='updateProfile') Update Profile
            .clearfix
    .col-md-4
      .card.card-profile
        .card-avatar
          a(href='#pablo')
            img.img(src='~images/faces/marc.jpg')
        .content
          h6.category.text-gray CEO / Co-Founder
          h4.card-title {{user.name}}
          p.card-content
            | {{user.aboutMe}}
          md-button.btn.btn-primary.btn-round(href='#/person') Follow
</template>
<script>
export default {
  data() {
    return {
      user: {
        company: 'Material Dashboard',
        username: 'lucduong',
        email: 'luc@ltv.vn',
        firstName: 'Luc',
        lastName: 'Duong',
        address: 'Ho Chi Minh, Viet Nam',
        country: 'Viet Nam',
        city: 'Ho Chi Minh',
        postalCode: '',
        aboutMe: `Oh so, your weak rhyme. You doubt I'll bother, reading into it.I'll probably won't, left to my own devicesBut that's the difference in our opinions.`
      }
    }
  },
  methods: {
    updateProfile() {
      alert('Your data: ' + JSON.stringify(this.user))
    }
  }
}
</script>

