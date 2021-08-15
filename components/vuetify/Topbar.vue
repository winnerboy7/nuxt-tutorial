<template>
  <div>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="toggleDrawer" />
      <v-btn icon @click.stop="toggleMiniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn icon @click.stop="toggleClipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn icon @click.stop="toggleFixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn icon @click.stop="toggleRightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Vuetify.js',
    }
  },

  computed: {
    clipped: {
      get() {
        return this.$nuxt.$store.state.clipped
      },
      set(val) {
        console.log('OLD CLIPPED VALUE', this.$nuxt.$store.state.clipped)
        console.log('NEW CLIPPED VALUE', val)
        this.$store.commit('SET_CLIPPED', val)
        console.log('SET VAL STATE', this.$nuxt.$store.state.clippedawer)
      },
    },
    miniVariant: {
      get() {
        return this.$nuxt.$store.state.miniVariant
      },
      set(val) {
        console.log('OLD MINI VARIANT VALUE', this.$nuxt.$store.state.miniVariant)
        console.log('NEW MINI VARIANT VALUE', val)
        this.$store.commit('SET_MINI_VARIANT', val)
        console.log('SET VAL STATE', this.$nuxt.$store.state.miniVariant)
      },
    },
  },

  methods: {
    toggleDrawer() {
      this.$store.commit('SET_DRAWER', !this.$store.state.drawer)
    },
    toggleFixed() {
      this.$store.commit('SET_FIXED', !this.$store.state.fixed)
    },
    toggleRightDrawer() {
      this.$store.commit('SET_RIGHT_DRAWER', !this.$store.state.rightDrawer)
    },
    toggleClipped() {
      this.$store.commit('SET_CLIPPED', !this.$store.state.clipped)
    },
    toggleMiniVariant() {
      this.$store.commit('SET_MINI_VARIANT', !this.$store.state.miniVariant)
    },
  },
}
</script>

<style lang="scss" scoped></style>
