<template>
  <v-container>
    <v-row justify="center" class="mt-5">
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
        <v-row class="mt-3">
          <v-col cols="12" sm="12" md="12">
            <v-list>
              <v-list-group>
                <template slot="activator">
                  <v-list-item-content>
                    <span class="title blue--text">
                      CHECKLIST CLEARENCE SMALL SACHET
                    </span>
                    <br />
                    <span class="subtitle-1 grey--text">
                      CURRENT PRO :
                      {{ firstFormPrO === null ? '-' : firstFormPrO }}
                    </span>
                  </v-list-item-content>
                </template>
                <v-list-item
                  v-for="item in form1"
                  :key="item.id"
                  :to="item.path"
                >
                  <v-list-item-content class="blue--text">
                    <v-list-item-title class="title">
                      <span>{{ item.subform }}</span>
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content class="blue--text">
                    <v-btn
                      large
                      color="primary"
                      @click="dialogCloseClearence = true"
                    >
                      submit & close PrO
                    </v-btn>
                  </v-list-item-content>
                </v-list-item>
              </v-list-group>
            </v-list>
          </v-col>
          <v-col cols="12" sm="12" md="12">
            <v-list>
              <v-list-group>
                <template slot="activator">
                  <v-list-item-content>
                    <span class="title blue--text">
                      FILLING SACHET MONITORING
                    </span>
                    <br />
                    <span class="subtitle-1 grey--text">
                      CURRENT PRO :
                      {{ secondFormPrO === null ? '-' : secondFormPrO }}
                    </span>
                  </v-list-item-content>
                </template>
                <v-list-item
                  v-for="item in form2"
                  :key="item.id"
                  :to="item.path"
                >
                  <v-list-item-content class="blue--text">
                    <v-list-item-title class="title">
                      <span>{{ item.subform }}</span>
                      <span class="grey--text">{{ item.note }}</span>
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content class="blue--text">
                    <v-btn large color="primary">submit & close PrO</v-btn>
                  </v-list-item-content>
                </v-list-item>
              </v-list-group>
            </v-list>
          </v-col>
          <v-col cols="12" sm="12" md="12">
            <v-list>
              <v-list-group>
                <template slot="activator">
                  <v-list-item-content>
                    <span class="title blue--text">
                      PACKING SACHET MONITORING
                    </span>
                    <br />
                    <span class="subtitle-1 grey--text">
                      CURRENT PRO :
                      {{ thirdFormPrO === null ? '-' : thirdFormPrO }}
                    </span>
                  </v-list-item-content>
                </template>
                <v-list-item
                  v-for="item in form3"
                  :key="item.id"
                  :to="item.path"
                >
                  <v-list-item-content class="blue--text">
                    <v-list-item-title class="title">
                      <span>{{ item.subform }}</span>
                      <span class="grey--text">{{ item.note }}</span>
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content class="blue--text">
                    <v-btn large color="primary">submit & close PrO</v-btn>
                  </v-list-item-content>
                </v-list-item>
              </v-list-group>
            </v-list>
          </v-col>
        </v-row>
      </v-window-item>
      <v-window-item :value="2">
        <v-form ref="formCondition" lazy-validation>
          <v-row class="mt-5" justify="center">
            <v-col cols="12" sm="5" class="py-0">
              <v-select
                v-model="wiget"
                label="Wiget"
                :rules="[v => !!v || 'Wiget is required']"
                outlined
                :items="wigets"
                item-text="name"
                item-value="id"
              />
            </v-col>
            <v-col cols="12" sm="5" class="py-0">
              <v-select
                v-model="category"
                :items="categories"
                :rules="[v => !!v || 'Category is required']"
                item-text="name"
                item-value="id"
                label="Category"
                outlined
              />
            </v-col>
            <v-col cols="12" sm="5" class="py-0">
              <v-select
                v-model="parameter"
                :items="parameters"
                :rules="[v => !!v || 'Parameter is required']"
                item-text="name"
                item-value="id"
                label="Parameter"
                outlined
              />
            </v-col>
            <v-col cols="12" sm="5" class="py-0">
              <v-select
                label="Shift"
                outlined
                :rules="[v => !!v || 'Shift is required']"
                :items="shifts"
                item-text="name"
                item-value="id"
              />
            </v-col>
            <v-col cols="12" sm="5" class="py-0">
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
                    label="Date"
                    :rules="[v => !!v || 'Date is required']"
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
            <v-col cols="12" sm="5" class="py-0">
              <v-text-field
                type="number"
                :rules="[v => !!v || 'Value is required']"
                label="Value"
                outlined
              />
            </v-col>
            <v-col cols="12" sm="10">
              <v-btn
                block
                large
                color="primary"
                class="subtitle-2 font-weight-bold"
                @click="saveSimTwo()"
              >
                Save
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-window-item>
    </v-window>
    <v-dialog v-model="dialogCloseClearence" max-width="80vw">
      <v-card>
        <v-card-title class="primary white--text">
          <v-row justify="center">
            <span>SUBMIT FORM</span>
          </v-row>
        </v-card-title>
        <v-card-text>
          <v-form ref="closeProForm1" v-model="valid" lazy-validation>
            <v-row>
              <v-col sm="12" cols="12">
                <v-text-field label="BIB OPERATOR" outlined />
              </v-col>
              <v-col sm="12" cols="12">
                <v-text-field label="SUPERVISOR" outlined />
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
        <v-card-actions class="pb-3 pt-0 mt-0">
          <v-spacer />
          <v-btn class="warning">Cancel</v-btn>
          <v-btn class="primary">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script>
