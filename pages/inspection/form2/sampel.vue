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
        Pengambilan Sampel Rotary Magnet
      </v-col>
    </v-row>
    <v-form ref="secondFormSample" lazy-validation>
      <v-row justify="center" class="mt-3">
        <v-col cols="10" sm="10">
          <v-select
            v-model="form.is_picked"
            :rules="[v => !!v || 'Pengambilan Sampel is required']"
            label="Pengambilan Sampel"
            :items="sampleOption"
            item-text="text"
            item-value="value"
            required
            outlined
          />
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
                v-model="form.time_picked"
                :rules="[v => !!v || 'Jam Pengambilan is required']"
                label="Jam Pengambilan"
                required
                outlined
                append-icon="mdi-clock-outline"
                readonly
                v-on="on"
              />
            </template>
            <v-time-picker
              v-if="timePicker"
              v-model="form.time_picked"
              reactive
              format="24hr"
              use-seconds
              @click:seconds="$refs.inputTime.save(time)"
            />
          </v-menu>
        </v-col>
      </v-row>
    </v-form>
    <v-row justify="center">
      <v-col cols="10" sm="5" class="pt-0">
        <v-btn block large class="grey lighten-1" dark @click="draft()">
          save as draft
        </v-btn>
      </v-col>
      <v-col cols="10" sm="5" class="pt-0">
        <v-btn block large color="primary" @click="store()">submit</v-btn>
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
      form: {
        is_picked: null,
        time_picked: null
      },
      sampleOption: [
        { value: 1, text: 'Ambil' },
        { value: 0, text: 'Tidak ambil' }
      ]
    }
  },
  created() {
    if (process.client) {
      const form = localStorage.getItem(
        constant.SECOND_FORM_ROTARY_MAGNET_SAMPLE
      )
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
      if (this.$refs.secondFormSample.validate()) {
        this.snackbar = true
        this.save()
        this.$router.push('/inspection')
      }
    },
    save() {
      localStorage.setItem(
        constant.SECOND_FORM_ROTARY_MAGNET_SAMPLE,
        JSON.stringify(this.form)
      )
    }
  }
}
</script>
