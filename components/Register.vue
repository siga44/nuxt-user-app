<template>
  <v-card width="500" class="px-20 py-5">
    <v-card-title>Registration</v-card-title>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
      class="d-flex flex-column justify-center align-center"
      @submit.prevent="onSubmit({name, email, password})"
    >
      <v-text-field
        class="input-field"
        v-model="name"
        :counter="15"
        :rules="nameRules"
        label="Name"
        required
      ></v-text-field>

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
        Register
      </v-btn>
    </v-form>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      valid: true,
      email: '',
      password: '',
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 15) || 'Name must be less than 15 characters',

      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        v => !this.users.find(u => u.email === v) || 'E-mail must be unique'
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => v.length >= 6 || 'Password length must be at least 6 symbols'
      ]
    }
  },

  computed: {
    users() {
      return this.$store.getters["users/users"]
    }
  },

  methods: {
    onSubmit(userInfo) {
      if (this.$refs.form.validate()) {
        const user = {
          id: ''+Date.now(),
          avatar: 'bgs-group.jpg',
          ...userInfo
        }
        this.$store.dispatch('users/register', user)
        this.$router.push('/login')
      }
    },
  },
}
</script>
