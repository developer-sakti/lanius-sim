<template>
  <v-container>
    <v-row justify="center">
      <v-btn-toggle v-model="menu">
        <v-btn
          width="40vw"
          :value="1"
          :class="
            menu == 1
              ? 'primary title font-weight-bold'
              : 'title font-weight-bold'
          "
        >
          SIM 1 FORM
        </v-btn>
        <v-btn
          :value="2"
          width="40vw"
          :class="
            menu == 2
              ? 'primary title font-weight-bold'
              : 'title font-weight-bold'
          "
        >
          KONDISI OPERASIONAL
        </v-btn>
      </v-btn-toggle>
    </v-row>
    <v-window v-model="menu">
      <v-window-item :value="1">
        <v-row class="mt-5 pt-5" justify="center">
          <v-col cols="10" xs="10" sm="10" md="10">
            <v-list>
              <v-list-group>
                <template slot="activator">
                  <v-list-item-content>
                    <span class="headline blue--text">
                      CHECKLIST CLEARANCE SMALL SACHET
                    </span>
                  </v-list-item-content>
                </template>
                <v-list-item v-for="item in 3" :key="item">
                  <v-list-item-content class="blue--text">
                    <v-row align="center">
                      <v-col cols="10" sm="9"
                        >1010131313 (10 Agustus 2019)</v-col
                      >
                      <v-col cols="10" sm="1">
                        <v-btn icon color="primary">
                          <v-icon dark size="40">zoom_in</v-icon>
                        </v-btn>
                      </v-col>
                      <v-col cols="10" sm="1">
                        <v-btn icon color="primary">
                          <v-icon dark size="35"
                            >mdi-cloud-download-outline</v-icon
                          >
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-list-item-content>
                </v-list-item>
              </v-list-group>
            </v-list>
          </v-col>
          <v-col cols="10" xs="10" sm="10" md="10">
            <v-list>
              <v-list-group>
                <template slot="activator">
                  <v-list-item-content>
                    <span class="headline blue--text">
                      FILLING SACHET MONITORING
                    </span>
                  </v-list-item-content>
                </template>
                <v-list-item v-for="item in 3" :key="item">
                  <v-list-item-content class="blue--text">
                    <v-row>
                      <v-col cols="10" sm="9"
                        >1010131313 (10 Agustus 2019)</v-col
                      >
                      <v-col cols="10" sm="1">
                        <v-btn icon color="primary">
                          <v-icon dark size="40">zoom_in</v-icon>
                        </v-btn>
                      </v-col>
                      <v-col cols="10" sm="1">
                        <v-btn text small icon color="primary">
                          <v-icon dark size="35"
                            >mdi-cloud-download-outline</v-icon
                          >
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-list-item-content>
                </v-list-item>
              </v-list-group>
            </v-list>
          </v-col>
          <v-col cols="10" xs="10" sm="10" md="10">
            <v-list>
              <v-list-group>
                <template slot="activator">
                  <v-list-item-content>
                    <span class="headline blue--text">
                      PACKING SACHET MONITORING
                    </span>
                  </v-list-item-content>
                </template>
                <v-list-item v-for="item in 3" :key="item">
                  <v-list-item-content class="blue--text">
                    <v-row>
                      <v-col cols="10" sm="9">
                        1010131313 (10 Agustus 2019)
                      </v-col>
                      <v-col cols="10" sm="1">
                        <v-btn icon color="primary">
                          <v-icon dark size="40">zoom_in</v-icon>
                        </v-btn>
                      </v-col>
                      <v-col cols="10" sm="1">
                        <v-btn text small icon color="primary">
                          <v-icon dark size="35"
                            >mdi-cloud-download-outline</v-icon
                          >
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-list-item-content>
                </v-list-item>
              </v-list-group>
            </v-list>
          </v-col>
        </v-row>
      </v-window-item>
      <v-window-item :value="2">
        <v-form ref="historyFilter" v-model="valid">
          <v-row class="mt-3">
            <v-col cols="3" sm="3" offset-sm="1" class="pl-0 pb-0">
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
                    v-model="date"
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
                  v-model="date"
                  reactive
                  no-title
                  scrollable
                />
              </v-menu>
            </v-col>
            <v-col cols="3" sm="3" class="pb-0">
              <v-select
                v-model="shift"
                :items="shiftOptions"
                item-text="text"
                item-value="value"
                :rules="[v => !!v || 'Shift is required']"
                outlined
                label="Shift"
              />
            </v-col>
          </v-row>
        </v-form>
        <v-row v-if="operationalHistories.length > 0" justify="center">
          <v-col cols="10" sm="10">
            <v-card
              v-for="item in operationalHistories"
              :key="item.id"
              class="card-round mb-3"
              elevation="0"
            >
              <v-card-text class="subtitle-2">
                <v-row>
                  <v-col cols="2" class="py-0">
                    Widget
                  </v-col>
                  <v-col cols="10" class="py-0"> : {{ item.widget }} </v-col>
                  <v-col cols="2" class="py-0">
                    Category
                  </v-col>
                  <v-col cols="10" class="py-0"> : {{ item.category }} </v-col>
                  <v-col cols="2" class="py-0">
                    Parameter
                  </v-col>
                  <v-col cols="10" class="py-0"> : {{ item.parameter }} </v-col>
                  <v-col cols="2" class="py-0">
                    Time
                  </v-col>
                  <v-col cols="10" class="py-0"> : {{ item.time }} </v-col>
                  <v-col cols="2" class="py-0">
                    Value
                  </v-col>
                  <v-col cols="10" class="py-0"> : {{ item.value }} </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row v-else>
          <v-col cols="6" offset-sm="1">
            <v-alert outlined type="info">
              Tidak ada data
            </v-alert>
          </v-col>
        </v-row>
      </v-window-item>
    </v-window>
  </v-container>
</template>
<script>
import core from '~/mixins/core'
export default {
  mixins: [core],
  middleware: ['user'],
  data() {
    return {
      valid: false,
      menu: 1,
      datePicker: null,
      shiftOptions: [
        { text: 'Shift 1', value: 1 },
        { text: 'Shift 2', value: 2 },
        { text: 'Shift 3', value: 3 }
      ],
      date: null,
      shift: null,
      operationalHistories: []
    }
  },
  watch: {
    date() {
      this.getHistory()
    },
    shift() {
      this.getHistory()
    }
  },
  created() {
    this.date = this.currentDate
    this.shift = 1
    this.getHistory()
  },
  methods: {
    getHistory() {
      this.$axios
        .get(
          process.env.SIM_ONE_API +
            '/operationalconditions?date=' +
            this.date +
            '&shift=' +
            this.shift
        )
        .then(res => {
          this.operationalHistories = res.data
        })
    }
  }
}
</script>
<style>
.card-round {
  border: 2px solid #81d4fa !important;
  background: transparent !important;
  border-radius: 5px;
}
</style>
