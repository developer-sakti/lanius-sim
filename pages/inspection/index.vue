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
                      CHECKLIST CLEARANCE SMALL SACHET
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
                      :disabled="firstFormPrO === null ? true : false"
                      large
                      color="primary"
                      @click="dialogCloseClearance = true"
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
                    <v-btn
                      :disabled="secondFormPrO === null ? true : false"
                      large
                      color="primary"
                      @click="dialogCloseFilling = true"
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
                    <v-btn
                      :disabled="thirdFormPrO === null ? true : false"
                      large
                      color="primary"
                      @click="dialogClosePacking = true"
                    >
                      submit & close PrO
                    </v-btn>
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
                v-model="widget"
                label="widget"
                :rules="[v => !!v || 'widget is required']"
                outlined
                :items="widgets"
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
                v-model="shift"
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
                    v-model="time"
                    :rules="[v => !!v || 'Jam Pengambilan is required']"
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
                  v-model="time"
                  reactive
                  format="24hr"
                  :allowed-hours="hourAllowed"
                  use-seconds
                  @click:seconds="$refs.inputTime.save(time)"
                />
              </v-menu>
            </v-col>
            <v-col cols="12" sm="5" class="py-0">
              <v-text-field
                v-model="value"
                type="number"
                :rules="[v => !!v || 'Value is required']"
                label="Value"
                outlined
              />
            </v-col>
            <v-col cols="12" sm="5" class="py-0">
              <v-text-field
                v-model="totalValue"
                readonly
                type="number"
                label="Total Value"
                outlined
              />
            </v-col>
            <v-col cols="12" sm="5">
              <v-btn
                block
                :loading="loadingDraft"
                large
                dark
                color="grey"
                class="subtitle-2 font-weight-bold"
                @click="saveSimOne()"
              >
                save as draft
              </v-btn>
            </v-col>
            <v-col cols="12" sm="5">
              <v-btn
                block
                large
                :loading="loadingSubmit"
                color="primary"
                class="subtitle-2 font-weight-bold"
                @click="saveSimTwo()"
              >
                submit to sim2
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-window-item>
    </v-window>
    <v-dialog v-model="dialogCloseClearance" max-width="80vw">
      <v-card>
        <v-card-title class="primary white--text">
          <v-row justify="center">
            <span>SUBMIT FORM</span>
          </v-row>
        </v-card-title>
        <v-card-text>
          <v-form ref="closeProForm1" lazy-validation>
            <v-row>
              <v-col sm="12" cols="12">
                <v-text-field
                  v-model="firstFormReporter.bib_operator"
                  :rules="required"
                  readonly
                  label="BiB Operator"
                  outlined
                />
              </v-col>
              <v-col sm="12" cols="12">
                <v-text-field
                  v-model="firstFormReporter.supervisor"
                  :rules="required"
                  label="Supervisor"
                  outlined
                />
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
        <v-card-actions class="pb-3 pt-0 mt-0">
          <v-spacer />
          <v-btn text class="warning" @click="dialogCloseClearance = false">
            Cancel
          </v-btn>
          <v-btn class="primary" @click="submitFirstForm()">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialogCloseFilling" max-width="80vw">
      <v-card>
        <v-card-title class="primary white--text">
          <v-row justify="center">
            <span>SUBMIT FORM FILLING</span>
          </v-row>
        </v-card-title>
        <v-card-text>
          <v-form ref="closeProForm2" lazy-validation>
            <v-row>
              <v-col sm="9" cols="9" class="pb-0">
                <v-text-field
                  v-model="secondFormReporter.previous_operator.name"
                  :rules="required"
                  readonly
                  label="BiB Operator"
                  outlined
                />
              </v-col>
              <v-col sm="3" cols="3" class="pb-0">
                <v-select
                  v-model="secondFormReporter.previous_operator.shift"
                  :rules="required"
                  :items="shifts"
                  item-text="name"
                  item-value="id"
                  label="Shift"
                  outlined
                />
              </v-col>
              <v-col sm="12" cols="12" class="py-0">
                <v-text-field
                  v-model="secondFormReporter.previous_supervisor"
                  :rules="required"
                  label="Supervisor"
                  outlined
                />
              </v-col>
              <v-col sm="9" cols="9" class="pb-0">
                <v-text-field
                  v-model="secondFormReporter.next_operator.name"
                  :rules="required"
                  label="BiB Operator"
                  outlined
                />
              </v-col>
              <v-col sm="3" cols="3" class="pb-0">
                <v-select
                  v-model="secondFormReporter.next_operator.shift"
                  :rules="required"
                  :items="shifts"
                  item-text="name"
                  item-value="id"
                  label="Shift"
                  outlined
                />
              </v-col>
              <v-col sm="12" cols="12" class="py-0">
                <v-text-field
                  v-model="secondFormReporter.next_supervisor"
                  :rules="required"
                  label="Supervisor"
                  outlined
                />
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
        <v-card-actions class="pb-3 pt-0 mt-0">
          <v-spacer />
          <v-btn text class="warning" @click="dialogCloseFilling = false">
            Cancel
          </v-btn>
          <v-btn class="primary" @click="submitSecondForm()">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialogClosePacking" max-width="80vw">
      <v-card>
        <v-card-title class="primary white--text">
          <v-row justify="center">
            <span>SUBMIT FORM PACKING</span>
          </v-row>
        </v-card-title>
        <v-card-text>
          <v-form ref="closeProForm3" lazy-validation>
            <v-row>
              <v-col sm="9" cols="9" class="pb-0">
                <v-text-field
                  v-model="thirdFormReporter.previous_operator.name"
                  :rules="required"
                  readonly
                  label="BiB Operator"
                  outlined
                />
              </v-col>
              <v-col sm="3" cols="3" class="pb-0">
                <v-select
                  v-model="thirdFormReporter.previous_operator.shift"
                  :rules="required"
                  :items="shifts"
                  item-text="name"
                  item-value="id"
                  label="Shift"
                  outlined
                />
              </v-col>
              <v-col sm="12" cols="12" class="py-0">
                <v-text-field
                  v-model="thirdFormReporter.previous_supervisor"
                  :rules="required"
                  label="Supervisor"
                  outlined
                />
              </v-col>
              <v-col sm="9" cols="9" class="pb-0">
                <v-text-field
                  v-model="thirdFormReporter.next_operator.name"
                  :rules="required"
                  label="BiB Operator"
                  outlined
                />
              </v-col>
              <v-col sm="3" cols="3" class="pb-0">
                <v-select
                  v-model="thirdFormReporter.next_operator.shift"
                  :rules="required"
                  :items="shifts"
                  item-text="name"
                  item-value="id"
                  label="Shift"
                  outlined
                />
              </v-col>
              <v-col sm="12" cols="12" class="py-0">
                <v-text-field
                  v-model="thirdFormReporter.next_supervisor"
                  :rules="required"
                  label="Supervisor"
                  outlined
                />
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
        <v-card-actions class="pb-3 pt-0 mt-0">
          <v-spacer />
          <v-btn text class="warning" @click="dialogClosePacking = false">
            Cancel
          </v-btn>
          <v-btn class="primary" @click="submitThirdForm()">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script>
