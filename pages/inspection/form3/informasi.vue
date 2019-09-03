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
        Informasi Produksi
      </v-col>
      <v-col cols="10" sm="10" class="text-center title primary--text pt-0">
      </v-col>
      <v-col cols="10" sm="10">
        <v-form ref="thirdFormInformation" lazy-validation>
          <v-menu
            ref="inputDate"
            v-model="datePicker"
            :close-on-content-click="true"
            transition="scale-transition"
            offset-y
            full-width
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="form.date"
                :rules="[v => v !== null || 'This field is required']"
                label="Tanggal"
                required
                outlined
                append-icon="mdi-calendar"
                readonly
                v-on="on"
              />
            </template>
            <v-date-picker
              v-if="datePicker"
              v-model="form.date"
              reactive
              no-title
              scrollable
            />
          </v-menu>
          <v-text-field
            v-model="form.product_name"
            :rules="[v => v !== null || 'This field is required']"
            label="Nama Produk"
            required
            outlined
          />
          <v-text-field
            v-model="form.size"
            :rules="[v => v !== null || 'This field is required']"
            label="Size"
            required
            outlined
          />
          <v-text-field
            v-model="form.pro_no"
            :rules="[v => v !== null || 'This field is required']"
            label="PO No"
            required
            outlined
          />
          <v-text-field
            v-model="form.batch_no"
            :rules="[v => v !== null || 'This field is required']"
            label="Batch"
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
      datePicker: false,
      form: {
        date: null,
        product_name: null,
        size: null,
        pro_no: null,
        batch_no: null
      }
    }
  },
  created() {
    if (process.client) {
      const form = localStorage.getItem(constant.THIRD_FORM_I_PRODUCTION)
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
      if (this.$refs.thirdFormInformation.validate()) {
        this.save()
        this.$router.push('/inspection')
      }
    },
    save() {
      localStorage.setItem(
        constant.THIRD_FORM_I_PRODUCTION,
        JSON.stringify(this.form)
      )
    }
  }
}
</script>
