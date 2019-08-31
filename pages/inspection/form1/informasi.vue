<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="10" sm="10" class="text-center title primary--text pb-0">
        CHECKLIST CLEARENCE SMALL SACHET
      </v-col>
      <v-col
        cols="10"
        sm="10"
        class="text-center subtitle-1 primary--text pt-0 font-weight-bold"
      >
        Informasi Produksi
      </v-col>
      <v-col cols="10" sm="10">
        <v-form ref="form1Info" lazy-validation>
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
            label="Nama Produk"
            :rules="[v => !!v || 'Nama Produk is required']"
            required
            outlined
          />
          <v-text-field
            v-model="form.pro_no"
            label="No PrO"
            :rules="[v => !!v || 'No PrO is required']"
            required
            outlined
          />
          <v-text-field
            v-model="form.batch_no"
            label="No Batch"
            :rules="[v => !!v || 'No Batch is required']"
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
          <v-text-field
            v-model="form.machine"
            label="Mesin"
            :rules="[v => !!v || 'Mesin is required']"
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
        pro_no: null,
        batch_no: null,
        previous_product: null,
        machine: null
      }
    }
  },
  created() {
    if (process.client) {
      const form = localStorage.getItem(constant.FISRT_FORM_I_PRODUCTION)
      if (form !== undefined) {
        this.form = { ...JSON.parse(form) }
      }
    }
  },
  methods: {
    store() {
      if (this.$refs.form1Info.validate()) {
        this.snackbar = true
        this.save()
        this.$router.push('/inspection')
      }
    },
    draft() {
      this.save()
      this.$router.push('/inspection')
    },
    save() {
      localStorage.setItem(
        constant.FISRT_FORM_I_PRODUCTION,
        JSON.stringify(this.form)
      )
    }
  }
}
</script>
