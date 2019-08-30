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
      <v-col cols="10" sm="10">
        <v-form>
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
              reactive
              format="24hr"
              use-seconds
              @click:seconds="$refs.inputTime.save(time)"
            />
          </v-menu>
          <v-select
            label="Kondisi Rejector"
            required
            outlined
            :items="['Hidup', 'Mati']"
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
              <v-text-field outlined />
            </v-col>
            <v-col cols="12" sm="4" class="py-0">
              <v-radio-group row>
                <v-radio label="A" value="A"></v-radio>
                <v-radio label="B" value="B"></v-radio>
                <v-radio label="C" value="C"></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>
          <v-select
            label="Kondisi Mesin"
            required
            outlined
            :items="['Hidup', 'Mati']"
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
                  <v-radio-group row>
                    <v-radio label="Ya" value="1"></v-radio>
                    <v-radio label="Tidak" value="0"></v-radio>
                  </v-radio-group>
                </v-col>
                <v-col cols="10" sm="7" class="py-0">
                  SS = 0.8mm
                </v-col>
                <v-col cols="10" sm="5" class="py-0">
                  <v-radio-group row>
                    <v-radio label="Ya" value="1"></v-radio>
                    <v-radio label="Tidak" value="0"></v-radio>
                  </v-radio-group>
                </v-col>
                <v-col cols="10" sm="7" class="py-0">
                  SS = 0.8mm
                </v-col>
                <v-col cols="10" sm="5" class="py-0">
                  <v-radio-group row>
                    <v-radio label="Ya" value="1"></v-radio>
                    <v-radio label="Tidak" value="0"></v-radio>
                  </v-radio-group>
                </v-col>
                <v-col cols="10" sm="7" class="py-0">
                  SS = 0.8mm
                </v-col>
                <v-col cols="10" sm="5" class="py-0">
                  <v-radio-group row>
                    <v-radio label="Ya" value="1"></v-radio>
                    <v-radio label="Tidak" value="0"></v-radio>
                  </v-radio-group>
                </v-col>
                <v-col cols="10" sm="7" class="py-0">
                  SS = 0.8mm
                </v-col>
                <v-col cols="10" sm="5" class="py-0">
                  <v-radio-group row>
                    <v-radio label="Ya" value="1"></v-radio>
                    <v-radio label="Tidak" value="0"></v-radio>
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
                  <v-radio-group row>
                    <v-radio label="Ya" value="1"></v-radio>
                    <v-radio label="Tidak" value="0"></v-radio>
                  </v-radio-group>
                </v-col>
                <v-col cols="10" sm="7" class="py-0">
                  Glass = 1.5mm
                </v-col>
                <v-col cols="10" sm="5" class="py-0">
                  <v-radio-group row>
                    <v-radio label="Ya" value="1"></v-radio>
                    <v-radio label="Tidak" value="0"></v-radio>
                  </v-radio-group>
                </v-col>
                <v-col cols="10" sm="7" class="py-0">
                  Glass = 1.5mm
                </v-col>
                <v-col cols="10" sm="5" class="py-0">
                  <v-radio-group row>
                    <v-radio label="Ya" value="1"></v-radio>
                    <v-radio label="Tidak" value="0"></v-radio>
                  </v-radio-group>
                </v-col>
                <v-col cols="10" sm="7" class="py-0">
                  Glass = 1.5mm
                </v-col>
                <v-col cols="10" sm="5" class="py-0">
                  <v-radio-group row>
                    <v-radio label="Ya" value="1"></v-radio>
                    <v-radio label="Tidak" value="0"></v-radio>
                  </v-radio-group>
                </v-col>
                <v-col cols="10" sm="7" class="py-0">
                  Glass = 1.5mm
                </v-col>
                <v-col cols="10" sm="5" class="py-0">
                  <v-radio-group row>
                    <v-radio label="Ya" value="1"></v-radio>
                    <v-radio label="Tidak" value="0"></v-radio>
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
                  <v-radio-group row>
                    <v-radio label="Ya" value="1"></v-radio>
                    <v-radio label="Tidak" value="0"></v-radio>
                  </v-radio-group>
                </v-col>
                <v-col cols="10" sm="7" class="py-0">
                  Aluminium = 2.0mm
                </v-col>
                <v-col cols="10" sm="5" class="py-0">
                  <v-radio-group row>
                    <v-radio label="Ya" value="1"></v-radio>
                    <v-radio label="Tidak" value="0"></v-radio>
                  </v-radio-group>
                </v-col>
                <v-col cols="10" sm="7" class="py-0">
                  Aluminium = 2.0mm
                </v-col>
                <v-col cols="10" sm="5" class="py-0">
                  <v-radio-group row>
                    <v-radio label="Ya" value="1"></v-radio>
                    <v-radio label="Tidak" value="0"></v-radio>
                  </v-radio-group>
                </v-col>
                <v-col cols="10" sm="7" class="py-0">
                  Aluminium = 2.0mm
                </v-col>
                <v-col cols="10" sm="5" class="py-0">
                  <v-radio-group row>
                    <v-radio label="Ya" value="1"></v-radio>
                    <v-radio label="Tidak" value="0"></v-radio>
                  </v-radio-group>
                </v-col>
                <v-col cols="10" sm="7" class="py-0">
                  Aluminium = 2.0mm
                </v-col>
                <v-col cols="10" sm="5" class="py-0">
                  <v-radio-group row>
                    <v-radio label="Ya" value="1"></v-radio>
                    <v-radio label="Tidak" value="0"></v-radio>
                  </v-radio-group>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-form>
      </v-col>
      <v-col cols="10" sm="5" class="pt-0">
        <v-btn block large class="grey lighten-1" dark @click="discard()">
          save as draft
        </v-btn>
      </v-col>
      <v-col cols="10" sm="5" class="pt-0">
        <v-btn block large color="primary">submit</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  middleware: ['user'],
  data() {
    return {
      timePicker: false
    }
  },
  methods: {
    discard() {
      this.$router.push('/inspection')
    }
  }
}
</script>
