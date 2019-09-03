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
        <span>Pemeriksaan Checkweigher dan X-Ray</span>
        <span class="grey--text">(Diisi setiap 2 jam)</span>
      </v-col>
    </v-row>
    <client-only>
      <v-form ref="thirdcheckXray" lazy-validation>
        <v-row justify="center">
          <v-col cols="10" sm="7">
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
          <v-col cols="10" sm="10">
            <v-tabs-items v-model="tabs" class="transparent">
              <v-tab-item
                v-for="(item, index) in arrayForm"
                :key="index"
                :value="'tab-' + index"
              >
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
                      label="Jam Pemeriksaan"
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
                <v-select
                  v-model="item.rejector_condition"
                  :rules="[v => v !== null || 'This field is required']"
                  label="Kondisi Rejector"
                  required
                  outlined
                  :items="selectOption"
                  item-text="text"
                  item-value="value"
                />
                <v-row>
                  <v-col cols="12" sm="6" class="py-0">
                    <span class="subtitle-1 font-weight-medium">
                      Berat
                    </span>
                    <br />
                    <span class="caption grey--text">
                      (Lihat panduan SKU)
                    </span>
                  </v-col>
                  <v-col cols="12" sm="2" class="py-0">
                    <v-text-field
                      v-model="item.weight.value"
                      :rules="[v => v !== null || 'This field is required']"
                      outlined
                    />
                  </v-col>
                  <v-col cols="12" sm="4" class="py-0">
                    <v-radio-group
                      v-model="item.weight.type"
                      :rules="[v => v !== null || 'This field is required']"
                      row
                    >
                      <v-radio label="A" value="A"></v-radio>
                      <v-radio label="B" value="B"></v-radio>
                      <v-radio label="C" value="C"></v-radio>
                    </v-radio-group>
                  </v-col>
                </v-row>
                <v-select
                  v-model="item.machine_condition"
                  :rules="[v => v !== null || 'This field is required']"
                  label="Kondisi Mesin"
                  required
                  outlined
                  :items="selectOption"
                  item-text="text"
                  item-value="value"
                />
                <v-row justify="center">
                  <v-btn-toggle rounded>
                    <v-btn width="40vw" disabled class="body-2 text-none">
                      Ya = terdeteksi dan tereject
                    </v-btn>
                    <v-btn width="40vw" disabled class="body-2 text-none">
                      Tidak = terdeteksi dan atau tidak tereject
                    </v-btn>
                  </v-btn-toggle>
                </v-row>
                <v-card class="mt-3">
                  <v-card-text class="py-0 my-0">
                    <v-row align="center" class="title primary--text">
                      <v-col cols="10" sm="7" class="py-0">
                        SS = 0.8mm
                      </v-col>
                      <v-col cols="10" sm="5" class="py-0">
                        <v-radio-group
                          v-model="item.ss1"
                          :rules="[v => v !== null || 'This field is required']"
                          row
                        >
                          <v-radio label="Ya" :value="1"></v-radio>
                          <v-radio label="Tidak" :value="0"></v-radio>
                        </v-radio-group>
                      </v-col>
                      <v-col cols="10" sm="7" class="py-0">
                        SS = 0.8mm
                      </v-col>
                      <v-col cols="10" sm="5" class="py-0">
                        <v-radio-group
                          v-model="item.ss2"
                          :rules="[v => v !== null || 'This field is required']"
                          row
                        >
                          <v-radio label="Ya" :value="1"></v-radio>
                          <v-radio label="Tidak" :value="0"></v-radio>
                        </v-radio-group>
                      </v-col>
                      <v-col cols="10" sm="7" class="py-0">
                        SS = 0.8mm
                      </v-col>
                      <v-col cols="10" sm="5" class="py-0">
                        <v-radio-group
                          v-model="item.ss3"
                          :rules="[v => v !== null || 'This field is required']"
                          row
                        >
                          <v-radio label="Ya" :value="1"></v-radio>
                          <v-radio label="Tidak" :value="0"></v-radio>
                        </v-radio-group>
                      </v-col>
                      <v-col cols="10" sm="7" class="py-0">
                        SS = 0.8mm
                      </v-col>
                      <v-col cols="10" sm="5" class="py-0">
                        <v-radio-group
                          v-model="item.ss4"
                          :rules="[v => v !== null || 'This field is required']"
                          row
                        >
                          <v-radio label="Ya" :value="1"></v-radio>
                          <v-radio label="Tidak" :value="0"></v-radio>
                        </v-radio-group>
                      </v-col>
                      <v-col cols="10" sm="7" class="py-0">
                        SS = 0.8mm
                      </v-col>
                      <v-col cols="10" sm="5" class="py-0">
                        <v-radio-group
                          v-model="item.ss5"
                          :rules="[v => v !== null || 'This field is required']"
                          row
                        >
                          <v-radio label="Ya" :value="1"></v-radio>
                          <v-radio label="Tidak" :value="0"></v-radio>
                        </v-radio-group>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
                <v-card class="mt-3">
                  <v-card-text class="py-0 my-0">
                    <v-row align="center" class="title primary--text">
                      <v-col cols="10" sm="7" class="py-0">
                        Glass = 1.5mm
                      </v-col>
                      <v-col cols="10" sm="5" class="py-0">
                        <v-radio-group
                          v-model="item.glass1"
                          :rules="[v => v !== null || 'This field is required']"
                          row
                        >
                          <v-radio label="Ya" :value="1"></v-radio>
                          <v-radio label="Tidak" :value="0"></v-radio>
                        </v-radio-group>
                      </v-col>
                      <v-col cols="10" sm="7" class="py-0">
                        Glass = 1.5mm
                      </v-col>
                      <v-col cols="10" sm="5" class="py-0">
                        <v-radio-group
                          v-model="item.glass2"
                          :rules="[v => v !== null || 'This field is required']"
                          row
                        >
                          <v-radio label="Ya" :value="1"></v-radio>
                          <v-radio label="Tidak" :value="0"></v-radio>
                        </v-radio-group>
                      </v-col>
                      <v-col cols="10" sm="7" class="py-0">
                        Glass = 1.5mm
                      </v-col>
                      <v-col cols="10" sm="5" class="py-0">
                        <v-radio-group
                          v-model="item.glass3"
                          :rules="[v => v !== null || 'This field is required']"
                          row
                        >
                          <v-radio label="Ya" :value="1"></v-radio>
                          <v-radio label="Tidak" :value="0"></v-radio>
                        </v-radio-group>
                      </v-col>
                      <v-col cols="10" sm="7" class="py-0">
                        Glass = 1.5mm
                      </v-col>
                      <v-col cols="10" sm="5" class="py-0">
                        <v-radio-group
                          v-model="item.glass4"
                          :rules="[v => v !== null || 'This field is required']"
                          row
                        >
                          <v-radio label="Ya" :value="1"></v-radio>
                          <v-radio label="Tidak" :value="0"></v-radio>
                        </v-radio-group>
                      </v-col>
                      <v-col cols="10" sm="7" class="py-0">
                        Glass = 1.5mm
                      </v-col>
                      <v-col cols="10" sm="5" class="py-0">
                        <v-radio-group
                          v-model="item.glass5"
                          :rules="[v => v !== null || 'This field is required']"
                          row
                        >
                          <v-radio label="Ya" :value="1"></v-radio>
                          <v-radio label="Tidak" :value="0"></v-radio>
                        </v-radio-group>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
                <v-card class="mt-3">
                  <v-card-text class="py-0 my-0">
                    <v-row align="center" class="title primary--text">
                      <v-col cols="10" sm="7" class="py-0">
                        Aluminium = 2.0mm
                      </v-col>
                      <v-col cols="10" sm="5" class="py-0">
                        <v-radio-group
                          v-model="item.aluminium1"
                          :rules="[v => v !== null || 'This field is required']"
                          row
                        >
                          <v-radio label="Ya" :value="1"></v-radio>
                          <v-radio label="Tidak" :value="0"></v-radio>
                        </v-radio-group>
                      </v-col>
                      <v-col cols="10" sm="7" class="py-0">
                        Aluminium = 2.0mm
                      </v-col>
                      <v-col cols="10" sm="5" class="py-0">
                        <v-radio-group
                          v-model="item.aluminium2"
                          :rules="[v => v !== null || 'This field is required']"
                          row
                        >
                          <v-radio label="Ya" :value="1"></v-radio>
                          <v-radio label="Tidak" :value="0"></v-radio>
                        </v-radio-group>
                      </v-col>
                      <v-col cols="10" sm="7" class="py-0">
                        Aluminium = 2.0mm
                      </v-col>
                      <v-col cols="10" sm="5" class="py-0">
                        <v-radio-group
                          v-model="item.aluminium3"
                          :rules="[v => v !== null || 'This field is required']"
                          row
                        >
                          <v-radio label="Ya" :value="1"></v-radio>
                          <v-radio label="Tidak" :value="0"></v-radio>
                        </v-radio-group>
                      </v-col>
                      <v-col cols="10" sm="7" class="py-0">
                        Aluminium = 2.0mm
                      </v-col>
                      <v-col cols="10" sm="5" class="py-0">
                        <v-radio-group
                          v-model="item.aluminium4"
                          :rules="[v => v !== null || 'This field is required']"
                          row
                        >
                          <v-radio label="Ya" :value="1"></v-radio>
                          <v-radio label="Tidak" :value="0"></v-radio>
                        </v-radio-group>
                      </v-col>
                      <v-col cols="10" sm="7" class="py-0">
                        Aluminium = 2.0mm
                      </v-col>
                      <v-col cols="10" sm="5" class="py-0">
                        <v-radio-group
                          v-model="item.aluminium5"
                          :rules="[v => v !== null || 'This field is required']"
                          row
                        >
                          <v-radio label="Ya" :value="1"></v-radio>
                          <v-radio label="Tidak" :value="0"></v-radio>
                        </v-radio-group>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
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
          @click="tabs === 'tab-3' ? store() : next()"
        >
          {{ tabs === 'tab-3' ? 'submit' : 'next' }}
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
        rejector_condition: null,
        weight: {
          value: null,
          type: null
        },
        machine_condition: null,
        ss1: null,
        ss2: null,
        ss3: null,
        ss4: null,
        ss5: null,
        glass1: null,
        glass2: null,
        glass3: null,
        glass4: null,
        glass5: null,
        aluminium1: null,
        aluminium2: null,
        aluminium3: null,
        aluminium4: null,
        aluminium5: null
      },
      arrayForm: [],
      selectOption: [{ value: 1, text: 'Hidup' }, { value: 0, text: 'Mati' }]
    }
  },
  created() {
    if (process.client) {
      const form = localStorage.getItem(
        constant.THIRD_FORM_CHECKWEIGHER_XRAY_TWO_HOUR
      )
      if (form !== undefined && form !== null) {
        this.arrayForm = { ...JSON.parse(form) }
      } else {
        for (let i = 0; i < 4; i++) {
          this.arrayForm.push(this.form)
        }
      }
    }
  },
  methods: {
    next() {
      const temp = this.tabs.split('-')
      const active = parseInt(temp[1]) <= 4 ? parseInt(temp[1]) + 1 : 1
      this.tabs = 'tab-' + active
      this.save()
    },
    save() {
      localStorage.setItem(
        constant.THIRD_FORM_CHECKWEIGHER_XRAY_TWO_HOUR,
        JSON.stringify(this.arrayForm)
      )
    },
    draft() {
      this.save()
      this.$router.push('/inspection')
    },
    store() {
      if (this.$refs.thirdcheckXray.validate()) {
        this.save()
        this.$router.push('/inspection')
      }
    }
  }
}
</script>
