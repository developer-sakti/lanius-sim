<template>
  <v-container id="report" fluid>
    <v-snackbar
      v-model="snackbar.visible"
      :color="snackbar.color"
      :timeout="3000"
      top
      right
    >
      {{ snackbar.text }}
    </v-snackbar>
    <v-row justify="start" align="center">
      <v-col cols="3" sm="3" class="py-0">
        <v-select
          v-model="sortby"
          :items="sortbys"
          item-text="text"
          item-value="value"
          solo
          background-color="#B3E5FC"
          flat
          label="Urutkan"
        />
      </v-col>
      <v-col cols="3" sm="3" class="py-0">
        <v-select
          v-model="status"
          :items="statuses"
          item-text="text"
          item-value="value"
          solo
          background-color="#BBDEFB"
          flat
          label="Status"
        />
      </v-col>
    </v-row>
    <v-card v-for="floor in floors" :key="floor.id" class="mb-3" flat>
      <v-card-title>
        <div>
          <span class="title">
            {{ floor.title }}
            {{ floor.fixed === null ? '' : '| ' + floor.fixed.title }}
          </span>
          <br />
          <span class="caption">
            {{ formatDate(floor.date.substring(0, 10)) }}
            {{
              floor.fixed === null
                ? ''
                : '| ' + formatDate(floor.fixed.date.substring(0, 10))
            }}
          </span>
        </div>
        <v-spacer />
        <v-btn
          :class="
            floor.fixed !== null
              ? 'text-none grey lighten-1'
              : 'text-none primary lighten-1'
          "
          large
          text
          :disabled="floor.fixed !== null ? true : false"
          @click="showFixingReport(floor.id)"
        >
          <v-icon>done_all</v-icon>
          <span class="ml-3 font-weight-bold">
            {{ floor.fixed !== null ? 'Fixed' : 'Open' }}
          </span>
        </v-btn>
      </v-card-title>
      <v-divider />
      <v-card-title>
        <div>
          <span class="subtitle-1 grey--text">
            Problem : {{ floor.title }}
          </span>
          <br />
          <span v-if="floor.fixed !== null" class="subtitle-1 grey--text">
            Fixing : {{ floor.fixed.title }}
          </span>
        </div>
        <v-spacer />
        <v-btn text :to="'/floor/' + floor.id">
          <v-icon color="primary">mdi-comment-text-outline</v-icon>
          <span class="body-1 ml-1 primary--text">
            {{ floor.comments.length }}
          </span>
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
            <slide v-for="i in floor.images" :key="i">
              <v-img
                aspect-ratio="1"
                max-width="100vw"
                max-height="30vh"
                :src="simOneApi + i"
              />
            </slide>
          </carousel>
        </client-only>
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
          <v-form ref="formNewFloor" lazy-validation>
            <v-text-field
              v-model="newPost.title"
              :rules="required"
              outlined
              label="Title"
            />
            <v-textarea
              v-model="newPost.description"
              :rules="required"
              outlined
              label="Description"
              auto-grow
            />
            <v-file-input
              v-model="newPost.image"
              :rules="required"
              accept="image/*"
              label="Take a picture"
              outlined
              prepend-icon="mdi-camera"
            />
          </v-form>
        </v-card-text>
        <v-card-actions class="px-5">
          <v-spacer />
          <v-btn
            text
            large
            color="warning"
            class="text-none"
            @click="resetNewForm()"
          >
            Cancel
          </v-btn>
          <v-btn
            class="primary font-weight-bold text-none"
            :loading="loading"
            large
            @click="sendNewPost()"
          >
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
          <v-form ref="formFixingFloor">
            <v-text-field
              v-model="fixingPost.title"
              :rules="required"
              outlined
              label="Title"
            />
            <v-textarea
              v-model="fixingPost.description"
              :rules="required"
              outlined
              label="Description"
              auto-grow
            />
            <v-file-input
              v-model="fixingPost.image"
              :rules="required"
              accept="image/*"
              label="Take a picture"
              outlined
              prepend-icon="mdi-camera"
            />
          </v-form>
        </v-card-text>
        <v-card-actions class="px-5">
          <v-spacer />
          <v-btn
            text
            color="warning"
            class="text-none"
            @click="resetFixedForm()"
          >
            Cancel
          </v-btn>
          <v-btn
            class="primary font-weight-bold text-none"
            large
            :loading="loading"
            @click="sendFixingPost()"
          >
            Send
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script>
import core from '~/mixins/core'
export default {
  mixins: [core],
  middleware: ['user'],
  data() {
    return {
      dialogNewReport: false,
      dialogFixReport: false,
      snackbar: {
        text: null,
        color: 'primary',
        visible: false
      },
      newPost: {
        title: null,
        date: null,
        description: null,
        fixed: null,
        image: null
      },
      fixingPost: {
        floor: null,
        date: null,
        title: null,
        description: null,
        image: null
      },
      sortbys: [{ text: 'Terbaru', value: 1 }, { text: 'Terlama', value: 2 }],
      sortby: 1,
      statuses: [
        { text: 'Semua', value: 1 },
        { text: 'Open', value: 2 },
        { text: 'Fixed', value: 3 }
      ],
      status: 1,
      floors: []
    }
  },
  watch: {
    sortby() {
      this.getFloors()
    },
    status() {
      this.getFloors()
    }
  },
  created() {
    this.newPost.date = this.currentDate
    this.fixingPost.date = this.currentDate
    this.getFloors()
  },
  methods: {
    getFloors() {
      this.floors = []
      let sort
      if (this.sortby === 1) {
        sort = '_sort=created_at:DESC'
      } else if (this.sortby === 2) {
        sort = '_sort=created_at:ASC'
      }
      this.$axios.get(process.env.SIM_ONE_API + '/floors?' + sort).then(res => {
        let images
        for (let i = 0; i < res.data.length; i++) {
          images = []
          if (res.data[i].fixed === null) {
            images.push(res.data[i].image.url)
          } else {
            images.push(res.data[i].image.url)
            images.push(res.data[i].fixed.image.url)
          }
          if (this.status === 1) {
            this.floors.push({ ...res.data[i], images })
          } else if (this.status === 2) {
            if (res.data[i].fixed === null) {
              this.floors.push({ ...res.data[i], images })
            }
          } else if (this.status === 3) {
            if (res.data[i].fixed !== null) {
              this.floors.push({ ...res.data[i], images })
            }
          }
        }
      })
    },

    async sendNewPost() {
      if (this.$refs.formNewFloor.validate()) {
        this.loading = true
        // post new floor
        const newPostId = await this.$axios
          .post(process.env.SIM_ONE_API + '/floors', this.newPost)
          .then(res => {
            if (res.status === 200) {
              return res.data.id
            }
          })
        // image upload
        if (newPostId !== undefined) {
          const form = new FormData()
          form.append('files', this.newPost.image)
          form.append('refId', newPostId)
          form.append('ref', 'floor')
          form.append('field', 'image')
          this.$axios
            .post(process.env.SIM_ONE_API + '/upload', form)
            .then(res => {
              if (res.status === 200) {
                this.successPost()
              } else {
                this.failedPost()
              }
              this.resetNewForm()
            })
        } else {
          this.failedPost()
          this.resetNewForm()
        }
      }
    },
    successPost() {
      this.getFloors()
      this.snackbar = {
        text: 'Post send successfully',
        color: 'success',
        visible: true
      }
    },
    failedPost() {
      this.snackbar = {
        text: 'Post send failed',
        color: 'error',
        visible: true
      }
    },
    showFixingReport(id) {
      this.dialogFixReport = true
      this.fixingPost.floor = id
    },
    resetNewForm() {
      this.loading = false
      this.dialogNewReport = false
      this.$refs.formNewFloor.reset()
    },
    resetFixedForm() {
      this.loading = false
      this.dialogFixReport = false
      this.$refs.formFixingFloor.reset()
    },
    async sendFixingPost() {
      if (this.$refs.formFixingFloor.validate()) {
        this.loading = true
        // post new floor
        const fixedPostId = await this.$axios
          .post(process.env.SIM_ONE_API + '/fixeds', this.fixingPost)
          .then(res => {
            if (res.status === 200) {
              return res.data.id
            }
          })
        // image upload
        if (fixedPostId !== undefined) {
          const form = new FormData()
          form.append('files', this.fixingPost.image)
          form.append('refId', fixedPostId)
          form.append('ref', 'fixed')
          form.append('field', 'image')
          this.$axios
            .post(process.env.SIM_ONE_API + '/upload', form)
            .then(res => {
              if (res.status === 200) {
                this.successPost()
              } else {
                this.failedPost()
              }
              this.resetFixedForm()
            })
        } else {
          this.failedPost()
          this.resetFixedForm()
        }
      }
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
