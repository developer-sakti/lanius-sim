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
        Kondisi Mesin dan Area Kerja
      </v-col>
      <v-col cols="10" sm="10" class="subtitle-1 primary--text pb-0 pt-0">
        Awal Shift
      </v-col>
      <v-col cols="10" sm="10">
        <v-select
          label="Jenis Stopper Filler"
          :items="['refer to SKU']"
          required
          outlined
        />
        <v-text-field label="Kondisi Pisau Cutting" required outlined />
        <v-text-field label="Kondisi Jaw Sealing" required outlined />
      </v-col>
      <v-col cols="10" sm="10" class="subtitle-1 primary--text py-0 my-0">
        Awal Pergantian Produk
      </v-col>
      <v-col cols="10" sm="10">
        <v-select
          label="Jenis Stopper Filler"
          :items="['refer to SKU']"
          required
          outlined
        />
        <v-text-field label="Kondisi Pisau Cutting" required outlined />
        <v-text-field label="Kondisi Jaw Sealing" required outlined />
      </v-col>
      <v-col cols="10" sm="5" class="py-0 my-0">
        <v-btn block large class="grey lighten-1" dark @click="discard()">
          save as draft
        </v-btn>
      </v-col>
      <v-col cols="10" sm="5" class="py-0 my-0">
        <v-btn block large color="primary">submit</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
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
