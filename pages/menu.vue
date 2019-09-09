<template>
  <div>
    <v-container class="menu-content-wrapper">
      <v-row align="center" class="menu-content-wrapper px-3">
        <v-col cols="2" sm="2">
          <v-img src="/image/menu/logo-danone.png" />
        </v-col>
        <v-col cols="10" sm="10">
          <span class="title text-color">
            Welcome, {{ user.firstName + ' ' + user.lastName }}
          </span>
        </v-col>
      </v-row>
      <v-row class="menu-content-wrapper px-3" justify="center">
        <v-col cols="5" sm="5">
          <v-card to="/inspection" class="menu-card-rounded">
            <v-card-text class="py-0">
              <v-row justify="center">
                <v-col cols="8" sm="8" class="mt-5">
                  <v-img src="/image/menu/bib.png" />
                </v-col>
                <v-col cols="12" sm="12" class="text-center">
                  <span class="headline font-weight-bold text-color mr-3">
                    BiB
                  </span>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="5" sm="5">
          <v-card to="/inspection" class="menu-card-rounded">
            <v-card-text class="py-0">
              <v-row justify="center">
                <v-col cols="8" sm="8">
                  <v-img src="/image/menu/engineering.png" />
                </v-col>
                <v-col cols="12" sm="12" class="text-center">
                  <span class="headline font-weight-bold text-color mr-3">
                    Engineering
                  </span>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="5" sm="5">
          <v-card to="/inspection" class="menu-card-rounded">
            <v-card-text class="py-0">
              <v-row justify="center">
                <v-col cols="9" sm="9" class="mt-3">
                  <v-img src="/image/menu/line-tfd.png" />
                </v-col>
                <v-col cols="12" sm="12" class="text-center">
                  <span class="headline font-weight-bold text-color mr-3">
                    Line TFD 160
                  </span>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="5" sm="5">
          <v-card class="menu-card-rounded">
            <v-card-text class="py-0">
              <v-row justify="center">
                <v-col cols="7" sm="7" class="mt-5">
                  <v-img src="/image/menu/wh.png" />
                </v-col>
                <v-col cols="12" sm="12" class="text-center">
                  <span class="headline font-weight-bold text-color mr-3">
                    WH Production
                  </span>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-img src="/image/menu/bg.png" class="image-bg-wrapper" />
    <v-img src="/image/menu/bg-bottom.png" class="image-bg-bottom-wrapper" />
  </div>
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
.image-bg-wrapper {
  z-index: 1;
  bottom: 0;
  position: fixed;
}
.menu-content-wrapper {
  z-index: 3;
  position: relative;
}
.image-bg-bottom-wrapper {
  bottom: 5vh;
  right: 3vw;
  z-index: 2;
  width: 80vw;
  position: fixed;
}
.menu-card-rounded {
  border-radius: 15px !important;
  height: 20vh;
}
.text-color {
  color: #28c3ff;
}
</style>
