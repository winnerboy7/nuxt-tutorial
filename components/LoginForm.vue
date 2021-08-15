<template lang="html">
  <v-card class="overflow-hidden" color="purple lighten-1" dark>
    <v-toolbar flat color="purple">
      <v-icon>mdi-account</v-icon>
      <v-toolbar-title class="font-weight-light">
        User Login
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-card-text>
      <v-text-field
        v-model="user.username"
        :disabled="!isEditing"
        color="white"
        label="Username"
      ></v-text-field>
      <v-text-field
        v-model="user.password"
        :disabled="!isEditing"
        color="white"
        label="password"
      ></v-text-field>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="success" @click="handleClicked"> Login </v-btn>
      <v-btn color="primary" @click="handleClickedFoo"> Login </v-btn>
    </v-card-actions>
    <v-snackbar v-model="hasSaved" :timeout="2000" absolute bottom left>
      Your profile has been logined
    </v-snackbar>
  </v-card>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      hasSaved: false,
      isEditing: true,
      user: {
        username: "admin",
        password: "admin",
      }
    }
  },

  methods: {
    handleClicked() {
      console.log('Components ', this.user.username, this.user.password)
      this.$emit('loginSubmitted', this.user)
    },
    handleClickedFoo() {
      this.$emit('eventFoo', this.user)
    }
  },
}
</script>

<style lang="css" scoped></style>
