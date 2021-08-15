<template lang="html">
  <div>
    <LoginForm
      @loginSubmitted="handleLoginSubmitted"
      @eventFoo="doFuncFoo"
    ></LoginForm>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm'
export default {
  components: {
    LoginForm,
  },
  // layout: 'login',
  methods: {
    doFuncFoo(value) {
      console.log('Master', value)
    },

    async handleLoginSubmitted(user) {
      console.log('User: ', user.username, user.password)
      try {
        const response = await this.$auth.loginWith('local', {
          data: {
            username: user.username,
            password: user.password,
          },
        })
        console.log(response)
        if (response.data.success) {
          this.$router.replace({ name: 'users' })
        }
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>

<style lang="css" scoped></style>
