<template>
  <div class="content">
    <div class="row">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header" data-background-color="purple"><h4 class="title">Edit Profile</h4>
            <p class="category">Complete your profile</p></div>
          <div class="card-content">
            <form>
              <div class="row">
                <div class="col-md-5">
                  <md-fg-input label="Company (disbaled)" :disabled="true" :labelFloating="true"
                               v-model="user.company"></md-fg-input>
                </div>
                <div class="col-md-3">
                  <md-fg-input label="Username" :labelFloating="true" v-model="user.username"></md-fg-input>
                </div>
                <div class="col-md-4">
                  <md-fg-input type="email" label="Email address" :labelFloating="true"
                               v-model="user.email"></md-fg-input>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <md-fg-input label="First Name" :labelFloating="true" v-model="user.firstName"></md-fg-input>
                </div>
                <div class="col-md-6">
                  <md-fg-input label="Last Name" :labelFloating="true" v-model="user.lastName"></md-fg-input>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <md-fg-input label="Adress" :labelFloating="true" v-model="user.address"></md-fg-input>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <md-fg-input label="City" :labelFloating="true" v-model="user.city"></md-fg-input>
                </div>
                <div class="col-md-4">
                  <md-fg-input label="Country" :labelFloating="true" v-model="user.country"></md-fg-input>
                </div>
                <div class="col-md-4">
                  <md-fg-input label="Postal Code" :labelFloating="true" v-model="user.postalCode"></md-fg-input>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <md-fg-input type="textarea" label="About Me" :labelFloating="true" :rows="5"
                               v-model="user.aboutMe"></md-fg-input>
                </div>
              </div>
              <md-button class="btn btn-primary pull-right" @click.prevent="updateProfile">Update Profile</md-button>
              <div class="clearfix"></div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card card-profile">
          <div class="card-avatar"><a href="#pablo"><img class="img" src="~images/faces/marc.jpg"/></a></div>
          <div class="content"><h6 class="category text-gray">CEO / Co-Founder</h6>
            <h4 class="card-title">{{user.name}}</h4>
            <p class="card-content">{{user.aboutMe}}</p>
            <md-button class="btn btn-primary btn-round" href="#/person">Follow</md-button>
          </div>
        </div>
      </div>
    </div>
  </div>
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

