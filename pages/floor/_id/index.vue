<template>
  <v-container id="detail" fluid>
    <v-snackbar
      v-model="snackbar.visible"
      :color="snackbar.color"
      :timeout="3000"
      top
      right
    >
      {{ snackbar.text }}
    </v-snackbar>
    <v-card flat>
      <v-card-title>
        <div>
          <span class="title">
            {{ floor !== null ? floor.title : '' }}
            {{
              floor !== null
                ? floor.fixed !== null
                  ? '| ' + floor.fixed.title
                  : ''
                : ''
            }}
          </span>
          <br />
          <span class="caption">
            {{ floor !== null ? formatDate(floor.date.substring(0, 10)) : '' }}
            {{
              floor !== null
                ? floor.fixed === null
                  ? ''
                  : '| ' + formatDate(floor.fixed.date.substring(0, 10))
                : ''
            }}
          </span>
        </div>
        <v-spacer />
        <v-btn
          :class="
            floor !== null
              ? floor.fixed !== null
                ? 'text-none grey lighten-1'
                : 'text-none primary lighten-1'
              : ''
          "
          large
          text
          :disabled="
            floor !== null ? (floor.fixed !== null ? true : false) : false
          "
          @click="dialogFixReport = true"
        >
          <v-icon>done_all</v-icon>
          <span class="ml-3 font-weight-bold">
            {{
              floor !== null ? (floor.fixed !== null ? 'Fixed' : 'Open') : ''
            }}
          </span>
        </v-btn>
      </v-card-title>
      <v-divider />
      <v-card-title>
        <div>
          <span class="subtitle-1 grey--text">
            Problem : {{ floor !== null ? floor.title : '' }}
          </span>
          <br />
          <span
            v-if="floor !== null && floor.fixed !== null"
            class="subtitle-1 grey--text"
          >
            Fixing :
            {{
              floor !== null
                ? floor.fixed !== null
                  ? floor.fixed.title
                  : ''
                : ''
            }}
          </span>
        </div>
        <v-spacer />
        <v-btn text>
          <v-icon color="primary">mdi-comment-text-outline</v-icon>
          <span class="body-1 ml-1 primary--text">
            {{ floor !== null ? floor.comments.length : '' }}
          </span>
        </v-btn>
      </v-card-title>
      <v-card-text class="pb-0">
        <client-only>
          <carousel
            :scroll-per-page="true"
            :per-page-custom="[[320, 1], [600, 1], [960, 1], [1600, 1]]"
            :pagination-padding="3"
            pagination-active-color="#026B88"
            pagination-color="grey"
            class="mt-3 mx-0"
          >
            <slide v-for="i in images" :key="i">
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
      <v-card-text class="pt-0">
        <span class="font-weigh-bold">Komentar</span>
        <v-list three-line>
          <template v-for="(item, index) in comments">
            <v-list-item :key="index + item.value">
              <v-list-item-avatar>
                <v-img src="/profile.png" />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title v-text="item.sender" />
                <v-list-item-subtitle v-text="item.value" />
              </v-list-item-content>
              <v-list-item-action>
                <span>{{ formatDateTime(item.created_at) }}</span>
              </v-list-item-action>
            </v-list-item>
            <v-divider :key="index" inset />
          </template>
        </v-list>
      </v-card-text>
      <v-form ref="formComment" lazy-validation>
        <v-card-actions class="px-5">
          <v-text-field v-model="value" placeholder="Write . . ." />
          <v-btn icon @click="sendComment()">
            <v-icon>send</v-icon>
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
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
      dialogFixReport: false,
      snackbar: {
        text: null,
        color: 'primary',
        visible: false
      },
      fixingPost: {
        floor: null,
        date: null,
        title: null,
        description: null,
        image: null
      },
      comments: [],
      value: null,
      floor: null,
      images: []
    }
  },
  created() {
    this.fixingPost.date = this.currentDate
    this.fixingPost.floor = this.$route.params.id
    this.setup()
  },
  methods: {
    setup() {
      this.images = []
      this.$axios
        .get(process.env.SIM_ONE_API + '/floors/' + this.$route.params.id)
        .then(res => {
          if (res.status === 200) {
            this.floor = res.data
            this.images.push(res.data.image.url)
            if (res.data.fixed !== null) {
              this.images.push(res.data.fixed.image.url)
            }
            this.comments = res.data.comments
          }
        })
    },
    formatDateTime(param) {
      const temp = param.split('T')
      return this.formatDate(temp[0]) + ' ' + temp[1].substring(0, 8)
    },
    sendComment() {
      if (this.$refs.formComment.validate()) {
        this.$axios
          .post(process.env.SIM_ONE_API + '/comments', {
            sender: this.user.firstName + ' ' + this.user.lastName,
            value: this.value,
            floor: this.$route.params.id
          })
          .then(res => {
            if (res.status === 200) {
              this.comments.push(res.data)
              this.$refs.formComment.reset()
            }
          })
      }
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
                this.setup()
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
    },
    successPost() {
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
    resetFixedForm() {
      this.loading = false
      this.dialogFixReport = false
      this.$refs.formFixingFloor.reset()
    }
  }
}
</script>
<style scoped>
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
