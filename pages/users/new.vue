<template lang="html">
  <div>
    NEW USERS
    <v-text-field v-model="form.username" label="Username"></v-text-field>
    <v-text-field v-model="form.password" label="Password"></v-text-field>
    <v-textarea v-model="form.name" label="Name"></v-textarea>
    <v-btn @click="handleCreateClicked"> Create </v-btn>
  </div>
</template>

<script>
import * as UsersApi from '@/utils/usersApi'
export default {
  data() {
    return {
      form: {
        username: '',
        password: '',
        name: '',
      },
    }
  },
  methods: {
    async handleCreateClicked() {
      if (this.form.username.length === 0) {
        return
      }
      const response = await UsersApi.create(this.form)
      console.log('RESPONSE', response)
      this.$router.replace({
        name: 'users-id',
        params: {
          id: response.data._id,
        },
      })
    },
  },
}
</script>

<style lang="css" scoped></style>
