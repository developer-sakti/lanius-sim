<template>
  <v-app>
    <v-app-bar flat color="grey lighten-4" fixed app height="180" class="pr-0">
      <v-avatar size="100" tile class="ml-3">
        <v-img src="/logo.png" width="80" height="150" />
      </v-avatar>
      <span class="primary--text font-weight-bold ml-5 headline">
        NUTRICIA SENTUL
      </span>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-bottom-navigation v-model="bottomNav" height="80" color="primary" app>
      <v-spacer />
      <v-btn to="/">
        <span class="title font-weight-regular">Inspection</span>
        <v-icon size="35">edit</v-icon>
      </v-btn>
      <v-spacer />
      <v-btn value="floor">
        <span class="title font-weight-regular">Floor Report</span>
        <v-icon size="35">mdi-clipboard-text</v-icon>
      </v-btn>
      <v-spacer />
      <v-btn value="history">
        <span class="title font-weight-regular">History Form</span>
        <v-icon size="35">history</v-icon>
      </v-btn>
      <v-spacer />
      <v-btn to="/profile">
        <span class="title font-weight-regular">Bahrul</span>
        <v-icon size="35">person</v-icon>
      </v-btn>
      <v-spacer />
    </v-bottom-navigation>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      bottomNav: 'recent'
    }
  }
}
</script>
