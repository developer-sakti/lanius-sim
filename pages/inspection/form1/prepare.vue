<template>
  <v-container>
    <v-row justify="center">
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
          <v-col cols="12" sm="4" class="pb-0">Parameter Cek</v-col>
          <v-col cols="12" sm="3" class="pb-0">Standart</v-col>
          <v-col cols="12" sm="2" class="pb-0">Checking</v-col>
          <v-col cols="12" sm="3" class="pb-0">Status</v-col>
        </v-row>
        <v-form ref="formPrepare" lazy-validation>
          <v-window v-model="step">
            <v-window-item :value="1">
              <v-row
                class="primary--text subtitle-1 font-weight-medium"
                align="center"
              >
                <v-col cols="12" sm="4">
                  <span>Kondisi bag RM</span>
                  <br />
                  <span class="caption black--text">
                    (Check kondisi semua bag apakah segel kemasan utuh & tidak
                    bocor)
                  </span>
                </v-col>
                <v-col cols="12" sm="3">As standard</v-col>
                <v-col cols="12" sm="2">-</v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox
                    v-model="form.weighing.bag_rm_condition"
                    class="mx-2"
                    :label="
                      form.weighing.bag_rm_condition == 0 ? 'Not OK' : 'OK'
                    "
                  />
                </v-col>
                <v-col cols="12" sm="4">
                  <span>Kelengkapan RM</span>
                  <br />
                  <span class="caption black--text">
                    (Jumlah RM yang akan ditimbang per sequence/lot . . .
                    Material)
                  </span>
                </v-col>
                <v-col cols="12" sm="3">As formula</v-col>
                <v-col cols="12" sm="2" class="px-3">
                  <v-text-field
                    v-model="form.weighing.rm_completeness.total"
                    :rules="[v => !!v || 'This is required']"
                    outlined
                  />
                </v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox
                    v-model="form.weighing.rm_completeness.status"
                    class="mx-2"
                    :label="
                      form.weighing.rm_completeness.status == 0
                        ? 'Not OK'
                        : 'OK'
                    "
                  />
                </v-col>
                <v-col cols="12" sm="4">
                  <span>Ganti Baju & Sepatu</span>
                  <br />
                  <span class="caption black--text">
                    (Jika ada pergantian produk alergen)
                  </span>
                </v-col>
                <v-col cols="12" sm="3">Bersih</v-col>
                <v-col cols="12" sm="2">
                  -
                </v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox
                    v-model="form.weighing.cloth_shoe"
                    class="mx-2"
                    :label="form.weighing.cloth_shoe == 0 ? 'Not OK' : 'OK'"
                  />
                </v-col>
                <v-col cols="12" sm="4">
                  <span>Lingkungan & Meja Kerja</span>
                  <br />
                  <span class="caption black--text">
                    (Tidak ada ceceran powder)
                  </span>
                </v-col>
                <v-col cols="12" sm="3">Bersih</v-col>
                <v-col cols="12" sm="2">
                  -
                </v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox
                    v-model="form.weighing.environt_table"
                    class="mx-2"
                    :label="form.weighing.environt_table == 0 ? 'Not OK' : 'OK'"
                  />
                </v-col>
                <v-col cols="12" sm="4">
                  <span>RH , Temp & Press Diff.</span>
                  <br />
                  <span class="caption black--text">
                    (RH maks 45, Temp maks 25, Press Diff min 10 Pa)
                  </span>
                </v-col>
                <v-col cols="12" sm="3">As standard</v-col>
                <v-col cols="12" sm="2">
                  -
                </v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox
                    v-model="form.weighing.rh_temp_press"
                    class="mx-2"
                    :label="form.weighing.rh_temp_press == 0 ? 'Not OK' : 'OK'"
                  />
                </v-col>
              </v-row>
            </v-window-item>
            <v-window-item :value="2">
              <v-row
                class="primary--text subtitle-1 font-weight-medium"
                align="center"
              >
                <v-col cols="12" sm="4">
                  <span>Dumping RM</span>
                  <br />
                  <span class="caption black--text">
                    (Jumlah RM yang akan didumping per sequence/lot . . .
                    Material)
                  </span>
                </v-col>
                <v-col cols="12" sm="3">As formula</v-col>
                <v-col cols="12" sm="2">
                  <v-text-field
                    v-model="form.d_b_rm_sa.dumping_rm.total"
                    :rules="[v => !!v || 'This is required']"
                    outlined
                  />
                </v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox
                    v-model="form.d_b_rm_sa.dumping_rm.status"
                    class="mx-2"
                    :label="
                      form.d_b_rm_sa.dumping_rm.status == 0 ? 'Not OK' : 'OK'
                    "
                  />
                </v-col>
                <v-col cols="12" sm="4">
                  <span>Ganti Baju & Sepatu</span>
                  <br />
                  <span class="caption black--text">
                    (Jika ada pergantian produk alergen)
                  </span>
                </v-col>
                <v-col cols="12" sm="3">Bersih</v-col>
                <v-col cols="12" sm="2">
                  -
                </v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox
                    v-model="form.d_b_rm_sa.cloth_shoe"
                    class="mx-2"
                    :label="form.d_b_rm_sa.cloth_shoe == 0 ? 'Not OK' : 'OK'"
                  />
                </v-col>
                <v-col cols="12" sm="4">
                  <span>Lingkungan & Meja Kerja</span>
                  <br />
                  <span class="caption black--text">
                    (Tidak ada ceceran powder)
                  </span>
                </v-col>
                <v-col cols="12" sm="3">Bersih</v-col>
                <v-col cols="12" sm="2">
                  -
                </v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox
                    v-model="form.d_b_rm_sa.environt_table"
                    class="mx-2"
                    :label="
                      form.d_b_rm_sa.environt_table == 0 ? 'Not OK' : 'OK'
                    "
                  />
                </v-col>
                <v-col cols="12" sm="4">
                  <span>RH , Temp & Press Diff.</span>
                  <br />
                  <span class="caption black--text">
                    (RH maks 45, Temp maks 25, Press Diff min 10 Pa)
                  </span>
                </v-col>
                <v-col cols="12" sm="3">As standard</v-col>
                <v-col cols="12" sm="2">
                  -
                </v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox
                    v-model="form.d_b_rm_sa.rh_temp_press"
                    class="mx-2"
                    :label="form.d_b_rm_sa.rh_temp_press == 0 ? 'Not OK' : 'OK'"
                  />
                </v-col>
              </v-row>
            </v-window-item>
            <v-window-item :value="3">
              <v-row
                class="primary--text subtitle-1 font-weight-medium"
                align="center"
              >
                <v-col cols="12" sm="4">
                  <span>Setting Autosampler</span>
                  <br />
                  <span class="caption black--text">
                    (Setting auto sampler)
                  </span>
                </v-col>
                <v-col cols="12" sm="3">As standard</v-col>
                <v-col cols="12" sm="2">-</v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox
                    v-model="form.filling.set_autosampler"
                    class="mx-2"
                    :label="form.filling.set_autosampler == 0 ? 'Not OK' : 'OK'"
                  />
                </v-col>
                <v-col cols="12" sm="4">
                  <span>Setting Filling</span>
                  <br />
                  <span class="caption black--text">
                    (Sachet . . . gr)
                  </span>
                </v-col>
                <v-col cols="12" sm="3">As standard</v-col>
                <v-col cols="12" sm="2" class="px-3">
                  <v-text-field
                    v-model="form.filling.set_filling.sachet_gr"
                    :rules="[v => !!v || 'This is required']"
                    outlined
                  />
                </v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox
                    v-model="form.filling.set_filling.status"
                    class="mx-2"
                    :label="
                      form.filling.set_filling.status == 0 ? 'Not OK' : 'OK'
                    "
                  />
                </v-col>
                <v-col cols="12" sm="4">
                  <span>Material Alufoil</span>
                  <br />
                  <span class="caption black--text">
                    (Jenis Foil)
                  </span>
                  <br />
                  <div>
                    <span class="caption black--text">
                      *Label/stiker material
                    </span>
                    <v-btn icon>
                      <v-icon>mdi-camera</v-icon>
                    </v-btn>
                  </div>
                </v-col>
                <v-col cols="12" sm="3">As standard</v-col>
                <v-col cols="12" sm="2" class="px-3">
                  <v-text-field
                    v-model="form.filling.material_alufoil.foil"
                    :rules="[v => !!v || 'This is required']"
                    outlined
                  />
                </v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox
                    v-model="form.filling.material_alufoil.status"
                    class="mx-2"
                    :label="
                      form.filling.material_alufoil.status == 0
                        ? 'Not OK'
                        : 'OK'
                    "
                  />
                </v-col>
                <v-col cols="12" sm="4">
                  <span>Setting Code sachet FG</span>
                  <br />
                  <span class="caption black--text">
                    (Standard Coding Sachet)
                  </span>
                  <br />
                  <div>
                    <span class="caption black--text">
                      *Cetakan coding sachet
                    </span>
                    <v-btn icon>
                      <v-icon>mdi-camera</v-icon>
                    </v-btn>
                  </div>
                </v-col>
                <v-col cols="12" sm="3">As standard</v-col>
                <v-col cols="12" sm="2" class="px-3">
                  <v-text-field
                    v-model="
                      form.filling.set_code_sachet_fg.standard_coding_sachet
                    "
                    :rules="[v => !!v || 'This is required']"
                    outlined
                  />
                </v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox
                    v-model="form.filling.set_code_sachet_fg.status"
                    class="mx-2"
                    :label="
                      form.filling.set_code_sachet_fg.status == 0
                        ? 'Not OK'
                        : 'OK'
                    "
                  />
                </v-col>
                <v-col cols="12" sm="4">
                  <span>Setting Net Weight</span>
                  <br />
                  <span class="caption black--text">
                    (Menu setting Net weight)
                  </span>
                </v-col>
                <v-col cols="12" sm="3">As standard</v-col>
                <v-col cols="12" sm="2" class="px-3">
                  <v-text-field
                    v-model="form.filling.set_net_weight.set_weight"
                    :rules="[v => !!v || 'This is required']"
                    outlined
                  />
                </v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox
                    v-model="form.filling.set_net_weight.status"
                    class="mx-2"
                    :label="
                      form.filling.set_net_weight.status == 0 ? 'Not OK' : 'OK'
                    "
                  />
                </v-col>
                <v-col cols="12" sm="4">
                  <span>Dosing Nitrogen</span>
                </v-col>
                <v-col cols="12" sm="3">As standard</v-col>
                <v-col cols="12" sm="2" class="px-3">
                  -
                </v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox
                    v-model="form.filling.dosing_nitrogen"
                    class="mx-2"
                    :label="form.filling.dosing_nitrogen == 0 ? 'Not OK' : 'OK'"
                  />
                </v-col>
                <v-col cols="12" sm="4">
                  <span>Pengecekkan Vertical & Horizontal Seal</span>
                  <br />
                  <span class="caption black--text">
                    (Menggunakan kertas karbon)
                  </span>
                  <br />
                  <div>
                    <span class="caption black--text">
                      *Kertas karbon
                    </span>
                    <v-btn icon>
                      <v-icon>mdi-camera</v-icon>
                    </v-btn>
                  </div>
                </v-col>
                <v-col cols="12" sm="3">As standard</v-col>
                <v-col cols="12" sm="2" class="px-3">
                  <span>-</span>
                </v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox
                    v-model="form.filling.ver_hor_seal_check"
                    class="mx-2"
                    :label="
                      form.filling.ver_hor_seal_check == 0 ? 'Not OK' : 'OK'
                    "
                  />
                </v-col>
              </v-row>
            </v-window-item>
            <v-window-item :value="4">
              <v-row
                class="primary--text subtitle-1 font-weight-medium"
                align="center"
              >
                <v-col cols="12" sm="4">
                  <span>Setting X-Ray</span>
                  <br />
                  <span class="caption black--text">
                    (Menu setting X-Ray)
                  </span>
                </v-col>
                <v-col cols="12" sm="3">As programme</v-col>
                <v-col cols="12" sm="2">-</v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox
                    v-model="form.packing.set_xray"
                    class="mx-2"
                    :label="form.packing.set_xray == 0 ? 'Not OK' : 'OK'"
                  />
                </v-col>
                <v-col cols="12" sm="4">
                  <span>Ganti Scoop</span>
                  <br />
                  <span class="caption black--text">
                    (Nomor Code Scop)
                  </span>
                </v-col>
                <v-col cols="12" sm="3">As standard</v-col>
                <v-col cols="12" sm="2" class="px-3">
                  <v-text-field
                    v-model="form.packing.scoop_change.number"
                    :rules="[v => !!v || 'This is required']"
                    outlined
                  />
                </v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox
                    v-model="form.packing.scoop_change.status"
                    class="mx-2"
                    :label="
                      form.packing.scoop_change.status == 0 ? 'Not OK' : 'OK'
                    "
                  />
                </v-col>
                <v-col cols="12" sm="4">
                  <span>Ganti Setting Code Folding Box</span>
                  <br />
                  <span class="caption black--text">
                    (Standard Coding Folding Box)
                  </span>
                  <br />
                  <div>
                    <span class="caption black--text">
                      *Cetakan coding folding box
                    </span>
                    <v-btn icon>
                      <v-icon>mdi-camera</v-icon>
                    </v-btn>
                  </div>
                </v-col>
                <v-col cols="12" sm="3">As standard</v-col>
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
                <v-col cols="12" sm="3">
                  <v-checkbox
                    v-model="form.packing.set_code_folding_box.status"
                    class="mx-2"
                    :label="
                      form.packing.set_code_folding_box.status == 0
                        ? 'Not OK'
                        : 'OK'
                    "
                  />
                </v-col>
                <v-col cols="12" sm="4">
                  <span>Setting Code Outer Carton</span>
                  <br />
                  <span class="caption black--text">
                    (Standard Coding Outer Carton)
                  </span>
                  <br />
                  <div>
                    <span class="caption black--text">
                      *Cetakan coding outer carton
                    </span>
                    <v-btn icon>
                      <v-icon>mdi-camera</v-icon>
                    </v-btn>
                  </div>
                </v-col>
                <v-col cols="12" sm="3">As standard</v-col>
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
                <v-col cols="12" sm="3">
                  <v-checkbox
                    v-model="form.packing.set_code_outer_carton.status"
                    class="mx-2"
                    :label="
                      form.packing.set_code_outer_carton.status == 0
                        ? 'Not OK'
                        : 'OK'
                    "
                  />
                </v-col>
                <v-col cols="12" sm="4">
                  <span>Stock Glue Folding Box</span>
                </v-col>
                <v-col cols="12" sm="3">As target level</v-col>
                <v-col cols="12" sm="2">
                  -
                </v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox
                    v-model="form.packing.stock_glue_folding_box"
                    class="mx-2"
                    :label="
                      form.packing.stock_glue_folding_box == 0 ? 'Not OK' : 'OK'
                    "
                  />
                </v-col>
                <v-col cols="12" sm="4">
                  <span>Stock Tinta Print Outer Carton</span>
                </v-col>
                <v-col cols="12" sm="3">As target level</v-col>
                <v-col cols="12" sm="2">
                  -
                </v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox
                    v-model="form.packing.stock_int_outer_carbon"
                    class="mx-2"
                    :label="
                      form.packing.stock_int_outer_carbon == 0 ? 'Not OK' : 'OK'
                    "
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
export default {
  middleware: ['user'],
  data() {
    return {
      step: 1,
      title: 'WEIGHING AREA',
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
      this.save()
      this.step++
    },
    submit() {
      if (this.$refs.formPrepare.validate()) {
        this.save()
        this.$router.push('/inspection')
      }
    },
    draft() {
      this.save()
      this.$router.push('/inspection')
    }
  }
}
</script>
