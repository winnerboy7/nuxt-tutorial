<template>
  <div>
    <div>
      <v-text-field v-model="query" label="Search"></v-text-field>
      <v-btn color="success" class="mr-4" @click="handleSearchManga">
        Seacrch
      </v-btn>
    </div>

    <v-divider class="mt-2 mb-2"></v-divider>
    <div class="d-flex flex-wrap">
      <v-card
        v-for="manga in results"
        :key="manga.mal_id"
        class="ma-2"
        max-width="400"
        outlined
        @click="handleMangaClick(manga)"
      >
        <v-list-item three-line>
          <v-list-item-content>
            <div class="text-overline mb-4">
              Publishing: {{ manga.publishing }}
            </div>
            <v-list-item-title class="text-h5 mb-1">
              {{ manga.title }}
            </v-list-item-title>
            <v-list-item-subtitle>{{ manga.synopsis }}</v-list-item-subtitle>
          </v-list-item-content>

          <img
            :src="manga.image_url"
            alt=""
            :style="{ width: '80px', marginTop: '10px' }"
          />
        </v-list-item>
      </v-card>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      query: '',
      results: [],
    }
  },
  methods: {
    getJson() {
      return new Promise(function(resolve) {
        setTimeout(() => {
          resolve({ a:10 })
        }, 2000)
      })
    },

    async handleSearchManga() {
      // asynce await 
      console.log('start')

      const json = await this.getJson()
      console.log('json', json)

      // this.getJson().then((json) => {
      //   console.log('inside getJson', json)
      // })

      const url = `https://api.jikan.moe/v3/search/manga?q=${this.query}&page=1`
      console.log('url: ', url)
      const response = await axios.get(url)
      console.log('response', response)
      this.results = response.data.results

      // axios.get(url).then((res) => {
      //   console.log('response', response)
      //   this.results = res.data.results
      // })

      console.log('done')
    },
    handleMangaClick(manga) {
      console.log('MANGA', manga)
      window.location = manga.url
    },
  },
}
</script>

<style lang="scss" scoped></style>
