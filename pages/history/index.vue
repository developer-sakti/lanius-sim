<template>
  <v-container>
    <!-- <v-row justify="center" class="pb-5">
      <span
        class="display-1 font=weight-bold"
        style="text-decoration:underline"
      >
        SIM 1 FORM
      </span>
    </v-row> -->
    <v-row class="mt-5 pt-5">
      <v-col cols="12" xs="12" sm="12" md="12">
        <v-list>
          <v-list-group>
            <template slot="activator">
              <v-list-item-content>
                <span class="headline blue--text">
                  CHECKLIST CLEARENCE SMALL SACHET
                </span>
              </v-list-item-content>
            </template>
            <v-list-item v-for="item in 3" :key="item">
              <v-list-item-content class="blue--text">
                <v-row align="center">
                  <v-col cols="12" sm="9">1212131313</v-col>
                  <v-col cols="12" sm="1">
                    <v-btn icon color="primary">
                      <v-icon dark size="40">zoom_in</v-icon>
                    </v-btn>
                  </v-col>
                  <v-col cols="12" sm="1">
                    <v-btn icon color="primary">
                      <v-icon dark size="35">mdi-cloud-download-outline</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="12">
        <v-list>
          <v-list-group>
            <template slot="activator">
              <v-list-item-content>
                <span class="headline blue--text">
                  FILLING SACHET MONITORING
                </span>
              </v-list-item-content>
            </template>
            <v-list-item v-for="item in 3" :key="item">
              <v-list-item-content class="blue--text">
                <v-row>
                  <v-col cols="12" sm="9">1212131313</v-col>
                  <v-col cols="12" sm="1">
                    <v-btn icon color="primary">
                      <v-icon dark size="40">zoom_in</v-icon>
                    </v-btn>
                  </v-col>
                  <v-col cols="12" sm="1">
                    <v-btn flat small icon color="primary">
                      <v-icon dark size="35">mdi-cloud-download-outline</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="12">
        <v-list>
          <v-list-group>
            <template slot="activator">
              <v-list-item-content>
                <span class="headline blue--text">
                  PACKING SACHET MONITORING
                </span>
              </v-list-item-content>
            </template>
            <v-list-item v-for="item in 3" :key="item">
              <v-list-item-content class="blue--text">
                <v-row>
                  <v-col cols="12" sm="9">1212131313</v-col>
                  <v-col cols="12" sm="1">
                    <v-btn icon color="primary">
                      <v-icon dark size="40">zoom_in</v-icon>
                    </v-btn>
                  </v-col>
                  <v-col cols="12" sm="1">
                    <v-btn flat small icon color="primary">
                      <v-icon dark size="35">mdi-cloud-download-outline</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-col>
      <!-- <v-col cols="12" xs="12" sm="12" md="12">
        <v-list>
          <v-list-group>
            <template slot="activator">
              <v-list-item-title class="headline blue--text">
                KONDISI OPERASIONAL
              </v-list-item-title>
            </template>
            <v-list-item v-for="item in 3" :key="item">
              <v-list-item-content class="blue--text">
                <v-row>
                  <v-col cols="12" sm="9">1212131313</v-col>
                  <v-col cols="12" sm="1">
                    <v-btn icon color="primary">
                      <v-icon dark size="35">zoom_in</v-icon>
                    </v-btn>
                  </v-col>
                  <v-col cols="12" sm="1">
                    <v-btn icon color="primary">
                      <v-icon dark size="30">mdi-cloud-download-outline</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-col> -->
    </v-row>
  </v-container>
</template>
<script>
import user from '~/mixins/user'
export default {
  mixins: [user],
  middleware: ['user'],
  data() {
    return {}
  }
}
</script>
