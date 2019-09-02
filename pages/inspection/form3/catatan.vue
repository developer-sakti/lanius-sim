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
        Catatan
      </v-col>
      <v-col cols="10" sm="10">
        <v-form ref="thirdFormNote" lazy-validation>
          <v-textarea
            v-model="form.problem"
            :rules="[v => !!v || 'This is required']"
            label="Masalah"
            required
            outlined
          />
          <v-textarea
            v-model="form.correction"
            :rules="[v => !!v || 'This is required']"
            label="Tindakan Koreksi"
            required
            outlined
          />
          <v-textarea
            v-model="form.record"
            :rules="[v => !!v || 'This is required']"
            label="Rekaman"
            required
            outlined
          />
          <v-text-field
            v-model="form.verificator"
            :rules="[v => !!v || 'This is required']"
            label="Verifikator"
            required
            outlined
          />
        </v-form>
      </v-col>
      <v-col cols="10" sm="5" class="pt-0">
        <v-btn block large class="grey lighten-1" dark @click="draft()">
          save as draft
        </v-btn>
      </v-col>
      <v-col cols="10" sm="5" class="pt-0">
        <v-btn block large color="primary" @click="submit()">submit</v-btn>
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
      form: {
        problem: null,
        correction: null,
        record: null,
        verificator: null
      }
    }
  },
  created() {
    if (process.client) {
      const form = localStorage.getItem(constant.THIRD_FORM_NOTE)
      if (form !== undefined && form !== null) {
        this.form = { ...JSON.parse(form) }
      }
    }
  },
  methods: {
    save() {
      localStorage.setItem(constant.THIRD_FORM_NOTE, JSON.stringify(this.form))
    },
    draft() {
      this.save()
      this.$router.push('/inspection')
    },
    submit() {
      if (this.$refs.thirdFormNote.validate()) {
        this.snackbar = true
        this.save()
        this.$router.push('/inspection')
      }
    }
  }
}
</script>
