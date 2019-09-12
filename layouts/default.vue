<template>
  <v-app>
    <v-app-bar flat fixed app height="150" class="px-0">
      <v-img src="/image/layout/header.png" class="top-header-toolbar" />
      <div class="top-content-toolbar">
        <v-row>
          <v-col cols="3" sm="3">
            <v-avatar size="120" tile class="ml-3">
              <v-img
                src="/image/menu/logo-danone.png"
                width="80"
                height="120"
              />
            </v-avatar>
          </v-col>
          <v-col cols="9" sm="9" class="mt-5">
            <v-row>
              <v-col cols="12" sm="12" class="py-0">
                <span class="white--text font-weight-bold title">
                  E-SIM 1 BiB AREA :
                </span>
              </v-col>
              <v-col cols="12" sm="12" class="py-0">
                <v-card class="card-header-rounded">
                  <v-card-text class="py-0">
                    <span class="font-weight-bold title">
                      SUGIZINDO SENTUL
                    </span>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </div>
    </v-app-bar>
    <v-content>
      <nuxt />
    </v-content>
    <v-bottom-navigation
      v-model="bottomNav"
      height="80"
      color="white"
      app
      light
      class="menu-rounded"
    >
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
<style>
.card-header-rounded {
  border-radius: 15px;
}
.top-header-toolbar {
  z-index: 1;
  top: 0;
  left: 0;
  position: fixed;
}
.top-content-toolbar {
  z-index: 2;
}
.menu-rounded {
  z-index: 99;
  position: fixed !important;
  bottom: 2vh !important;
  width: 80vw !important;
  border-radius: 10px;
  margin-left: 10vw;
  background-color: #1fc8db;
  /* background-image: linear-gradient(90deg, #00b8d4 10%, #e0f7fa 85%); */
  background-image: linear-gradient(90deg, #29b6f6 10%, #1e88e5 85%);
}
</style>
