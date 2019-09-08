<template>
  <v-container>
    <v-row class="px-3" align="center">
      <v-col cols="1" sm="1">
        <v-img src="/logo.png" width="60" height="60" />
      </v-col>
      <v-col cols="10" sm="10">
        <span class="title text-color">
          Hello, {{ user.firstName + ' ' + user.lastName }}
        </span>
      </v-col>
    </v-row>
    <v-row class="px-3">
      <v-col cols="6" sm="6">
        <v-card color="#E0F7FA" dark elevation="1" to="/inspection">
          <v-card-text>
            <v-img
              src="/image/Picture4.png"
              height="10vh"
              width="20vw"
              class="justify-center"
            />
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <span class="headline font-weight-bold text-color mr-3">BiB</span>
          </v-card-actions>
        </v-card>
        <v-card color="#FF9E80" dark class="mt-5" elevation="1">
          <v-card-text>
            <v-img src="/image/Picture4.png" height="14vh" width="28vw" />
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <span class="headline font-weight-bold text-color mr-3">
              Line TFD 160
            </span>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="6" sm="6">
        <v-card color="#8C9EFF" dark elevation="1">
          <v-card-text>
            <v-img src="/image/spare.png" height="14vh" width="21vw" />
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <span class="headline font-weight-bold text-color mr-3">
              Engineering
            </span>
          </v-card-actions>
        </v-card>
        <v-card color="#00B8D4" dark class="mt-5" elevation="1">
          <v-card-text>
            <v-img src="/image/warehouse.png" height="14vh" width="30vw" />
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <span class="headline text-color font-weight-bold mt-3">
              WH Production
            </span>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-img src="/image/Picture5.png" class="image-menu-wrapper" />
  </v-container>
</template>
<script>
import core from '~/mixins/core'
export default {
  mixins: [core],
  layout: 'none',
  middleware: ['user']
}
</script>
<style>
.image-menu-wrapper {
  bottom: 3vh;
  position: fixed;
}
.text-color {
  color: #1565c0;
}
</style>
