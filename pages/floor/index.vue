<template>
  <v-container id="report" fluid>
    <v-card class="mb-3" flat>
      <v-card-title>
        <div>
          <span class="title">Conveyor 11 | Fixing Conveyor 11</span>
          <br />
          <span class="caption">1 Des 2018 | 3 Des 2019</span>
        </div>
        <v-spacer />
        <v-btn
          class="text-none grey lighten-1"
          large
          text
          disabled
          @click="dialogFixReport = true"
        >
          <v-icon>done_all</v-icon>
          <span class="ml-3 font-weight-bold">Fixed</span>
        </v-btn>
      </v-card-title>
      <v-divider />
      <v-card-title>
        <div>
          <span class="subtitle-1 grey--text">
            Problem : Kerusakan pada conveyor no 11, menyebabkan mesin mati
          </span>
          <br />
          <span class="subtitle-1 grey--text">
            Fixing : Kerusakan pada conveyor no 11, menyebabkan mesin mati
          </span>
        </div>
        <v-spacer />
        <v-btn text to="/floor/adsd">
          <v-icon color="primary">mdi-comment-text-outline</v-icon>
          <span class="body-1 ml-1 primary--text">2</span>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <client-only>
          <carousel
            :scroll-per-page="true"
            :per-page-custom="[[320, 1], [600, 1], [960, 1], [1600, 1]]"
            :pagination-padding="3"
            pagination-active-color="#026B88"
            pagination-color="grey"
            class="mt-3 mx-0"
          >
            <slide v-for="i in 2" :key="i">
              <v-img
                aspect-ratio="1"
                max-width="100vw"
                max-height="30vh"
                src="https://asset.kompas.com/crop/0x8:800x541/750x500/data/photo/2017/06/03/2741644439.jpg"
              />
            </slide>
          </carousel>
        </client-only>
      </v-card-text>
    </v-card>
    <v-card v-for="item in 3" :key="item" flat class="mb-3">
      <v-card-title>
        <div>
          <span class="title">Conveyor 11</span>
          <br />
          <span class="caption">1 Des 2018</span>
        </div>
        <v-spacer />
        <v-btn
          class="text-none primary lighten-1"
          large
          text
          @click="dialogFixReport = true"
        >
          <v-icon>done_all</v-icon>
          <span class="ml-3 font-weight-bold">Open</span>
        </v-btn>
      </v-card-title>
      <v-divider />
      <v-card-title>
        <div>
          <span class="subtitle-1 grey--text">
            Problem : Kerusakan pada conveyor no 11, menyebabkan mesin mati
          </span>
          <br />
          <span class="subtitle-1 grey--text">
            Fixing : -
          </span>
        </div>
        <v-spacer />
        <v-btn text>
          <v-icon color="primary">mdi-comment-text-outline</v-icon>
          <span class="body-1 ml-1 primary--text">2</span>
        </v-btn>
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
        @click="dialogNewReport = true"
      >
        <v-icon>add</v-icon>
      </v-btn>
    </v-fab-transition>
    <v-dialog
      v-model="dialogNewReport"
      fullscreen
      transition="slide-y-reverse-transition"
    >
      <v-card>
        <v-card-title class="primary white--text">
          <v-spacer />
          <span class="title">POST NEW REPORT</span>
          <v-spacer />
        </v-card-title>
        <v-card-text class="mt-3">
          <v-text-field v-model="newPost.title" outlined label="Title" />
          <v-textarea
            v-model="newPost.description"
            outlined
            label="Description"
            auto-grow
          />
          <v-file-input
            v-model="newPost.image"
            accept="image/*"
            label="Take a picture"
            outlined
            prepend-icon="mdi-camera"
          />
        </v-card-text>
        <v-card-actions class="px-5">
          <v-spacer />
          <v-btn
            text
            color="warning"
            class="text-none"
            @click="dialogNewReport = false"
          >
            Cancel
          </v-btn>
          <v-btn class="primary font-weight-bold text-none" @click="send()">
            Send
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog
      v-model="dialogFixReport"
      fullscreen
      transition="slide-y-reverse-transition"
    >
      <v-card>
        <v-card-title class="primary white--text">
          <v-spacer />
          <span class="title">POST FIXING REPORT</span>
          <v-spacer />
        </v-card-title>
        <v-card-text class="mt-3">
          <v-text-field outlined label="Title" />
          <v-textarea outlined label="Description" auto-grow />
        </v-card-text>
        <v-card-actions class="px-5">
          <v-spacer />
          <v-btn
            text
            color="warning"
            class="text-none"
            @click="dialogFixReport = false"
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
  middleware: ['user'],
  data() {
    return {
      dialogNewReport: false,
      dialogFixReport: false,
      newPost: {
        title: null,
        description: null,
        image: null
      },
      fixingPost: {
        idPost: null,
        title: null,
        description: null,
        image: null
      }
    }
  },
  methods: {
    send() {
      console.log(this.newPost)
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
.VueCarousel-slide {
  position: relative;
}
.VueCarousel-pagination {
  margin-top: -15px !important;
  text-align: left !important;
}
.VueCarousel {
  margin: 0px 25px 0px 25px;
}
.VueCarousel-dot-container {
  margin-top: 0px !important;
}
</style>