import constant from '../../constant'
import core from '~/mixins/core'
export default {
  mixins: [core],
  middleware: ['user'],
  data() {
    return {
      menu: 1,
      valid: true,
      loadingDraft: false,
      loadingSubmit: false,
      form1: [
        {
          id: 1,
          subform: 'Informasi Produksi',
          path: '/inspection/form1/informasi'
        },
        {
          id: 2,
          subform: 'CLEARaNCE PrO Produk Sebelumnya',
          path: '/inspection/form1/clearance'
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
      firstFormReporter: {
        bib_operator: null,
        supervisor: null
      },
      secondFormReporter: {
        previous_operator: {
          name: null,
          shift: null
        },
        next_operator: {
          name: null,
          shift: null
        },
        previous_supervisor: null,
        next_supervisor: null
      },
      thirdFormReporter: {
        previous_operator: {
          name: null,
          shift: null
        },
        next_operator: {
          name: null,
          shift: null
        },
        previous_supervisor: null,
        next_supervisor: null
      },
      firstFormPrO: null,
      secondFormPrO: null,
      thirdFormPrO: null,
      dialogCloseClearance: false,
      dialogCloseFilling: false,
      dialogClosePacking: false,
      widgets: [],
      widget: null,
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
      totalValue: 0,
      tempTotalValue: 0,
      timePicker: false,
      datePicker: false,
      time: null,
      hourAllowed: []
    }
  },
  watch: {
    shift(value) {
      this.hourAllowed = []
      if (value === 1) {
        for (let i = 6; i <= 14; i++) {
          this.hourAllowed.push(i)
        }
      } else if (value === 2) {
        for (let i = 14; i <= 22; i++) {
          this.hourAllowed.push(i)
        }
      } else if (value === 3) {
        for (let i = 0; i <= 6; i++) {
          this.hourAllowed.push(i)
        }
        for (let i = 22; i <= 23; i++) {
          this.hourAllowed.push(i)
        }
      }
      this.getTotal()
    },
    widget(value) {
      this.$axios
        .get(process.env.SIM_TWO_API + '/api/categories/?widget=' + value)
        .then(res => {
          this.categories = res.data.results
        })
      this.getTotal()
    },
    category(value) {
      this.$axios
        .get(process.env.SIM_TWO_API + '/api/parameters/?category=' + value)
        .then(res => {
          this.parameters = res.data.results
        })
      this.getTotal()
    },
    parameter() {
      this.getTotal()
    },
    date() {
      this.getTotal()
    },
    value(value) {
      this.totalValue = parseInt(this.tempTotalValue) + parseInt(value)
    }
  },
  created() {
    if (this.user !== null) {
      this.firstFormReporter.bib_operator =
        this.user.firstName + ' ' + this.user.lastName
      this.secondFormReporter.previous_operator.name =
        this.user.firstName + ' ' + this.user.lastName
      this.thirdFormReporter.previous_operator.name =
        this.user.firstName + ' ' + this.user.lastName
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
    getTotal() {
      this.$axios
        .get(
          process.env.SIM_ONE_API +
            '/operationalconditions?date=' +
            this.date +
            '&shift=' +
            this.shift +
            '&widget=' +
            this.widget +
            '&category=' +
            this.category +
            '&parameter=' +
            this.parameter
        )
        .then(res => {
          if (res.data.length === 0) {
            this.totalValue = 0
            this.tempTotalValue = 0
          } else {
            for (let i = 0; i < res.data.length; i++) {
              this.tempTotalValue += res.data[i].value
            }
            this.totalValue = this.tempTotalValue
          }
        })
    },
    setup() {
      this.$axios
        .get(
          process.env.SIM_TWO_API +
            '/api/widgets/?sim=' +
            process.env.SIM_TWO_ID
        )
        .then(res => {
          this.widgets = res.data.results
        })
    },
    saveSimTwo() {
      if (this.$refs.formCondition.validate()) {
        this.$axios
          .post(process.env.SIM_TWO_API + '/bff/submissions', {
            shift: this.shift,
            date: this.date,
            submissions: [
              {
                parameter: this.parameter,
                value: this.totalValue
              }
            ]
          })
          .then(res => {
            console.log(res)
          })
      }
    },
    saveSimOne() {
      this.loadingDraft = true
      if (this.$refs.formCondition.validate()) {
        this.$axios
          .post(process.env.SIM_ONE_API + '/operationalconditions', {
            widget: this.widget,
            category: this.category,
            parameter: this.parameter,
            date: this.date,
            time: this.time,
            shift: this.shift,
            value: this.value
          })
          .then(res => {
            this.loadingDraft = false
            this.$refs.formCondition.reset()
          })
      }
    },
    submitFirstForm() {
      if (this.$refs.closeProForm1.validate()) {
      }
    },
    submitSecondForm() {
      if (this.$refs.closeProForm2.validate()) {
      }
    },
    submitThirdForm() {
      if (this.$refs.closeProForm3.validate()) {
      }
    }
  }
}
</script>
