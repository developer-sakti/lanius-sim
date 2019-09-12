<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="10" sm="10" class="text-center title primary--text py-0">
        CLEARANCE PrO Produk Sebelumnya
      </v-col>
      <v-col
        cols="10"
        sm="10"
        class="text-center subtitle-2 primary--text pt-0 font-weight-bold"
      >
        {{ title }}
      </v-col>
      <v-col cols="10" sm="10">
        <v-row class="primary--text subtitle-1 font-weight-bold">
          <v-col cols="12" sm="6">Parameter Cek</v-col>
          <v-col cols="12" sm="3">Standard</v-col>
          <v-col cols="12" sm="3">Status</v-col>
        </v-row>
        <v-form ref="formClearance">
          <v-window v-model="step">
            <v-window-item :value="1">
              <v-row
                class="primary--text subtitle-1 font-weight-medium"
                align="center"
              >
                <v-col cols="12" sm="6">Lembar PrO Produk Sebelumnya</v-col>
                <v-col cols="12" sm="3">Kosong</v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox
                    v-model="form.weighing.i_previous_pro"
                    :true-value="1"
                    :false-value="0"
                    class="mx-2"
                  />
                </v-col>
                <v-col cols="12" sm="6">Sisa Material</v-col>
                <v-col cols="12" sm="3">Kosong</v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox
                    v-model="form.weighing.material_residu"
                    :true-value="1"
                    :false-value="0"
                    class="mx-2"
                  />
                </v-col>
                <v-col cols="12" sm="6">Peralatan Menimbang</v-col>
                <v-col cols="12" sm="3">
                  Bersih & Terverifikasi (*JIKA JALAN ALERGEN)
                </v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox
                    v-model="form.weighing.weight_equipment"
                    :true-value="1"
                    :false-value="0"
                    class="mx-2"
                  />
                </v-col>
                <v-col cols="12" sm="6">Batu Anak Timbang</v-col>
                <v-col cols="12" sm="3">Tersedia</v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox
                    v-model="form.weighing.weight_rock_child"
                    :true-value="1"
                    :false-value="0"
                    class="mx-2"
                  />
                </v-col>
                <v-col cols="12" sm="6">Sampah</v-col>
                <v-col cols="12" sm="3">Kosong</v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox
                    v-model="form.weighing.rubbish"
                    :true-value="1"
                    :false-value="0"
                    class="mx-2"
                  />
                </v-col>
              </v-row>
            </v-window-item>
            <v-window-item :value="2">
              <v-row
                class="primary--text subtitle-1 font-weight-medium"
                align="center"
              >
                <v-col cols="12" sm="6">Last Batch</v-col>
                <v-col cols="12" sm="3">Confirm</v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox
                    v-model="form.d_b_rm_sa.last_batch"
                    :true-value="1"
                    :false-value="0"
                    class="mx-2"
                  />
                </v-col>
                <v-col cols="12" sm="6">Conveyor</v-col>
                <v-col cols="12" sm="3">Kosong</v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox
                    v-model="form.d_b_rm_sa.conveyor"
                    :true-value="1"
                    :false-value="0"
                    class="mx-2"
                  />
                </v-col>
                <v-col cols="12" sm="6">Blending sudah dilakukan</v-col>
                <v-col cols="12" sm="3">Sesuai Matrix</v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox
                    v-model="form.d_b_rm_sa.is_blending_done"
                    :true-value="1"
                    :false-value="0"
                    class="mx-2"
                  />
                </v-col>
                <v-col cols="12" sm="6">Vacuum Cleaner</v-col>
                <v-col cols="12" sm="3">Bersih</v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox
                    v-model="form.d_b_rm_sa.vacum_cleaner"
                    :true-value="1"
                    :false-value="0"
                    class="mx-2"
                  />
                </v-col>
                <v-col cols="12" sm="6">Screen Dumping Station</v-col>
                <v-col cols="12" sm="3">Utuh</v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox
                    v-model="form.d_b_rm_sa.screen_dumping_station"
                    :true-value="1"
                    :false-value="0"
                    class="mx-2"
                  />
                </v-col>
                <v-col cols="12" sm="6">Blender</v-col>
                <v-col cols="12" sm="3">Kosong</v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox
                    v-model="form.d_b_rm_sa.blender"
                    :true-value="1"
                    :false-value="0"
                    class="mx-2"
                  />
                </v-col>
                <v-col cols="12" sm="6">Rotary Magnet</v-col>
                <v-col cols="12" sm="3">Kosong</v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox
                    v-model="form.d_b_rm_sa.rotary_magnet"
                    :true-value="1"
                    :false-value="0"
                    class="mx-2"
                  />
                </v-col>
                <v-col cols="12" sm="6">
                  Vibro Sifter & Tailing Chute
                </v-col>
                <v-col cols="12" sm="3">Kosong & Utuh</v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox
                    v-model="form.d_b_rm_sa.vibro_tailing"
                    :true-value="1"
                    :false-value="0"
                    class="mx-2"
                  />
                </v-col>
                <v-col cols="12" sm="6">Sampah</v-col>
                <v-col cols="12" sm="3">Kosong</v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox
                    v-model="form.d_b_rm_sa.rubbish"
                    :true-value="1"
                    :false-value="0"
                    class="mx-2"
                  />
                </v-col>
              </v-row>
            </v-window-item>
            <v-window-item :value="3">
              <v-row
                class="primary--text subtitle-1 font-weight-medium"
                align="center"
              >
                <v-col cols="12" sm="6">Auto Sampler</v-col>
                <v-col cols="12" sm="3">Kosong</v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox
                    v-model="form.filling.auto_sampler"
                    :true-value="1"
                    :false-value="0"
                    class="mx-2"
                  />
                </v-col>
                <v-col cols="12" sm="6">Hopper Filling</v-col>
                <v-col cols="12" sm="3">Kosong</v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox
                    v-model="form.filling.hopper_filling"
                    :true-value="1"
                    :false-value="0"
                    class="mx-2"
                  />
                </v-col>
                <v-col cols="12" sm="6">Sisa Aluminium Foil</v-col>
                <v-col cols="12" sm="3">Kosong</v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox
                    v-model="form.filling.aluminium_foil_residu"
                    :true-value="1"
                    :false-value="0"
                    class="mx-2"
                  />
                </v-col>
                <v-col cols="12" sm="6">Rejection Check Weigher</v-col>
                <v-col cols="12" sm="3">Kosong</v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox
                    v-model="form.filling.rejection_check_weigher"
                    :true-value="1"
                    :false-value="0"
                    class="mx-2"
                  />
                </v-col>
                <v-col cols="12" sm="6">Conveyor</v-col>
                <v-col cols="12" sm="3">Kosong</v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox
                    v-model="form.filling.conveyor"
                    :true-value="1"
                    :false-value="0"
                    class="mx-2"
                  />
                </v-col>
                <v-col cols="12" sm="6">Sample FG</v-col>
                <v-col cols="12" sm="3">Kosong</v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox
                    v-model="form.filling.sample_fg"
                    :true-value="1"
                    :false-value="0"
                    class="mx-2"
                  />
                </v-col>
                <v-col cols="12" sm="6">Reject FG</v-col>
                <v-col cols="12" sm="3">Kosong</v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox
                    v-model="form.filling.reject_fg"
                    :true-value="1"
                    :false-value="0"
                    class="mx-2"
                  />
                </v-col>
                <v-col cols="12" sm="6">Rejected Powder</v-col>
                <v-col cols="12" sm="3">Kosong</v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox
                    v-model="form.filling.rejected_powder"
                    :true-value="1"
                    :false-value="0"
                    class="mx-2"
                  />
                </v-col>
              </v-row>
            </v-window-item>
            <v-window-item :value="4">
              <v-row
                class="primary--text subtitle-1 font-weight-medium"
                align="center"
              >
                <v-col cols="12" sm="6">Conveyor</v-col>
                <v-col cols="12" sm="3">Kosong</v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox
                    v-model="form.packing.conveyor"
                    :true-value="1"
                    :false-value="0"
                    class="mx-2"
                  />
                </v-col>
                <v-col cols="12" sm="6">Cartoner</v-col>
                <v-col cols="12" sm="3">Sesuai BOM</v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox
                    v-model="form.packing.cartoner"
                    :true-value="1"
                    :false-value="0"
                    class="mx-2"
                  />
                </v-col>
                <v-col cols="12" sm="6">X-Ray & Rejection</v-col>
                <v-col cols="12" sm="3">Kosong</v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox
                    v-model="form.packing.xray_rejection"
                    :true-value="1"
                    :false-value="0"
                    class="mx-2"
                  />
                </v-col>
                <v-col cols="12" sm="6">Sample FG</v-col>
                <v-col cols="12" sm="3">Kosong</v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox
                    v-model="form.packing.sample_fg"
                    :true-value="1"
                    :false-value="0"
                    class="mx-2"
                  />
                </v-col>
                <v-col cols="12" sm="6">Reject FG</v-col>
                <v-col cols="12" sm="3">Kosong</v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox
                    v-model="form.packing.reject_fg"
                    :true-value="1"
                    :false-value="0"
                    class="mx-2"
                  />
                </v-col>
                <v-col cols="12" sm="6">Reject Powder</v-col>
                <v-col cols="12" sm="3">Kosong</v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox
                    v-model="form.packing.reject_powder"
                    :true-value="1"
                    :false-value="0"
                    class="mx-2"
                  />
                </v-col>
                <v-col cols="12" sm="6">Casepacker</v-col>
                <v-col cols="12" sm="3">Kosong</v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox
                    v-model="form.packing.casepacker"
                    :true-value="1"
                    :false-value="0"
                    class="mx-2"
                  />
                </v-col>
                <v-col cols="12" sm="6">Scoop</v-col>
                <v-col cols="12" sm="3">Sesuai BOM</v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox
                    v-model="form.packing.scoop"
                    :true-value="1"
                    :false-value="0"
                    class="mx-2"
                  />
                </v-col>
              </v-row>
            </v-window-item>
          </v-window>
        </v-form>
      </v-col>
      <v-col cols="10" sm="5" class="pt-0">
        <v-btn block large class="grey lighten-1" dark @click="submit()">
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
          i_previous_pro: 0,
          material_residu: 0,
          weight_equipment: 0,
          weight_rock_child: 0,
          rubbish: 0
        },
        d_b_rm_sa: {
          last_batch: 0,
          conveyor: 0,
          is_blending_done: 0,
          vacum_cleaner: 0,
          screen_dumping_station: 0,
          blender: 0,
          rotary_magnet: 0,
          vibro_tailing: 0,
          rubbish: 0
        },
        filling: {
          auto_sampler: 0,
          hopper_filling: 0,
          aluminium_foil_residu: 0,
          rejection_check_weigher: 0,
          conveyor: 0,
          sample_fg: 0,
          reject_fg: 0,
          rejected_powder: 0
        },
        packing: {
          conveyor: 0,
          cartoner: 0,
          xray_rejection: 0,
          sample_fg: 0,
          reject_fg: 0,
          reject_powder: 0,
          casepacker: 0,
          scoop: 0
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
      const form = localStorage.getItem(
        constant.FISRT_FORM_C_PRO_PREVIOUS_PRODUCT
      )
      if (form !== undefined && form !== null) {
        this.form = { ...JSON.parse(form) }
      }
    }
  },
  methods: {
    save() {
      localStorage.setItem(
        constant.FISRT_FORM_C_PRO_PREVIOUS_PRODUCT,
        JSON.stringify(this.form)
      )
    },
    next() {
      this.save()
      this.step++
    },
    submit() {
      if (this.$refs.formClearance.validate()) {
        this.save()
        this.$router.push('/inspection')
      }
    }
  }
}
</script>
