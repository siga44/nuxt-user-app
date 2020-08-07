<template>
  <v-container class="content-wrapper d-flex justify-center align-center">
    <Register v-if="!isAuth" />
    <h3 v-else>You are logged in already</h3>
  </v-container>
</template>

<script>
import Register from "~/components/Register"

export default {
  components: {
    Register
  },
  computed: {
    isAuth() {
      return this.$store.getters.isAuth
    }
  },
  head: {
    title: 'Register',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {
        hid: 'register page',
        name: 'register page',
        content: 'my custom register page'
      }
    ],
  },
}
</script>
