<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="12" class="text-center title primary--text pb-0">
        PREPARE PrO Produk Sebelumnya
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
        <v-window v-model="step">
          <v-window-item :value="1">
            <v-form>
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
                  <v-checkbox class="mx-2" label="Not OK" />
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
                  <v-text-field outlined />
                </v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox class="mx-2" label="Not OK" />
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
                  <v-checkbox class="mx-2" label="Not OK" />
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
                  <v-checkbox class="mx-2" label="Not OK" />
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
                  <v-text-field outlined />
                </v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox class="mx-2" label="Not OK" />
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
                  <v-checkbox class="mx-2" label="Not OK" />
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
                  <v-checkbox class="mx-2" label="Not OK" />
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
                  <v-checkbox class="mx-2" label="Not OK" />
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
                  <v-text-field outlined />
                </v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox class="mx-2" label="Not OK" />
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
                  <v-text-field outlined />
                </v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox class="mx-2" label="Not OK" />
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
                  <v-text-field outlined />
                </v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox class="mx-2" label="Not OK" />
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
                  <v-text-field outlined />
                </v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox class="mx-2" label="Not OK" />
                </v-col>
                <v-col cols="12" sm="4">
                  <span>Dosing Nitrogen</span>
                </v-col>
                <v-col cols="12" sm="3">As standard</v-col>
                <v-col cols="12" sm="2" class="px-3">
                  -
                </v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox class="mx-2" label="Not OK" />
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
                  <v-checkbox class="mx-2" label="Not OK" />
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
                  <v-text-field outlined />
                </v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox class="mx-2" label="Not OK" />
                </v-col>
                <v-col cols="12" sm="4">
                  <span>Ganti Setting Code Folding Boxu</span>
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
                  <v-text-field outlined />
                </v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox class="mx-2" label="Not OK" />
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
                  <v-text-field outlined />
                </v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox class="mx-2" label="Not OK" />
                </v-col>
                <v-col cols="12" sm="4">
                  <span>Stock Glue Folding Box</span>
                </v-col>
                <v-col cols="12" sm="3">As target level</v-col>
                <v-col cols="12" sm="2">
                  -
                </v-col>
                <v-col cols="12" sm="3">
                  <v-checkbox class="mx-2" label="Not OK" />
                </v-col>
                <v-col cols="12" sm="4">
                  <span>Stock Tinta Print Outer Carton</span>
                </v-col>
                <v-col cols="12" sm="3">As target level</v-col>
                <v-col cols="12" sm="2">
                  -
                </v-col>
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
          save as draft
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
  middleware: ['user'],
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
