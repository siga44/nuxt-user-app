<template>
  <div>
    <v-card width="500" class="px-20 py-5">
      <v-card-title>Authorization</v-card-title>
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
        class="d-flex flex-column justify-center align-center"
        @submit.prevent="onSubmit"
      >
        <v-text-field
          class="input-field"
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>

        <v-text-field
          class="input-field"
          type="password"
          v-model="password"
          :rules="passwordRules"
          label="Password"
          required
        ></v-text-field>
        <v-btn
          color="primary"
          class="mt-5"
          type="submit"
        >
          Login
        </v-btn>
      </v-form>
    </v-card>
    <v-snackbar
      v-model="snackbar"
      transition="scroll-y-transition"
    >
      Incorrect email or password!
      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          <v-icon class="mr-1">mdi-close</v-icon>Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valid: true,
      snackbar: false,
      email: '',
      password: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      passwordRules: [
        v => v.length >= 6 || 'Password length must be at least 6 symbols'
      ]
    }
  },

  computed: {
    users() {
      return this.$store.getters["users/loginUsers"]
    }
  },

  methods: {
    onSubmit() {
      if (this.$refs.form.validate()) {
        const user = this.users.find(u => u.email === this.email && u.password === this.password) || null
        if (user) {
          this.$store.dispatch('login', user.id)
          this.$router.push(`/user/${user.id}`)
          return
        }
        this.snackbar = true
      }
    }
  },
}
</script>

<style>
.input-field {
  width: 75%;
}

</style>
