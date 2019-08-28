<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="10" sm="10" class="text-center title primary--text">
        Pengambilan Sampel Rotary Magnet
      </v-col>
      <v-col cols="10" sm="10">
        <v-select
          label="Pengambilan Sampel"
          :items="['Ambil', 'Tidak Ambil']"
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
            reactive
            format="24hr"
            use-seconds
            @click:seconds="$refs.inputTime.save(time)"
          />
        </v-menu>
      </v-col>
      <v-col cols="10" sm="5" class="pt-0">
        <v-btn block large class="grey lighten-1" dark @click="discard()">
          discard
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
