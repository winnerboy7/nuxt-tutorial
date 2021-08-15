<template lang="html">
  <div>
    name: 'users' <br />
    params: {{ JSON.stringify($route.params) }} <br />
    query: {{ JSON.stringify($route.query) }} <br />
    hash: {{ JSON.stringify($route.hash) }} <br />
    <v-btn v-for="i in [1, 2, 3, 4, 5]" :key="i" @click="handleGoToClick(i)">
      Go to user ID {{ i }}
    </v-btn>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log('$route.params', this.$route.params)
    console.log('$route.query', this.$route.query)
    console.log('$route.hash', this.$route.hash)
  },
  methods: {
    handleGoToClick(userId) {
      console.log(userId)
      this.$router.push({
        name: 'users-id',
        params: {
          id: userId
        }
      })
    }
  }
}
</script>

<style lang="css" scoped></style>