<template>
  <div>
    <v-btn color="primary" @click="handleClicked"> Logout </v-btn>
    <pre>
      {{ this.$auth.user }}
    </pre>
  </div>
</template>

<script>
export default {
  methods: {
    handleClicked() {
      this.$auth.logout()
    },
  },
}
</script>

<style lang="scss" scoped></style>
