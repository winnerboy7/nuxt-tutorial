<template lang="html">
  <div>
    name: 'posts-search' <br />
    params: {{ JSON.stringify($route.params) }} <br />
    query: {{ JSON.stringify($route.query) }} <br />
    hash: {{ JSON.stringify($route.hash) }} <br />
    <v-text-field v-model="query" label="Search keyword"></v-text-field>
    <v-btn text class="primary" small @click="handleSearchClicked">Search</v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: ''
    }
  },
  mounted() {
    console.log('$route.params', this.$route.params)
    console.log('$route.query', this.$route.query)
    console.log('$route.hash', this.$route.hash)
  },
  methods: {
    handleSearchClicked() {
      console.log('clicked with keyword', this.query)
      // this.$router.replace({
      //   name: 'posts-search',
      //   query: {
      //     q: this.query
      //   }
      // })
      this.$router.push({
        name: 'posts-search',
        query: {
          q: this.query
        }
      })
    }
  }
}
</script>

<style lang="css" scoped></style>