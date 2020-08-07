<template>
  <v-container class="d-flex justify-center">
    <Profile v-if="user" :user="user"/>
    <h3 v-else>No user with id:{{$route.params.id}}</h3>
  </v-container>
</template>

<script>
import Profile from "@/components/Profile"

export default {
  components: {Profile},
  computed: {
    user() {
      return this.$store.getters["users/currentUser"](this.$route.params.id)
    }
  },
  middleware: ['auth'],
  head: {
    title: 'Profile',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {
        hid: 'profile page',
        name: 'profile page',
        content: 'my custom profile page'
      }
    ],
  }
}
</script>
