<template>
  <v-app dark>
    <v-app-bar
      app
      color="normal"
      dark
    >
      <v-toolbar-title>NuxtJS User App</v-toolbar-title>
      <v-spacer></v-spacer>
      <div v-if="!isAuth">
        <v-btn nuxt to="/login" class="mr-2" color="primary">
          <v-icon class="mr-2">mdi-login</v-icon>Login
        </v-btn>
        <v-btn nuxt to="/register" color="normal">
          <v-icon class="mr-2">mdi-account-plus</v-icon>Register
        </v-btn>
      </div>
      <div v-else>
        <v-btn nuxt to="/login" color="normal" @click="logout">
          <v-icon>mdi-logout</v-icon>Logout
        </v-btn>
      </div>

    </v-app-bar>

    <v-main>
      <nuxt />
    </v-main>

  </v-app>
</template>

<script>
export default {
  computed: {
    isAuth() {
      return this.$store.getters.isAuth
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
      this.$router.push('/login')
    }
  }
}
</script>

<style>
html {
  overflow-y: hidden;
}
</style>
