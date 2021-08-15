<template>
  <div>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      right: true,
    }
  },

  computed: {
    rightDrawer: {
      get() {
        return this.$nuxt.$store.state.rightDrawer
      },
      set(val) {
        console.log('OLD RIGHT DRAWER VALUE', this.$nuxt.$store.state.rightDrawer)
        console.log('NEW RIGHT DRAWER VALUE', val)
        this.$store.commit('SET_RIGHT_DRAWER', val)
        console.log('SET VAL STATE', this.$nuxt.$store.state.rightDrawer)
      },
    },
  },
}
</script>

<style lang="scss" scoped></style>
