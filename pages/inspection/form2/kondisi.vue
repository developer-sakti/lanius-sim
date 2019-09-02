<template>
  <v-container>
    <v-form ref="secondFormCondition" lazy-validation>
      <v-row justify="center">
        <v-col cols="10" sm="10" class="text-center title primary--text py-0">
          FILLING SACHET MONITORING
        </v-col>
        <v-col
          cols="10"
          sm="10"
          class="text-center subtitle-1 primary--text py-0 font-weight-bold"
        >
          Kondisi Mesin dan Area Kerja
        </v-col>
        <v-col cols="10" sm="10">
          <v-select
            v-model="form.stopper_filler"
            :rules="[v => !!v || 'Jenis Stopper Filler is required']"
            label="Jenis Stopper Filler"
            :items="['refer to SKU']"
            required
            outlined
          />
          <v-select
            v-model="form.cutting_knife"
            :rules="[v => !!v || 'Kondisi Pisau Cutting is required']"
            label="Kondisi Pisau Cutting"
            required
            outlined
            :items="knifeOption"
            item-text="text"
            item-value="value"
          />
          <v-select
            v-model="form.jaw_seal.status"
            :rules="[v => !!v || 'Kondisi Jaw Sealing is required']"
            label="Kondisi Jaw Sealing"
            required
            outlined
            :items="jawOption"
            item-text="text"
            item-value="value"
          />
        </v-col>
        <v-col cols="10" sm="10" class="pt-0">
          <span class="primary--text">Kondisi Jaw Sealing</span>
          <v-btn icon>
            <v-icon>mdi-camera</v-icon>
          </v-btn>
          <br />
          <span class="grey--text">
            (Lampirkan pengecekkan kertas karbon) - setiap awal jalan
          </span>
        </v-col>
        <v-col cols="10" sm="5" class="py-0 my-0">
          <v-btn block large class="grey lighten-1" dark @click="draft()">
            save as draft
          </v-btn>
        </v-col>
        <v-col cols="10" sm="5" class="py-0 my-0">
          <v-btn block large color="primary" @click="store()">submit</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>
<script>
import constant from '../../../constant'
export default {
  middleware: ['user'],
  data() {
    return {
      form: {
        stopper_filler: null,
        cutting_knife: null,
        jaw_seal: {
          status: null,
          image: null
        }
      },
      knifeOption: [
        { text: 'Baik', value: 1 },
        { text: 'Tidak baik', value: 0 }
      ],
      jawOption: [{ text: 'OK', value: 1 }, { text: 'Not OK', value: 0 }]
    }
  },
  created() {
    if (process.client) {
      const form = localStorage.getItem(constant.SECOND_FORM_MACHINE_CONDITION)
      if (form !== undefined && form !== null) {
        this.form = { ...JSON.parse(form) }
      }
    }
  },
  methods: {
    draft() {
      this.save()
      this.$router.push('/inspection')
    },
    store() {
      if (this.$refs.secondFormCondition.validate()) {
        this.snackbar = true
        this.save()
      }
    },
    save() {
      localStorage.setItem(
        constant.SECOND_FORM_MACHINE_CONDITION,
        JSON.stringify(this.form)
      )
    }
  }
}
</script>
