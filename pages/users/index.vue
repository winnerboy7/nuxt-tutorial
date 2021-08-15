<template lang="html">
  <div>
    Users !!!!! Required login
    <v-btn :to="{ name: 'users-new' }"> New User </v-btn>
    <!-- <pre>
      {{ users }}
    </pre> -->
    <v-card
      v-for="user in users"
      :key="user.id"
      class="mx-auto"
      max-width="344"
      style="margin-top: 10px;"
    >
      <v-card-text>
        <p class="display-1 text--primary">
          {{ user.username }}
        </p>
        <div class="text--primary">user name: {{ user.name }}</div>
      </v-card-text>
      <v-card-actions>
        <v-btn
          :to="{ name: 'users-id', params: { id: user._id } }"
          text
          color="deep-purple accent-4"
        >
          Learn More
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import * as UsersApi from '~/utils/usersApi'
export default {
  middleware: 'auth',
  data() {
    return {
      users: []
    }
  },
  async mounted() {
    const response = await UsersApi.index()
    console.log('RESPONSE', response)
    this.users = response.data
  }
}
</script>

<style lang="css" scoped></style>