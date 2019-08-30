<template>
  <v-container id="report" fluid>
    <v-card v-for="item in 3" :key="item" flat class="mb-3">
      <v-card-title>
        <span class="title">Conveyor 11</span>
        <v-spacer />
        <v-btn class="text-none primary lighten-1" large text>
          <v-icon>done_all</v-icon>
          <span class="ml-3 font-weight-bold">Open</span>
        </v-btn>
      </v-card-title>
      <v-divider />
      <v-card-title>
        <span class="subtitle-1 grey--text">
          Kerusakan pada conveyor no 11, menyebabkan mesin mati
        </span>
        <v-spacer />
        <v-icon color="primary">mdi-comment-text-outline</v-icon>
        <span class="body-1 ml-1 primary--text">2</span>
      </v-card-title>
      <v-card-text>
        <v-img
          aspect-ratio="1"
          max-width="100vw"
          max-height="30vh"
          src="https://asset.kompas.com/crop/0x8:800x541/750x500/data/photo/2017/06/03/2741644439.jpg"
        />
      </v-card-text>
    </v-card>
    <v-fab-transition>
      <v-btn
        color="primary"
        fab
        fixed
        dark
        bottom
        right
        class="v-btn--add"
        @click="dialogForm = true"
      >
        <v-icon>add</v-icon>
      </v-btn>
    </v-fab-transition>
    <v-dialog v-model="dialogForm" fullscreen>
      <v-card>
        <v-card-title class="primary white--text">
          <v-spacer />
          <span class="title">POST REPORT</span>
          <v-spacer />
        </v-card-title>
        <v-card-text class="mt-3">
          <v-text-field outlined label="Title" />
          <v-textarea outlined label="Description" auto-grow />
          <span>Take a picture</span>
          <v-btn icon @click="onPickFile">
            <v-icon>mdi-camera</v-icon>
          </v-btn>
          <v-form>
            <input
              ref="eventImage"
              type="file"
              style="display : none"
              accept="image/*"
              @change="onFilePicked"
            />
          </v-form>
        </v-card-text>
        <v-card-actions class="px-5">
          <v-spacer />
          <v-btn
            text
            color="warning"
            class="text-none"
            @click="dialogForm = false"
          >
            Cancel
          </v-btn>
          <v-btn class="primary font-weight-bold text-none">
            Send
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      dialogForm: false
    }
  },
  methods: {
    onPickFile() {
      this.$refs.eventImage.click()
    },
    onFilePicked(event) {
      // const file = event.target.files
    }
  }
}
</script>
<style scoped>
#report .v-btn--add {
  position: fixed;
  bottom: 80px;
  margin: 0 0 16px 32px;
}
</style>
