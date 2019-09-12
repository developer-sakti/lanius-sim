<template>
  <v-container>
    <v-row justify="center" class="px-3">
      <v-col cols="12" sm="12" class="text-center title primary--text pb-0">
        PREPARE PrO Produk Selanjutnya
      </v-col>
      <v-col
        cols="12"
        sm="12"
        class="text-center subtitle-0 primary--text pt-0"
      >
        {{ title }}
      </v-col>
      <v-col cols="12" sm="12" class="pt-0 pb-0">
        <v-row class="primary--text subtitle-1 font-weight-bold">
          <v-col cols="12" sm="3" class="pb-0">Parameter Cek</v-col>
          <v-col cols="12" sm="2" class="pb-0">Standard</v-col>
          <v-col cols="12" sm="4" class="pb-0">Checking</v-col>
          <v-col cols="12" sm="2" class="pb-0">Value</v-col>
          <v-col cols="12" sm="1" class="pb-0">Status</v-col>
        </v-row>
        <v-form ref="formPrepare" lazy-validation>
          <v-window v-model="step">
            <v-window-item :value="1">
              <v-row
                class="primary--text subtitle-1 font-weight-medium"
                align="center"
              >
                <v-col cols="12" sm="3">
                  <span>Kondisi bag RM</span>
                </v-col>
                <v-col cols="12" sm="2">As standard</v-col>
                <v-col cols="12" sm="4">
                  <span class="caption black--text">
                    Check kondisi semua bag apakah segel kemasan utuh & tidak
                    bocor
                  </span>
                </v-col>
                <v-col cols="12" sm="2">-</v-col>
                <v-col cols="12" sm="1">
                  <v-checkbox
                    v-model="form.weighing.bag_rm_condition"
                    :true-value="1"
                    :false-value="0"
                  />
                </v-col>
                <v-col cols="12" sm="3">
                  <span>Kelengkapan RM</span>
                </v-col>
                <v-col cols="12" sm="2">As formula</v-col>
                <v-col cols="12" sm="4">
                  <span class="caption black--text">
                    Jumlah RM yang akan ditimbang per sequence/lot . . .
                    Material
                  </span>
                </v-col>
                <v-col cols="12" sm="2" class="px-3">
                  <v-text-field
                    v-model="form.weighing.rm_completeness.total"
                    :rules="[v => !!v || 'This is required']"
                    outlined
                  />
                </v-col>
                <v-col cols="12" sm="1">
                  <v-checkbox
                    v-model="form.weighing.rm_completeness.status"
                    :true-value="1"
                    :false-value="0"
                  />
                </v-col>
                <v-col cols="12" sm="3">
                  <span>Ganti Baju & Sepatu</span>
                </v-col>
                <v-col cols="12" sm="2">Bersih</v-col>
                <v-col cols="12" sm="4">
                  <span class="caption black--text">
                    Jika ada pergantian produk alergen
                  </span>
                </v-col>
                <v-col cols="12" sm="2">-</v-col>
                <v-col cols="12" sm="1">
                  <v-checkbox
                    v-model="form.weighing.cloth_shoe"
                    :true-value="1"
                    :false-value="0"
                  />
                </v-col>
                <v-col cols="12" sm="3">
                  <span>Lingkungan & Meja Kerja</span>
                </v-col>
                <v-col cols="12" sm="2">Bersih</v-col>
                <v-col cols="12" sm="4">
                  <span class="caption black--text">
                    Tidak ada ceceran powder
                  </span>
                </v-col>
                <v-col cols="12" sm="2">
                  -
                </v-col>
                <v-col cols="12" sm="1">
                  <v-checkbox
                    v-model="form.weighing.environt_table"
                    :true-value="1"
                    :false-value="0"
                  />
                </v-col>
                <v-col cols="12" sm="3">
                  <span>RH , Temp & Press Diff.</span>
                </v-col>
                <v-col cols="12" sm="2">As standard</v-col>
                <v-col cols="12" sm="4">
                  <span class="caption black--text">
                    (RH maks 45, Temp maks 25, Press Diff min 10 Pa)
                  </span>
                </v-col>
                <v-col cols="12" sm="2">-</v-col>
                <v-col cols="12" sm="1">
                  <v-checkbox
                    v-model="form.weighing.rh_temp_press"
                    :true-value="1"
                    :false-value="0"
                  />
                </v-col>
              </v-row>
            </v-window-item>
            <v-window-item :value="2">
              <v-row
                class="primary--text subtitle-1 font-weight-medium"
                align="center"
              >
                <v-col cols="12" sm="3">
                  <span>Dumping RM</span>
                </v-col>
                <v-col cols="12" sm="2">As formula</v-col>
                <v-col cols="12" sm="4">
                  <span class="caption black--text">
                    Jumlah RM yang akan didumping per sequence/lot . . .
                    Material
                  </span>
                </v-col>
                <v-col cols="12" sm="2">
                  <v-text-field
                    v-model="form.d_b_rm_sa.dumping_rm.total"
                    :rules="[v => !!v || 'This is required']"
                    outlined
                  />
                </v-col>
                <v-col cols="12" sm="1">
                  <v-checkbox
                    v-model="form.d_b_rm_sa.dumping_rm.status"
                    :true-value="1"
                    :false-value="0"
                  />
                </v-col>
                <v-col cols="12" sm="3">
                  <span>Ganti Baju & Sepatu</span>
                </v-col>
                <v-col cols="12" sm="2">Bersih</v-col>
                <v-col cols="12" sm="4">
                  <span class="caption black--text">
                    Jika ada pergantian produk alergen
                  </span>
                </v-col>
                <v-col cols="12" sm="2">-</v-col>
                <v-col cols="12" sm="1">
                  <v-checkbox
                    v-model="form.d_b_rm_sa.cloth_shoe"
                    :true-value="1"
                    :false-value="0"
                  />
                </v-col>
                <v-col cols="12" sm="3">
                  <span>Lingkungan & Meja Kerja</span>
                </v-col>
                <v-col cols="12" sm="2">Bersih</v-col>
                <v-col cols="12" sm="4">
                  <span class="caption black--text">
                    Tidak ada ceceran powder
                  </span>
                </v-col>
                <v-col cols="12" sm="2">-</v-col>
                <v-col cols="12" sm="1">
                  <v-checkbox
                    v-model="form.d_b_rm_sa.environt_table"
                    :true-value="1"
                    :false-value="0"
                  />
                </v-col>
                <v-col cols="12" sm="3">
                  <span>RH , Temp & Press Diff.</span>
                </v-col>
                <v-col cols="12" sm="2">As standard</v-col>
                <v-col cols="12" sm="4">
                  <span class="caption black--text">
                    (RH maks 45, Temp maks 25, Press Diff min 10 Pa)
                  </span>
                </v-col>
                <v-col cols="12" sm="2">-</v-col>
                <v-col cols="12" sm="1">
                  <v-checkbox
                    v-model="form.d_b_rm_sa.rh_temp_press"
                    :true-value="1"
                    :false-value="0"
                  />
                </v-col>
              </v-row>
            </v-window-item>
            <v-window-item :value="3">
              <v-row
                class="primary--text subtitle-1 font-weight-medium"
                align="center"
              >
                <v-col cols="12" sm="3">
                  <span>Setting Autosampler</span>
                </v-col>
                <v-col cols="12" sm="2">As standard</v-col>
                <v-col cols="12" sm="4">
                  <span class="caption black--text">
                    Setting auto sampler
                  </span>
                </v-col>
                <v-col cols="12" sm="2">-</v-col>
                <v-col cols="12" sm="1">
                  <v-checkbox
                    v-model="form.filling.set_autosampler"
                    :true-value="1"
                    :false-value="0"
                  />
                </v-col>
                <v-col cols="12" sm="3">
                  <span>Setting Filling</span>
                </v-col>
                <v-col cols="12" sm="2">As standard</v-col>
                <v-col cols="12" sm="4">
                  <span class="caption black--text">
                    (Sachet . . . gr)
                  </span>
                </v-col>
                <v-col cols="12" sm="2" class="px-3">
                  <v-text-field
                    v-model="form.filling.set_filling.sachet_gr"
                    :rules="[v => !!v || 'This is required']"
                    outlined
                  />
                </v-col>
                <v-col cols="12" sm="1">
                  <v-checkbox
                    v-model="form.filling.set_filling.status"
                    :true-value="1"
                    :false-value="0"
                  />
                </v-col>
                <v-col cols="12" sm="3" class="pb-0">
                  <span>Material Alufoil</span>
                </v-col>
                <v-col cols="12" sm="2" class="pb-0">As standard</v-col>
                <v-col cols="12" sm="4" class="pb-0">
                  <span class="caption black--text">
                    Jenis Foil
                  </span>
                </v-col>
                <v-col cols="12" sm="2" class="px-3 pb-0">
                  <v-text-field
                    v-model="form.filling.material_alufoil.foil"
                    :rules="[v => !!v || 'This is required']"
                    outlined
                  />
                </v-col>
                <v-col cols="12" sm="1">
                  <v-checkbox
                    v-model="form.filling.material_alufoil.status"
                    :true-value="1"
                    :false-value="0"
                  />
                </v-col>
                <v-col cols="6" sm="8" class="py-0">
                  <v-file-input
                    v-model="material_alufoil_image"
                    :rules="required"
                    outlined
                    prepend-icon="mdi-camera"
                    label="Label/stiker material"
                  />
                </v-col>
              </v-row>
              <v-row
                class="primary--text subtitle-1 font-weight-medium"
                align="center"
              >
                <v-col cols="12" sm="3">
                  <span>Setting Code sachet FG</span>
                </v-col>
                <v-col cols="12" sm="2">As standard</v-col>
                <v-col cols="12" sm="4">
                  <span class="caption black--text">
                    Standard Coding Sachet
                  </span>
                </v-col>
                <v-col cols="12" sm="2" class="px-3">
                  <v-text-field
                    v-model="
                      form.filling.set_code_sachet_fg.standard_coding_sachet
                    "
                    :rules="[v => !!v || 'This is required']"
                    outlined
                  />
                </v-col>
                <v-col cols="12" sm="1">
                  <v-checkbox
                    v-model="form.filling.set_code_sachet_fg.status"
                    :true-value="1"
                    :false-value="0"
                  />
                </v-col>
                <v-col cols="6" sm="8" class="py-0">
                  <v-file-input
                    v-model="set_code_sachet_fg_image"
                    :rules="required"
                    outlined
                    prepend-icon="mdi-camera"
                    label="Cetakan coding sachet"
                  />
                </v-col>
              </v-row>
              <v-row
                class="primary--text subtitle-1 font-weight-medium"
                align="center"
              >
                <v-col cols="12" sm="3">
                  <span>Setting Net Weight</span>
                </v-col>
                <v-col cols="12" sm="2">As standard</v-col>
                <v-col cols="12" sm="4">
                  <span class="caption black--text">
                    Menu setting Net weight
                  </span>
                </v-col>
                <v-col cols="12" sm="2" class="px-3">
                  <v-text-field
                    v-model="form.filling.set_net_weight.set_weight"
                    :rules="[v => !!v || 'This is required']"
                    outlined
                  />
                </v-col>
                <v-col cols="12" sm="1">
                  <v-checkbox
                    v-model="form.filling.set_net_weight.status"
                    :true-value="1"
                    :false-value="0"
                  />
                </v-col>
                <v-col cols="12" sm="3">
                  <span>Dosing Nitrogen</span>
                </v-col>
                <v-col cols="12" sm="2">As standard</v-col>
                <v-col cols="12" sm="4" class="px-3">-</v-col>
                <v-col cols="12" sm="2" class="px-3">-</v-col>
                <v-col cols="12" sm="1">
                  <v-checkbox
                    v-model="form.filling.dosing_nitrogen"
                    :true-value="1"
                    :false-value="0"
                  />
                </v-col>
                <v-col cols="12" sm="3">
                  <span>Pengecekkan Vertical & Horizontal Seal</span>
                  <br />
                  <span class="caption black--text">
                    (Menggunakan kertas karbon)
                  </span>
                </v-col>
                <v-col cols="12" sm="2">As standard</v-col>
                <v-col cols="12" sm="4" class="px-3">-</v-col>
                <v-col cols="12" sm="2" class="px-3">-</v-col>
                <v-col cols="12" sm="1">
                  <v-checkbox
                    v-model="form.filling.ver_hor_seal_check.status"
                    :true-value="1"
                    :false-value="0"
                  />
                </v-col>
                <v-col cols="6" sm="8" class="py-0">
                  <v-file-input
                    v-model="ver_hor_seal_check_image"
                    :rules="required"
                    outlined
                    prepend-icon="mdi-camera"
                    label="Kertas karbon"
                  />
                </v-col>
              </v-row>
            </v-window-item>
            <v-window-item :value="4">
              <v-row
                class="primary--text subtitle-1 font-weight-medium"
                align="center"
              >
                <v-col cols="12" sm="3">
                  <span>Setting X-Ray</span>
                </v-col>
                <v-col cols="12" sm="2">As programme</v-col>
                <v-col cols="12" sm="4">
                  <span class="caption black--text">
                    (Menu setting X-Ray)
                  </span>
                </v-col>
                <v-col cols="12" sm="2">-</v-col>
                <v-col cols="12" sm="1">
                  <v-checkbox
                    v-model="form.packing.set_xray"
                    :true-value="1"
                    :false-value="0"
                  />
                </v-col>
                <v-col cols="12" sm="3">
                  <span>Ganti Scoop</span>
                </v-col>
                <v-col cols="12" sm="2">As standard</v-col>
                <v-col cols="12" sm="4">
                  <span class="caption black--text">
                    Nomor Code Scop
                  </span>
                </v-col>
                <v-col cols="12" sm="2" class="px-3">
                  <v-text-field
                    v-model="form.packing.scoop_change.number"
                    :rules="[v => !!v || 'This is required']"
                    outlined
                  />
                </v-col>
                <v-col cols="12" sm="1">
                  <v-checkbox
                    v-model="form.packing.scoop_change.status"
                    :true-value="1"
                    :false-value="0"
                  />
                </v-col>
                <v-col cols="12" sm="3">
                  <span>Ganti Setting Code Folding Box</span>
                </v-col>
                <v-col cols="12" sm="2">As standard</v-col>
                <v-col cols="12" sm="4">
                  <span class="caption black--text">
                    Standard Coding Folding Box
                  </span>
                </v-col>
                <v-col cols="12" sm="2">
                  <v-text-field
                    v-model="
                      form.packing.set_code_folding_box
                        .standard_coding_folding_box
                    "
                    :rules="[v => !!v || 'This is required']"
                    outlined
                  />
                </v-col>
                <v-col cols="12" sm="1">
                  <v-checkbox
                    v-model="form.packing.set_code_folding_box.status"
                    :true-value="1"
                    :false-value="0"
                  />
                </v-col>
                <v-col cols="6" sm="8" class="py-0">
                  <v-file-input
                    v-model="set_code_folding_box_image"
                    :rules="required"
                    outlined
                    prepend-icon="mdi-camera"
                    label="Cetakan coding folding box"
                  />
                </v-col>
              </v-row>
              <v-row
                class="primary--text subtitle-1 font-weight-medium"
                align="center"
              >
                <v-col cols="12" sm="3">
                  <span>Setting Code Outer Carton</span>
                </v-col>
                <v-col cols="12" sm="2">As standard</v-col>
                <v-col cols="12" sm="4">
                  <span class="caption black--text">
                    Standard Coding Outer Carton
                  </span>
                </v-col>
                <v-col cols="12" sm="2">
                  <v-text-field
                    v-model="
                      form.packing.set_code_outer_carton
                        .standard_coding_outer_carton
                    "
                    :rules="[v => !!v || 'This is required']"
                    outlined
                  />
                </v-col>
                <v-col cols="12" sm="1">
                  <v-checkbox
                    v-model="form.packing.set_code_outer_carton.status"
                    :true-value="1"
                    :false-value="0"
                  />
                </v-col>
                <v-col cols="6" sm="8" class="py-0">
                  <v-file-input
                    v-model="set_code_outer_carton_image"
                    :rules="required"
                    outlined
                    prepend-icon="mdi-camera"
                    label="Cetakan coding outer carton"
                  />
                </v-col>
              </v-row>
              <v-row
                class="primary--text subtitle-1 font-weight-medium"
                align="center"
              >
                <v-col cols="12" sm="3">
                  <span>Stock Glue Folding Box</span>
                </v-col>
                <v-col cols="12" sm="2">As target level</v-col>
                <v-col cols="12" sm="4">-</v-col>
                <v-col cols="12" sm="2">-</v-col>
                <v-col cols="12" sm="1">
                  <v-checkbox
                    v-model="form.packing.stock_glue_folding_box"
                    :true-value="1"
                    :false-value="0"
                  />
                </v-col>
                <v-col cols="12" sm="3">
                  <span>Stock Tinta Print Outer Carton</span>
                </v-col>
                <v-col cols="12" sm="2">As target level</v-col>
                <v-col cols="12" sm="4">-</v-col>
                <v-col cols="12" sm="2">-</v-col>
                <v-col cols="12" sm="1">
                  <v-checkbox
                    v-model="form.packing.stock_int_outer_carbon"
                    :true-value="1"
                    :false-value="0"
                  />
                </v-col>
              </v-row>
            </v-window-item>
          </v-window>
        </v-form>
      </v-col>
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
          @click="step === 4 ? submit() : next()"
        >
          {{ step === 4 ? 'submit' : 'next' }}
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import constant from '../../../constant'
import core from '~/mixins/core'
export default {
  mixins: [core],
  middleware: ['user'],
  data() {
    return {
      step: 1,
      title: 'WEIGHING AREA',
      material_alufoil_image: null,
      set_code_sachet_fg_image: null,
      ver_hor_seal_check_image: null,
      set_code_folding_box_image: null,
      set_code_outer_carton_image: null,
      form: {
        weighing: {
          bag_rm_condition: 0,
          rm_completeness: {
            total: null,
            status: 0
          },
          cloth_shoe: 0,
          environt_table: 0,
          rh_temp_press: 0
        },
        d_b_rm_sa: {
          dumping_rm: {
            total: null,
            status: 0
          },
          cloth_shoe: 0,
          environt_table: 0,
          rh_temp_press: 0
        },
        filling: {
          set_autosampler: 0,
          set_filling: {
            sachet_gr: null,
            status: 0
          },
          material_alufoil: {
            foil: null,
            status: 0,
            image: null
          },
          set_code_sachet_fg: {
            standard_coding_sachet: null,
            status: 0,
            image: null
          },
          set_net_weight: {
            set_weight: null,
            status: 0
          },
          dosing_nitrogen: 0,
          ver_hor_seal_check: {
            status: 0,
            image: null
          }
        },
        packing: {
          set_xray: 0,
          scoop_change: {
            number: null,
            status: 0
          },
          set_code_folding_box: {
            standard_coding_folding_box: null,
            status: 0,
            image: null
          },
          set_code_outer_carton: {
            standard_coding_outer_carton: null,
            status: 0,
            image: null
          },
          stock_glue_folding_box: 0,
          stock_int_outer_carbon: 0
        }
      }
    }
  },
  watch: {
    step(value) {
      switch (value) {
        case 1:
          this.title = 'WEIGHING AREA'
          break
        case 2:
          this.title = 'DUMPING, BLENDING, ROTARY MAGNET & SIFTER AREA'
          break
        case 3:
          this.title = 'FILLING AREA'
          break
        case 4:
          this.title = 'PACKING AREA'
          break
        default:
          this.title = 'WEIGHING AREA'
      }
    }
  },
  created() {
    if (process.client) {
      const form = localStorage.getItem(constant.FISRT_FORM_P_PRO_NEXT_PRODUCT)
      if (form !== undefined && form !== null) {
        this.form = { ...JSON.parse(form) }
      }
    }
  },
  methods: {
    save() {
      localStorage.setItem(
        constant.FISRT_FORM_P_PRO_NEXT_PRODUCT,
        JSON.stringify(this.form)
      )
    },
    next() {
      this.step++
    },
    async submit() {
      if (this.$refs.formPrepare.validate()) {
        await this.saveImage()
        this.save()
        this.$router.push('/inspection')
      }
    },
    async draft() {
      await this.saveImage()
      this.save()
      this.$router.push('/inspection')
    },
    async saveImage() {
      this.form.filling.material_alufoil.image = await this.toBaseSixFour(
        this.material_alufoil_image
      ).then(res => {
        return res
      })
      this.form.filling.set_code_sachet_fg.image = await this.toBaseSixFour(
        this.set_code_sachet_fg_image
      ).then(res => {
        return res
      })
      this.form.filling.ver_hor_seal_check.image = await this.toBaseSixFour(
        this.ver_hor_seal_check_image
      ).then(res => {
        return res
      })
      this.form.filling.set_code_folding_box.image = await this.toBaseSixFour(
        this.set_code_folding_box_image
      ).then(res => {
        return res
      })
      this.form.filling.set_code_outer_carton.image = await this.toBaseSixFour(
        this.set_code_outer_carton_image
      ).then(res => {
        return res
      })
    },
    toBaseSixFour(file, key) {
      if (file) {
        return new Promise(resolve => {
          const reader = new FileReader()
          reader.onload = function(event) {
            resolve(btoa(event.target.result))
          }
          reader.readAsBinaryString(file)
        })
      }
    },
    toImage(string, field) {}
  }
}
</script>
