<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="10" sm="10" class="text-center title primary--text py-0">
        FILLING SACHET MONITORING
      </v-col>
      <v-col
        cols="10"
        sm="10"
        class="text-center subtitle-1 primary--text py-0 font-weight-bold"
      >
        Pemeriksaan Autoquality
      </v-col>
    </v-row>
    <client-only>
      <v-form ref="secondFormAutoquality" lazy-validation>
        <v-row justify="center">
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
          <v-col cols="10" sm="10">
            <v-tabs-items v-model="tabs" class="transparent">
              <v-tab-item
                v-for="(item, index) in arrayForm"
                :key="index"
                :value="'tab-' + index"
              >
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
                      v-model="item.visual_sealing_condition"
                      :rules="[v => v !== null || 'This field is required']"
                      outlined
                      :items="selectOption"
                      item-text="text"
                      item-value="value"
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
                      v-model="item.vertical_seal_leak_test"
                      :rules="[v => v !== null || 'This field is required']"
                      :items="selectOption"
                      item-text="text"
                      item-value="value"
                      outlined
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
                      v-model="item.jaw_seal_leak_test"
                      :rules="[v => v !== null || 'This field is required']"
                      :items="selectOption"
                      item-text="text"
                      item-value="value"
                      outlined
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
                    <v-text-field
                      v-model="item.code.value"
                      :rules="[v => v !== null || 'This field is required']"
                      outlined
                    />
                  </v-col>
                  <v-col cols="12" sm="4" class="py-0">
                    <v-radio-group
                      v-model="item.code.type"
                      :rules="[v => v !== null || 'This field is required']"
                      row
                    >
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
                    <v-text-field
                      v-model="item.o2_level.value"
                      :rules="[v => v !== null || 'This field is required']"
                      outlined
                    />
                  </v-col>
                  <v-col cols="12" sm="4" class="py-0">
                    <v-radio-group
                      v-model="item.o2_level.type"
                      :rules="[v => v !== null || 'This field is required']"
                      row
                    >
                      <v-radio label="A" value="A"></v-radio>
                      <v-radio label="B" value="B"></v-radio>
                      <v-radio label="C" value="C"></v-radio>
                    </v-radio-group>
                  </v-col>
                  <v-col cols="12" sm="6" class="py-0">
                    <span class="primary--text subtitle-1 font-weight-medium">
                      Temperatur ruang
                    </span>
                    <br />
                    <span class="caption black--text">
                      (Kurang dari 25 C)
                    </span>
                  </v-col>
                  <v-col cols="12" sm="6" class="py-0">
                    <v-text-field
                      v-model="item.temperature"
                      :rules="[v => v !== null || 'This field is required']"
                      outlined
                    />
                  </v-col>
                  <v-col cols="12" sm="6" class="py-0">
                    <span class="primary--text subtitle-1 font-weight-medium">
                      RH Ruang
                    </span>
                    <br />
                    <span class="caption black--text">
                      (Kurang dari 45%)
                    </span>
                  </v-col>
                  <v-col cols="12" sm="6" class="py-0">
                    <v-text-field
                      v-model="item.rh"
                      :rules="[v => v !== null || 'This field is required']"
                      outlined
                    />
                  </v-col>
                  <v-col cols="12" sm="6" class="py-0">
                    <span class="primary--text subtitle-1 font-weight-medium">
                      Pressure Ruangan
                    </span>
                    <br />
                    <span class="caption black--text">
                      (min 10 pa)
                    </span>
                  </v-col>
                  <v-col cols="12" sm="6" class="py-0">
                    <v-text-field
                      v-model="item.pressure"
                      :rules="[v => v !== null || 'This field is required']"
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
        visual_sealing_condition: null,
        vertical_seal_leak_test: null,
        jaw_seal_leak_test: null,
        code: {
          value: null,
          type: null
        },
        o2_level: {
          value: null,
          type: null
        },
        temperature: null,
        rh: null,
        pressure: null
      },
      arrayForm: [],
      selectOption: [{ value: 1, text: 'Ya' }, { value: 0, text: 'Tidak' }]
    }
  },
  created() {
    if (process.client) {
      const form = localStorage.getItem(constant.SECOND_FORM_AUTOQUALITY_CHECK)
      if (form !== undefined && form !== null) {
        this.arrayForm = { ...JSON.parse(form) }
      } else {
        for (let i = 0; i < 8; i++) {
          this.arrayForm.push({ ...this.form })
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
        constant.SECOND_FORM_AUTOQUALITY_CHECK,
        JSON.stringify(this.arrayForm)
      )
    },
    draft() {
      this.save()
      this.$router.push('/inspection')
    },
    store() {
      if (this.$refs.secondFormAutoquality.validate()) {
        this.save()
        this.$router.push('/inspection')
      }
    }
  }
}
</script>
