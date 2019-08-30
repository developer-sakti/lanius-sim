<template>
  <v-container id="detail" fluid>
    <v-card flat>
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
        <v-btn text>
          <v-icon color="primary">mdi-comment-text-outline</v-icon>
          <span class="body-1 ml-1 primary--text">2</span>
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
      <v-card-text class="pt-0">
        <v-list three-line>
          <template v-for="(item, index) in items">
            <v-list-item :key="item.title">
              <v-list-item-avatar>
                <v-img :src="item.avatar"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title v-text="item.title" />
                <v-list-item-subtitle v-text="item.subtitle" />
              </v-list-item-content>
              <v-list-item-action>
                <span>1 Des 2019 12:13:14</span>
              </v-list-item-action>
            </v-list-item>
            <v-divider :key="index" inset />
          </template>
        </v-list>
      </v-card-text>
      <v-card-actions class="px-5">
        <v-text-field placeholder="Write . . ." />
        <v-btn icon>
          <v-icon>send</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>
<script>
export default {
  middleware: ['user'],
  data() {
    return {
      items: [
        {
          avatar: '/profile.png',
          title: 'Budi',
          subtitle: 'letak kerusakannya dimana ?'
        }
      ]
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
