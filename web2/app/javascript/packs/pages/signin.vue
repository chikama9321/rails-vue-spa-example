<template>
  <section>
    <h1>signin</h1>
    <input type="email" placeholder="example@hoge.com" v-model="email">
    <input type="password" placeholder="password" v-model="password">
    <button type="button" @click="signin">SignIn</button>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signin() {
      axios.post('/auth/sign_in', {email: this.email, password: this.password})
        .then(response => response.headers)
        .then(headers => this.$store.dispatch('authModule/signin', {
          accessToken: headers['access-token'], 
          client: headers.client, 
          uid: headers.uid
        }))
        .then(() => this.$router.push('mypage'))
    }
  }
}
</script>

<style scoped>
</style>
