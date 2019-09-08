<template>
  <v-app>
    <v-content>
      <nuxt />
    </v-content>
    <v-bottom-navigation v-model="bottomNav" height="80" color="primary" app>
      <v-spacer />
      <v-btn to="/inspection">
        <span class="title font-weight-regular">Inspection</span>
        <v-icon size="35">edit</v-icon>
      </v-btn>
      <v-spacer />
      <v-btn to="/floor">
        <span class="title font-weight-regular">Floor Report</span>
        <v-icon size="35">mdi-clipboard-text</v-icon>
      </v-btn>
      <v-spacer />
      <v-btn to="/history">
        <span class="title font-weight-regular">History Form</span>
        <v-icon size="35">history</v-icon>
      </v-btn>
      <v-spacer />
      <v-btn to="/profile">
        <span class="title font-weight-regular">{{
          user === null ? 'Profile' : user.firstName
        }}</span>
        <v-icon size="35">person</v-icon>
      </v-btn>
      <v-spacer />
    </v-bottom-navigation>
  </v-app>
</template>
<script>
import user from '~/mixins/user'
export default {
  mixins: [user],
  data() {
    return {
      bottomNav: 'inspection'
    }
  }
}
</script>
