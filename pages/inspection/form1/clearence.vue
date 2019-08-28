<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="10" sm="10" class="text-center title primary--text">
        CLEARENCE PrO Produk Sebelumnya
      </v-col>
      <v-col cols="10" sm="10" class="text-center title primary--text">
        {{ title }}
      </v-col>
      <v-col cols="10" sm="10">
        <v-row class="primary--text subtitle-1 font-weight-bold">
          <v-col cols="12" sm="6">Parameter Cek</v-col>
          <v-col cols="12" sm="3">Standart</v-col>
          <v-col cols="12" sm="3">Status</v-col>
        </v-row>
        <v-window v-model="step">
          <v-window-item :value="1">
            <v-form>
              <v-row
                class="primary--text subtitle-1 font-weight-medium"
                align="center"
              >
                <v-col cols="12" sm="6">Lembar PrO Produk Sebelumnya</v-col>
                <v-col cols="12" sm="3">Kosong</v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox class="mx-2" label="Not OK" />
                </v-col>
                <v-col cols="12" sm="6">Sisa Material</v-col>
                <v-col cols="12" sm="3">Kosong</v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox class="mx-2" label="Not OK" />
                </v-col>
                <v-col cols="12" sm="6">Peralatan Menimbang</v-col>
                <v-col cols="12" sm="3">
                  Bersih & Terverifikasi (*JIKA JALAN ALERGEN)
                </v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox class="mx-2" label="Not OK" />
                </v-col>
                <v-col cols="12" sm="6">Batu Anak Timbang</v-col>
                <v-col cols="12" sm="3">Tersedia</v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox class="mx-2" label="Not OK" />
                </v-col>
                <v-col cols="12" sm="6">Sampah</v-col>
                <v-col cols="12" sm="3">Kosong</v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox class="mx-2" label="Not OK" />
                </v-col>
              </v-row>
            </v-form>
          </v-window-item>
          <v-window-item :value="2">
            <v-form>
              <v-row
                class="primary--text subtitle-1 font-weight-medium"
                align="center"
              >
                <v-col cols="12" sm="6">Last Batch</v-col>
                <v-col cols="12" sm="3">Confirm</v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox class="mx-2" label="Not OK" />
                </v-col>
                <v-col cols="12" sm="6">Conveyor</v-col>
                <v-col cols="12" sm="3">Kosong</v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox class="mx-2" label="Not OK" />
                </v-col>
                <v-col cols="12" sm="6">Blending sudah dilakukan</v-col>
                <v-col cols="12" sm="3">Sesuai Matrix</v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox class="mx-2" label="Not OK" />
                </v-col>
                <v-col cols="12" sm="6">Vacuum Cleaner</v-col>
                <v-col cols="12" sm="3">Bersih</v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox class="mx-2" label="Not OK" />
                </v-col>
                <v-col cols="12" sm="6">Screen Dumping Station</v-col>
                <v-col cols="12" sm="3">Utuh</v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox class="mx-2" label="Not OK" />
                </v-col>
                <v-col cols="12" sm="6">Blender</v-col>
                <v-col cols="12" sm="3">Kosong</v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox class="mx-2" label="Not OK" />
                </v-col>
                <v-col cols="12" sm="6">Rotary Magnet</v-col>
                <v-col cols="12" sm="3">Kosong</v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox class="mx-2" label="Not OK" />
                </v-col>
                <v-col cols="12" sm="6">
                  Vibro Sifter & Tailing Chute
                </v-col>
                <v-col cols="12" sm="3">Kosong & Utuh</v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox class="mx-2" label="Not OK" />
                </v-col>
                <v-col cols="12" sm="6">Sampah</v-col>
                <v-col cols="12" sm="3">Kosong</v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox class="mx-2" label="Not OK" />
                </v-col>
              </v-row>
            </v-form>
          </v-window-item>
          <v-window-item :value="3">
            <v-form>
              <v-row
                class="primary--text subtitle-1 font-weight-medium"
                align="center"
              >
                <v-col cols="12" sm="6">Auto Sampler</v-col>
                <v-col cols="12" sm="3">Kosong</v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox class="mx-2" label="Not OK" />
                </v-col>
                <v-col cols="12" sm="6">Hopper Filling</v-col>
                <v-col cols="12" sm="3">Kosong</v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox class="mx-2" label="Not OK" />
                </v-col>
                <v-col cols="12" sm="6">Sisa Aluminium Foil</v-col>
                <v-col cols="12" sm="3">Kosong</v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox class="mx-2" label="Not OK" />
                </v-col>
                <v-col cols="12" sm="6">Rejection Check Weigher</v-col>
                <v-col cols="12" sm="3">Kosong</v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox class="mx-2" label="Not OK" />
                </v-col>
                <v-col cols="12" sm="6">Conveyor</v-col>
                <v-col cols="12" sm="3">Kosong</v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox class="mx-2" label="Not OK" />
                </v-col>
                <v-col cols="12" sm="6">Sample FG</v-col>
                <v-col cols="12" sm="3">Kosong</v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox class="mx-2" label="Not OK" />
                </v-col>
                <v-col cols="12" sm="6">Reject FG</v-col>
                <v-col cols="12" sm="3">Kosong</v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox class="mx-2" label="Not OK" />
                </v-col>
                <v-col cols="12" sm="6">Rejected Powder</v-col>
                <v-col cols="12" sm="3">Kosong</v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox class="mx-2" label="Not OK" />
                </v-col>
              </v-row>
            </v-form>
          </v-window-item>
          <v-window-item :value="4">
            <v-form>
              <v-row
                class="primary--text subtitle-1 font-weight-medium"
                align="center"
              >
                <v-col cols="12" sm="6">Lembar PrO Produk Sebelumnya</v-col>
                <v-col cols="12" sm="3">Standart</v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox class="mx-2" label="Not OK" />
                </v-col>
                <v-col cols="12" sm="6">Sisa Material</v-col>
                <v-col cols="12" sm="3">Standart</v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox class="mx-2" label="Not OK" />
                </v-col>
                <v-col cols="12" sm="6">Peralatan Menimbang</v-col>
                <v-col cols="12" sm="3">Standart</v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox class="mx-2" label="Not OK" />
                </v-col>
                <v-col cols="12" sm="6">Batu Anak Timbang</v-col>
                <v-col cols="12" sm="3">Standart</v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox class="mx-2" label="Not OK" />
                </v-col>
                <v-col cols="12" sm="6">Sampah</v-col>
                <v-col cols="12" sm="3">Standart</v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox class="mx-2" label="Not OK" />
                </v-col>
              </v-row>
            </v-form>
          </v-window-item>
        </v-window>
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
          @click="step === 4 ? submit() : save()"
        >
          {{ step === 4 ? 'submit' : 'next' }}
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      step: 1,
      title: 'WEIGHING AREA'
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
  methods: {
    save() {
      this.step++
    },
    discard() {
      this.$router.push('/inspection')
    },
    submit() {}
  }
}
</script>
