<template>
  <v-container class="content-wrapper d-flex justify-center align-center">
    <Login v-if="!isAuth"/>
    <h3 v-else>You are logged in already</h3>
  </v-container>
</template>

<script>
import Login from "~/components/Login"

export default {
  components: {
    Login
  },
  computed: {
    isAuth() {
      return this.$store.getters.isAuth
    }
  },
  head: {
    title: 'Login',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {
        hid: 'login page',
        name: 'login page',
        content: 'my custom login page'
      }
    ],
  }
}
</script>

<style>
.content-wrapper {
  height: 100vh;
}
</style>
