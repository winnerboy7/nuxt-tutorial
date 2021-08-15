<template>
  <div>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </div>
</template>

<script>
export default {
  computed: {
    fixed: {
      get() {
        return this.$nuxt.$store.state.fixed
      },
      set(val) {
        console.log('OLD FIXED VALUE', this.$nuxt.$store.state.fixed)
        console.log('NEW FIXED VALUE', val)
        this.$store.commit('SET_FIXED', val)
        console.log('SET VAL STATE', this.$nuxt.$store.state.fixed)
      },
    },
  },
}
</script>

<style lang="scss" scoped></style>
