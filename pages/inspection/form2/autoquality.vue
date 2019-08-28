<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="12" class="text-center title primary--text">
        Pemeriksaan Autoquality
      </v-col>
      <v-col cols="10" sm="10">
        <v-card>
          <v-tabs
            v-model="tabs"
            dark
            background-color="primary darken-3"
            show-arrows
          >
            <v-tabs-slider color="teal lighten-3"></v-tabs-slider>
            <v-tab v-for="i in 8" :key="i" :href="'#tab-' + i">
              <span class="text-none subtitle-1">{{ i }}</span>
            </v-tab>
          </v-tabs>
        </v-card>
      </v-col>
      <v-col cols="10" sm="10">
        <v-tabs-items v-model="tabs" class="transparent">
          <v-tab-item v-for="i in 8" :key="i" :value="'tab-' + i">
            <v-row>
              <v-col cols="12" sm="6" class="py-0">
                <span class="primary--text subtitle-1 font-weight-medium">
                  Kondisi Visual Sealing
                </span>
                <br />
                <span class="caption black--text">
                  (Kondisi seal rapat)
                </span>
              </v-col>
              <v-col cols="12" sm="6" class="py-0">
                <v-select
                  outlined
                  :items="['Ya', 'Tidak']"
                  placeholder="Pilih"
                />
              </v-col>
              <v-col cols="12" sm="6" class="py-0">
                <span class="primary--text subtitle-1 font-weight-medium">
                  Tes Kebocoran Vertical Seal
                </span>
                <br />
                <span class="caption black--text">
                  (Tidak bocor di 35cmHg)
                </span>
              </v-col>
              <v-col cols="12" sm="6" class="py-0">
                <v-select
                  outlined
                  :items="['Ya', 'Tidak']"
                  placeholder="Pilih"
                />
              </v-col>
              <v-col cols="12" sm="6" class="py-0">
                <span class="primary--text subtitle-1 font-weight-medium">
                  Tes Kebocoran Jaw Seal
                </span>
                <br />
                <span class="caption black--text">
                  (Tidak bocor di 35cmHg)
                </span>
              </v-col>
              <v-col cols="12" sm="6" class="py-0">
                <v-select
                  outlined
                  :items="['Ya', 'Tidak']"
                  placeholder="Pilih"
                />
              </v-col>
              <v-col cols="12" sm="6" class="py-0">
                <span class="primary--text subtitle-1 font-weight-medium">
                  Kode
                </span>
                <br />
                <span class="caption black--text">
                  (Lihat ABC Standard)
                </span>
              </v-col>
              <v-col cols="12" sm="2" class="py-0">
                <v-text-field outlined />
              </v-col>
              <v-col cols="12" sm="4" class="py-0">
                <v-radio-group v-model="row" row>
                  <v-radio label="A" value="A"></v-radio>
                  <v-radio label="B" value="B"></v-radio>
                  <v-radio label="C" value="C"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12" sm="6" class="py-0">
                <span class="primary--text subtitle-1 font-weight-medium">
                  %O2 Level
                </span>
                <br />
                <span class="caption black--text">
                  (Max 2%)
                </span>
              </v-col>
              <v-col cols="12" sm="2" class="py-0">
                <v-text-field outlined />
              </v-col>
              <v-col cols="12" sm="4" class="py-0">
                <v-radio-group v-model="row" row>
                  <v-radio label="A" value="A"></v-radio>
                  <v-radio label="B" value="B"></v-radio>
                  <v-radio label="C" value="C"></v-radio>
                </v-radio-group>
              </v-col>
            </v-row>
          </v-tab-item>
        </v-tabs-items>
      </v-col>
      <v-col cols="10" sm="5" class="pt-0">
        <v-btn block large class="grey lighten-1" dark @click="discard()">
          discard
        </v-btn>
      </v-col>
      <v-col cols="10" sm="5" class="pt-0">
        <v-btn
          block
          large
          color="primary"
          @click="tabs === 'tab-8' ? save() : next()"
        >
          {{ tabs === 'tab-8' ? 'submit' : 'next' }}
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      timePicker: false,
      tabs: null
    }
  },
  methods: {
    next() {
      const temp = this.tabs.split('-')
      const active = parseInt(temp[1]) <= 7 ? parseInt(temp[1]) + 1 : 1
      this.tabs = 'tab-' + active
    },
    save() {},
    discard() {
      this.$router.push('/inspection')
    }
  }
}
</script>
