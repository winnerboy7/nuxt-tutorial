<template lang="html">
  <div>
    <div v-if="user">
      Edit USER
      <v-text-field v-model="user.username" label="Title"></v-text-field>
      <v-textarea v-model="user.name" label="Body"></v-textarea>
      <v-btn @click="handleSaveClicked"> Save </v-btn>
    </div>
    <pre>
      {{ user }}
    </pre>
  </div>
</template>

<script>
import * as UsersApi from '@/utils/usersApi'
export default {
  data() {
    return {
      user: null
    }
  },
  async mounted() {
    console.log('THIS.$ROUTE.PARAMS.ID', this.$route.params.id)
    const response = await UsersApi.show(this.$route.params.id)
    console.log('RESPONSE', response)
    this.user = response.data
  },
  methods: {
    async handleSaveClicked() {
      console.log('save clicked', this.user)
      const response = await UsersApi.update(
        this.user.id,
        this.user.username,
        this.user.name
      )
      console.log('RESPONSE', response)
      this.$router.replace({ name: 'users-id', params: { id: this.user.id } })
    }
  }
}
</script>

<style lang="css" scoped></style>