<template>
  <v-app dark>
    <Sidebar></Sidebar>
    <Topbar></Topbar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <RightSidebar></RightSidebar>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Sidebar from '@/components/vuetify/Sidebar'
import Topbar from '@/components/vuetify/Topbar'
import RightSidebar from '@/components/vuetify/RightSidebar'
import Footer from '@/components/vuetify/Footer'

export default {
  components: {
    Sidebar,
    Topbar,
    RightSidebar,
    Footer,
  },
}
</script>
