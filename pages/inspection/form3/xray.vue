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
    <v-row justify="center" align="center">
      <v-col cols="10" sm="6" class="pb-0">
        <span class="primary--text subtitle-1 font-weight-medium">
          Jam Pemeriksaan
        </span>
        <br />
        <span class="caption black--text">
          (Tidak bocor di 35cmHg)
        </span>
      </v-col>
      <v-col cols="10" sm="4" class="pb-0">
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
              placeholder="Picked"
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
      <v-col cols="10" sm="4" class="py-0">
        <v-text-field required outlined />
      </v-col>
      <v-col cols="10" sm="6" class="py-0">
        <span class="primary--text subtitle-1 font-weight-medium">
          Carton box no
        </span>
      </v-col>
      <v-col cols="10" sm="4" class="py-0">
        <v-text-field required outlined />
      </v-col>
      <v-col cols="10" sm="6" class="py-0">
        <span class="primary--text subtitle-1 font-weight-medium">
          Jumlah Sachet False rejection
        </span>
        <br />
        <span class="caption black--text">
          (Catat jumlah produk yang ter-reject namun saat disieve tidak
          ditemukan FM)
        </span>
      </v-col>
      <v-col cols="10" sm="4" class="py-0">
        <v-text-field required outlined />
      </v-col>
      <v-col cols="10" sm="6" class="py-0">
        <span class="primary--text subtitle-1 font-weight-medium">
          Jumlah Sachet Positive rejection
        </span>
        <br />
        <span class="caption black--text">
          (Catat jumlah produk yang ter-reject dan saat disieve ditemukan FM)
        </span>
      </v-col>
      <v-col cols="10" sm="4" class="py-0">
        <v-text-field required outlined />
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
      <v-col cols="10" sm="4" class="py-0">
        <v-text-field required outlined />
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
      <v-col cols="10" sm="4" class="py-0">
        <v-text-field required outlined />
      </v-col>
    </v-row>
    <v-row justify="center">
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
