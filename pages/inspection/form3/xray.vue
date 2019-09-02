<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="10" sm="10" class="text-center title primary--text py-0">
        PACKING SACHET MONITORING
      </v-col>
      <v-col
        cols="10"
        sm="10"
        class="text-center subtitle-1 primary--text py-0 font-weight-bold"
      >
        <span>Pemeriksaan X-Ray</span>
        <span class="grey--text"> (Di isi setiap 1 jam)</span>
      </v-col>
    </v-row>
    <client-only>
      <v-form ref="thirdFormXray" lazy-validation>
        <v-row justify="center" align="center">
          <v-col cols="10" sm="10">
            <v-card>
              <v-tabs
                v-model="tabs"
                dark
                background-color="primary darken-3"
                show-arrows
              >
                <v-tabs-slider color="teal lighten-3"></v-tabs-slider>
                <v-tab
                  v-for="(item, index) in arrayForm"
                  :key="index"
                  :href="'#tab-' + index"
                >
                  <span class="text-none subtitle-1">{{
                    parseInt(index) + 1
                  }}</span>
                </v-tab>
              </v-tabs>
            </v-card>
          </v-col>
          <v-col cols="10" sm="10" class="pb-0">
            <v-tabs-items v-model="tabs" class="transparent">
              <v-tab-item
                v-for="(item, index) in arrayForm"
                :key="index"
                :value="'tab-' + index"
              >
                <v-row align="center">
                  <v-col cols="10" sm="6" class="pb-0">
                    <span class="primary--text subtitle-1 font-weight-medium">
                      Jam Pemeriksaan
                    </span>
                    <br />
                    <span class="caption black--text">
                      (Tidak bocor di 35cmHg)
                    </span>
                  </v-col>
                  <v-col cols="10" sm="6" class="pb-0">
                    <v-menu
                      ref="inputTime"
                      v-model="timePicker"
                      :close-on-content-click="false"
                      transition="scale-transition"
                      offset-y
                      full-width
                      min-width="290px"
                    >
                      <template v-slot:activator="{ on }">
                        <v-text-field
                          v-model="item.time"
                          :rules="[v => v !== null || 'This field is required']"
                          required
                          outlined
                          append-icon="mdi-clock-outline"
                          readonly
                          v-on="on"
                        />
                      </template>
                      <v-time-picker
                        v-if="timePicker"
                        v-model="item.time"
                        reactive
                        format="24hr"
                        use-seconds
                        @click:seconds="$refs.inputTime.save(time)"
                      />
                    </v-menu>
                  </v-col>
                  <v-col cols="10" sm="6" class="py-0">
                    <span class="primary--text subtitle-1 font-weight-medium">
                      Counter Jumlah Sachet melewati X-Ray
                    </span>
                    <br />
                    <span class="caption black--text">
                      (reset setiap 2 jam)
                    </span>
                  </v-col>
                  <v-col cols="10" sm="6" class="py-0">
                    <v-text-field
                      v-model="item.counter_total_sachet"
                      :rules="[v => v !== null || 'This field is required']"
                      required
                      outlined
                    />
                  </v-col>
                  <v-col cols="10" sm="6" class="py-0">
                    <span class="primary--text subtitle-1 font-weight-medium">
                      Carton box no
                    </span>
                  </v-col>
                  <v-col cols="10" sm="6" class="py-0">
                    <v-text-field
                      v-model="item.carton_box_no"
                      :rules="[v => v !== null || 'This field is required']"
                      required
                      outlined
                    />
                  </v-col>
                  <v-col cols="10" sm="6" class="py-0">
                    <span class="primary--text subtitle-1 font-weight-medium">
                      Jumlah Sachet False rejection
                    </span>
                    <br />
                    <span class="caption black--text">
                      (Catat jumlah produk yang ter-reject namun saat disieve
                      tidak ditemukan FM)
                    </span>
                  </v-col>
                  <v-col cols="10" sm="6" class="py-0">
                    <v-text-field
                      v-model="item.total_sachet_false_rejection"
                      :rules="[v => v !== null || 'This field is required']"
                      required
                      outlined
                    />
                  </v-col>
                  <v-col cols="10" sm="6" class="py-0">
                    <span class="primary--text subtitle-1 font-weight-medium">
                      Jumlah Sachet Positive rejection
                    </span>
                    <br />
                    <span class="caption black--text">
                      (Catat jumlah produk yang ter-reject dan saat disieve
                      ditemukan FM)
                    </span>
                  </v-col>
                  <v-col cols="10" sm="6" class="py-0">
                    <v-text-field
                      v-model="item.total_sachet_positive_rejection"
                      :rules="[v => v !== null || 'This field is required']"
                      required
                      outlined
                    />
                  </v-col>
                  <v-col cols="10" sm="6" class="py-0">
                    <span class="primary--text subtitle-1 font-weight-medium">
                      Pengecekkan dummy scoop
                    </span>
                    <br />
                    <span class="caption black--text">
                      (Dummy terdeteksi 100%)
                    </span>
                  </v-col>
                  <v-col cols="10" sm="6" class="py-0">
                    <v-text-field
                      v-model="item.dummy_scoop"
                      :rules="[v => v !== null || 'This field is required']"
                      required
                      outlined
                    />
                  </v-col>
                  <v-col cols="10" sm="6" class="py-0">
                    <span class="primary--text subtitle-1 font-weight-medium">
                      Pengecekkan integritas kemasan
                    </span>
                    <br />
                    <span class="caption black--text">
                      (As standard)
                    </span>
                  </v-col>
                  <v-col cols="10" sm="6" class="py-0">
                    <v-text-field
                      v-model="item.package_integrity"
                      :rules="[v => v !== null || 'This field is required']"
                      required
                      outlined
                    />
                  </v-col>
                </v-row>
              </v-tab-item>
            </v-tabs-items>
          </v-col>
        </v-row>
      </v-form>
    </client-only>
    <v-row justify="center">
      <v-col cols="10" sm="5" class="pt-0">
        <v-btn block large class="grey lighten-1" dark @click="draft()">
          save as draft
        </v-btn>
      </v-col>
      <v-col cols="10" sm="5" class="pt-0">
        <v-btn
          block
          large
          color="primary"
          @click="tabs === 'tab-7' ? store() : next()"
        >
          {{ tabs === 'tab-7' ? 'submit' : 'next' }}
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import constant from '../../../constant'
export default {
  middleware: ['user'],
  data() {
    return {
      timePicker: false,
      tabs: null,
      form: {
        time: null,
        counter_total_sachet: null,
        carton_box_no: null,
        total_sachet_false_rejection: null,
        total_sachet_positive_rejection: null,
        dummy_scoop: null,
        package_integrity: null
      },
      arrayForm: []
    }
  },
  created() {
    if (process.client) {
      const form = localStorage.getItem(constant.THIRD_FORM_XRAY_CHECK_ONE_HOUR)
      if (form !== undefined && form !== null) {
        this.arrayForm = { ...JSON.parse(form) }
      } else {
        for (let i = 0; i < 8; i++) {
          this.arrayForm.push(this.form)
        }
      }
    }
  },
  methods: {
    next() {
      const temp = this.tabs.split('-')
      const active = parseInt(temp[1]) <= 7 ? parseInt(temp[1]) + 1 : 1
      this.tabs = 'tab-' + active
      this.save()
    },
    save() {
      localStorage.setItem(
        constant.THIRD_FORM_XRAY_CHECK_ONE_HOUR,
        JSON.stringify(this.arrayForm)
      )
    },
    draft() {
      this.save()
      this.$router.push('/inspection')
    },
    store() {
      if (this.$refs.thirdFormXray.validate()) {
        this.snackbar = true
        this.save()
        this.$router.push('/inspection')
      }
    }
  }
}
</script>
