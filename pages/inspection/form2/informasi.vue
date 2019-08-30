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
        <v-form>
          <v-menu
            ref="inputDate"
            v-model="datePicker"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            full-width
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                label="Tanggal"
                required
                outlined
                append-icon="mdi-calendar"
                readonly
                v-on="on"
              />
            </template>
            <v-date-picker v-if="datePicker" reactive no-title scrollable />
          </v-menu>

          <v-text-field label="Nama Produk" required outlined />
          <v-select
            label="Size"
            required
            outlined
            :items="['100gr', '250gr']"
          />
          <v-text-field label="PO No" required outlined />
          <v-text-field label="Batch" required outlined />
          <v-text-field label="Produk Sebelumnya" required outlined />
          <v-select label="Cleaning" required outlined :items="['CF', 'DCF']" />
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
      datePicker: false
    }
  },
  methods: {
    discard() {
      this.$router.push('/inspection')
    }
  }
}
</script>