import constant from '../../constant'
import user from '~/mixins/user'
export default {
  mixins: [user],
  middleware: ['user'],
  data() {
    return {
      menu: 1,
      valid: true,
      form1: [
        {
          id: 1,
          subform: 'Informasi Produksi',
          path: '/inspection/form1/informasi'
        },
        {
          id: 2,
          subform: 'CLEARENCE PrO Produk Sebelumnya',
          path: '/inspection/form1/clearence'
        },
        {
          id: 3,
          subform: 'PREPARE PrO Produk Selanjutnya',
          path: '/inspection/form1/prepare'
        },
        {
          id: 4,
          subform: 'Pemeriksaan kondisi kaca/plastik keras',
          path: '/inspection/form1/kondisikaca'
        },
        {
          id: 5,
          subform: 'Ketidaksesuaian',
          path: '/inspection/form1/ketidaksesuaian'
        }
      ],
      form2: [
        {
          id: 6,
          subform: 'Informasi Produksi',
          note: '',
          path: '/inspection/form2/informasi'
        },
        {
          id: 7,
          subform: 'Kondisi Mesin dan Area Kerja',
          note: '',
          path: '/inspection/form2/kondisi'
        },
        {
          id: 8,
          subform: 'Pengambilan Sampel Rotary Magnet',
          note: '(setiap 1 hari sekali)',
          path: '/inspection/form2/sampel'
        },
        {
          id: 9,
          subform: 'Pemeriksaan Autoquality',
          note: '(awal start dan  per 2 jam)',
          path: '/inspection/form2/autoquality'
        },
        { id: 10, subform: 'Catatan', path: '/inspection/form2/catatan' }
      ],
      form3: [
        {
          id: 11,
          subform: 'Informasi Produksi',
          note: '',
          path: '/inspection/form3/informasi'
        },
        {
          id: 12,
          subform: 'Pemeriksaan Checkweigher dan X-Ray',
          note: '(diisi setiap 2 jam)',
          path: '/inspection/form3/checkxray'
        },
        {
          id: 13,
          subform: 'Pemeriksaan X-Ray',
          note: '(diisi setiap 1 jam)',
          path: '/inspection/form3/xray'
        },
        { id: 14, subform: 'Catatan', path: '/inspection/form3/catatan' }
      ],
      firstFormPrO: null,
      secondFormPrO: null,
      thirdFormPrO: null,
      dialogCloseClearence: false,
      wigets: [],
      wiget: null,
      categories: [],
      category: null,
      parameters: [],
      parameter: null,
      shifts: [
        { id: 1, name: 'Shift 1' },
        { id: 2, name: 'Shift 2' },
        { id: 3, name: 'Shift 3' }
      ],
      shift: null,
      date: null,
      value: null,
      datePicker: false
    }
  },
  watch: {
    wiget(value) {
      // this.$axios
      //   .get(process.env.SIM_TWO_API + '/api/categories/?widget=' + value)
      //   .then(res => {
      //     this.categories = res.data.results
      //   })
    },
    category(value) {
      // this.$axios
      //   .get(process.env.SIM_TWO_API + '/api/parameters/?category=' + value)
      //   .then(res => {
      //     this.parameters = res.data.results
      //   })
    }
  },
  created() {
    if (this.user === null) {
      this.dialogProfile = true
    }
    if (process.client) {
      this.setup()
      const firstForm = localStorage.getItem(constant.FISRT_FORM_I_PRODUCTION)
      if (firstForm !== undefined && firstForm !== null) {
        this.firstFormPrO = JSON.parse(firstForm).pro_no
      }
      const secondForm = localStorage.getItem(constant.SECOND_FORM_I_PRODUCTION)
      if (secondForm !== undefined && secondForm !== null) {
        this.secondFormPrO = JSON.parse(secondForm).pro_no
      }
      const thirdForm = localStorage.getItem(constant.THIRD_FORM_I_PRODUCTION)
      if (thirdForm !== undefined && thirdForm !== null) {
        this.thirdFormPrO = JSON.parse(thirdForm).pro_no
      }
    }
  },
  methods: {
    setup() {
      // this.$axios
      //   .get(
      //     process.env.SIM_TWO_API +
      //       '/api/widgets/?sim=' +
      //       process.env.SIM_TWO_ID
      //   )
      //   .then(res => {
      //     this.wigets = res.data.results
      //   })
    },
    saveSimTwo() {
      // if (this.$refs.formCondition.validate()) {
      //   this.snackbar = true
      //   this.$axios
      //     .post(process.env.SIM_TWO_API + '/bff/submissions', {
      //       shift: this.shift,
      //       date: this.date,
      //       submissions: [
      //         {
      //           parameter: this.parameter,
      //           value: this.value
      //         }
      //       ]
      //     })
      //     .then(res => {
      //       console.log(res)
      //     })
      // }
    }
  }
}
</script>
<style scoped>
* {
  font-family: 'HelveticaNeueLight';
}
</style>
