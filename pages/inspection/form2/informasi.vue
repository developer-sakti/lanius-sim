<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="10" sm="10" class="text-center title primary--text py-0">
        FILLING SACHET MONITORING
      </v-col>
      <v-col
        cols="10"
        sm="10"
        class="text-center subtitle-1 primary--text pt-0 font-weight-bold"
      >
        Informasi Produksi
      </v-col>
      <v-col cols="10" sm="10">
        <v-form ref="secondFormInformation" lazy-validation>
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
                label="Tanggal"
                :rules="[v => !!v || 'Tanggal is required']"
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
            :rules="[v => !!v || 'Nama Produk is required']"
            label="Nama Produk"
            required
            outlined
          />
          <v-select
            v-model="form.size"
            label="Size"
            :rules="[v => !!v || 'Nama Produk is required']"
            required
            outlined
            :items="['100gr', '250gr']"
          />
          <v-text-field
            v-model="form.pro_no"
            label="PO No"
            :rules="[v => !!v || 'PO No is required']"
            required
            outlined
          />
          <v-text-field
            v-model="form.batch_no"
            label="Batch"
            :rules="[v => !!v || 'Batch is required']"
            required
            outlined
          />
          <v-text-field
            v-model="form.previous_product"
            label="Produk Sebelumnya"
            :rules="[v => !!v || 'Produk Sebelumnya is required']"
            required
            outlined
          />
          <v-select
            v-model="form.cleaning"
            label="Cleaning"
            :rules="[v => !!v || 'Cleaning is required']"
            required
            outlined
            :items="['CF', 'DCF']"
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
        batch_no: null,
        previous_product: null,
        cleaning: null
      }
    }
  },
  created() {
    if (process.client) {
      const form = localStorage.getItem(constant.SECOND_FORM_I_PRODUCTION)
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
      if (this.$refs.secondFormInformation.validate()) {
        this.snackbar = true
        this.save()
        this.$router.push('/inspection')
      }
    },
    save() {
      localStorage.setItem(
        constant.SECOND_FORM_I_PRODUCTION,
        JSON.stringify(this.form)
      )
    }
  }
}
</script>
