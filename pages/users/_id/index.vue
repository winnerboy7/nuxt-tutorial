<template lang="html">
  <div>
    <div v-if="user">
      <v-btn
        :to="{ name: 'users-id-edit', params: { id: $route.params.id } }"
      >
        Edit
      </v-btn>
      <v-btn color="error" @click="handleDestroyClicked"> Destroy </v-btn>
      <h1>
        {{ user.username }}
      </h1>
      <p>{{ user.name }}</p>
      <pre>
        {{ user }}
      </pre>
    </div>
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
    async handleDestroyClicked() {
      // const response = await UsersApi.destroy(this.$route.params.id)
      const response = await UsersApi.destroy(this.user.id)
      console.log('RESPONSE', response)
      this.$router.replace({ name: 'users' })
    }
  }
}
</script>

<style lang="css" scoped></style>