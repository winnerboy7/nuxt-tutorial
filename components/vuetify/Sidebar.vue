<template>
  <v-navigation-drawer
    v-model="drawer"
    :mini-variant="miniVariant"
    :clipped="clipped"
    fixed
    app
  >
    <v-list>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        router
        exact
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import menu from '@/static/menu'

export default {
  data() {
    return {
      items: menu,
    }
  },

  computed: {
    drawer: {
      get() {
        return this.$nuxt.$store.state.drawer
      },
      set(val) {
        console.log('OLD DRAWER VALUE', this.$nuxt.$store.state.drawer)
        console.log('NEW DRAWER VALUE', val)
        this.$store.commit('SET_DRAWER', val)
        console.log('SET VAL STATE', this.$nuxt.$store.state.drawer)
      },
    },
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
        console.log(
          'OLD MINI VARIANT VALUE',
          this.$nuxt.$store.state.miniVariant
        )
        console.log('NEW MINI VARIANT VALUE', val)
        this.$store.commit('SET_MINI_VARIANT', val)
        console.log('SET VAL STATE', this.$nuxt.$store.state.miniVariant)
      },
    },
  },
}
</script>

<style lang="scss" scoped></style>
