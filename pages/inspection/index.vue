<template>
  <v-container>
    <v-row justify="center" class="mt-5">
      <v-btn-toggle v-model="menu" rounded>
        <v-btn
          width="40vw"
          :value="1"
          :class="
            menu == 1
              ? 'primary title font-weight-bold'
              : 'title font-weight-bold'
          "
        >
          E-SIM FORM
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
        <v-row class="mt-5" justify="center">
          <v-col cols="11" sm="11" md="11">
            <v-card class="card-form-rounded">
              <v-card-text>
                <v-list>
                  <v-list-group>
                    <template slot="activator">
                      <v-list-item-content>
                        <v-row>
                          <v-col cols="2" sm="2">
                            <v-img src="/image/layout/form1.png" />
                          </v-col>
                          <v-col cols="10" sm="10">
                            <span class="title blue--text">
                              CHECKLIST CLEARANCE SMALL SACHET
                            </span>
                            <br />
                            <span class="subtitle-1 grey--text">
                              CURRENT PRO :
                              {{ firstFormPrO === null ? '-' : firstFormPrO }}
                            </span>
                          </v-col>
                        </v-row>
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
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="11" sm="11" md="11">
            <v-card class="card-form-rounded">
              <v-card-text>
                <v-list>
                  <v-list-group>
                    <template slot="activator">
                      <v-list-item-content>
                        <v-row>
                          <v-col cols="2" sm="2">
                            <v-img src="/image/layout/form2.png" />
                          </v-col>
                          <v-col cols="10" sm="10">
                            <span class="title blue--text">
                              FILLING SACHET MONITORING
                            </span>
                            <br />
                            <span class="subtitle-1 grey--text">
                              CURRENT PRO :
                              {{ secondFormPrO === null ? '-' : secondFormPrO }}
                            </span>
                          </v-col>
                        </v-row>
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
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="11" sm="11" md="11">
            <v-card class="card-form-rounded">
              <v-card-text>
                <v-list>
                  <v-list-group>
                    <template slot="activator">
                      <v-list-item-content>
                        <v-row>
                          <v-col cols="2" sm="2">
                            <v-img src="/image/layout/form3.png" />
                          </v-col>
                          <v-col cols="10" sm="10">
                            <span class="title blue--text">
                              PACKING SACHET MONITORING
                            </span>
                            <br />
                            <span class="subtitle-1 grey--text">
                              CURRENT PRO :
                              {{ thirdFormPrO === null ? '-' : thirdFormPrO }}
                            </span>
                          </v-col>
                        </v-row>
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
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-window-item>
      <v-window-item :value="2">
        <v-form ref="formCondition" lazy-validation>
          <v-row class="mt-5" justify="center">
            <v-col cols="12" sm="5" class="py-0">
              <v-select
                v-model="widget"
                label="Widget"
                :rules="[v => !!v || 'Widget is required']"
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
    <v-dialog v-model="dialogCloseClearance" max-width="80vw" persistent>
      <v-card>
        <v-card-title class="primary white--text">
          <v-row justify="center">
            <span>SUBMIT FORM</span>
          </v-row>
        </v-card-title>
        <v-card-text>
          <v-form ref="closeProForm1" lazy-validation>
            <v-row>
              <v-col v-if="firstFormSubmitProgress != 0" cols="12" sm="12">
                <v-progress-linear
                  v-model="firstFormSubmitProgress"
                  color="blue-grey"
                  height="25"
                  striped
                  reactive
                >
                  <template v-slot="{ value }">
                    <strong>{{ Math.ceil(value) }}%</strong>
                  </template>
                </v-progress-linear>
              </v-col>
              <v-col cols="12" sm="12">
                <v-alert v-model="firstFormAlert" type="warning" dismissible>
                  Form belum lengkap
                </v-alert>
              </v-col>
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
          <v-btn
            text
            class="warning"
            :disabled="firstFormSubmitProgress != 0"
            @click="dialogCloseClearance = false"
          >
            Cancel
          </v-btn>
          <v-btn
            class="primary"
            :disabled="firstFormSubmitProgress != 0"
            @click="submitFirstForm()"
          >
            Submit
          </v-btn>
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
              <v-col v-if="secondFormSubmitProgress != 0" cols="12" sm="12">
                <v-progress-linear
                  v-model="secondFormSubmitProgress"
                  color="blue-grey"
                  height="25"
                  striped
                  reactive
                >
                  <template v-slot="{ value }">
                    <strong>{{ Math.ceil(value) }}%</strong>
                  </template>
                </v-progress-linear>
              </v-col>
              <v-col cols="12" sm="12">
                <v-alert v-model="secondFormAlert" type="warning" dismissible>
                  Form belum lengkap
                </v-alert>
              </v-col>
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
              <v-col v-if="thirdFormSubmitProgress != 0" cols="12" sm="12">
                <v-progress-linear
                  v-model="thirdFormSubmitProgress"
                  color="blue-grey"
                  height="25"
                  striped
                  reactive
                >
                  <template v-slot="{ value }">
                    <strong>{{ Math.ceil(value) }}%</strong>
                  </template>
                </v-progress-linear>
              </v-col>
              <v-col cols="12" sm="12">
                <v-alert v-model="thirdFormAlert" type="warning" dismissible>
                  Form belum lengkap
                </v-alert>
              </v-col>
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
          subform: 'CLEARANCE PrO Produk Sebelumnya',
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
      firstFormSubmitProgress: 0,
      firstFormAlert: false,
      secondFormPrO: null,
      secondFormSubmitProgress: 0,
      secondFormAlert: false,
      thirdFormPrO: null,
      thirdFormAlert: false,
      thirdFormSubmitProgress: 0,
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
        this.loadingSubmit = true
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
            this.loadingSubmit = false
            console.log(res)
          })
          .catch(err => {
            this.loadingSubmit = false
            console.log(err)
          })
      }
    },
    saveSimOne() {
      if (this.$refs.formCondition.validate()) {
        this.loadingDraft = true
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
          .catch(err => {
            console.log(err)
            this.loadingDraft = false
          })
      }
    },
    async submitFirstForm() {
      if (this.$refs.closeProForm1.validate()) {
        let firstFormId,
          prevProductId,
          nextProductId,
          nextProductChildId,
          fiberCheckId
        const information = JSON.parse(
          localStorage.getItem(constant.FISRT_FORM_I_PRODUCTION)
        )
        const prevProduct = JSON.parse(
          localStorage.getItem(constant.FISRT_FORM_C_PRO_PREVIOUS_PRODUCT)
        )
        const nextProduct = JSON.parse(
          localStorage.getItem(constant.FISRT_FORM_P_PRO_NEXT_PRODUCT)
        )
        const fiberCheck = JSON.parse(
          localStorage.getItem(constant.FISRT_FORM_FIBER_CHECK)
        )
        const unnormal = JSON.parse(
          localStorage.getItem(constant.FISRT_FORM_UNNORMAL)
        )
        if (
          information !== undefined &&
          information !== null &&
          prevProduct !== undefined &&
          prevProduct !== null &&
          nextProduct !== undefined &&
          nextProduct !== null &&
          fiberCheck !== undefined &&
          fiberCheck !== null &&
          unnormal !== undefined &&
          unnormal !== null
        ) {
          // post first form
          firstFormId = await this.storeForm('/firstforms', {})
        } else {
          this.firstFormAlert = true
        }
        // post first form child
        if (firstFormId !== undefined) {
          await Promise.all([
            this.storeForm('/informationproductions', {
              ...information,
              firstform: firstFormId
            }),
            this.storeForm('/clearencepropreviousproducts', {
              firstform: firstFormId
            }),
            this.storeForm('/ppronextproducts', {
              firstform: firstFormId
            }),
            this.storeForm('/fiberchecks', {
              firstform: firstFormId
            }),
            this.storeForm('/unnormals', {
              ...unnormal,
              firstform: firstFormId
            }),
            this.storeForm('/reporters', {
              ...this.firstFormReporter,
              firstform: firstFormId
            })
          ]).then(res => {
            prevProductId = res[1]
            nextProductId = res[2]
            fiberCheckId = res[3]
          })

          // post previous product child
          if (prevProductId !== undefined) {
            await Promise.all([
              this.storeForm('/weighings', {
                ...prevProduct.weighing,
                clearencepropreviousproduct: prevProductId
              }),
              this.storeForm('/dbrmsas', {
                ...prevProduct.d_b_rm_sa,
                clearencepropreviousproduct: prevProductId
              }),
              this.storeForm('/fillings', {
                ...prevProduct.filling,
                clearencepropreviousproduct: prevProductId
              }),
              this.storeForm('/packings', {
                ...prevProduct.packing,
                clearencepropreviousproduct: prevProductId
              })
            ])
          }

          // post next product child
          if (nextProductId !== undefined) {
            nextProductChildId = await Promise.all([
              this.storeForm('/nextweighings', {
                ...nextProduct.weighing,
                rm_completeness: null,
                ppronextproduct: nextProductId
              }),
              this.storeForm('/nextdbrmsas', {
                ...nextProduct.d_b_rm_sa,
                dumping_rm: null,
                ppronextproduct: nextProductId
              }),
              this.storeForm('/nextfillings', {
                ...nextProduct.filling,
                set_filling: null,
                material_alufoil: null,
                set_code_sachet_fg: null,
                set_net_weight: null,
                ver_hor_seal_check: null,
                ppronextproduct: nextProductId
              }),
              this.storeForm('/nextpackings', {
                ...nextProduct.packing,
                scoop_change: null,
                set_code_folding_box: null,
                set_code_outer_carton: null,
                ppronextproduct: nextProductId
              })
            ])
            if (nextProductChildId[0] !== undefined) {
              this.storeForm('/rmcompletenesses', {
                ...nextProduct.weighing.rm_completeness,
                nextweighing: nextProductChildId[0]
              })
            }
            if (nextProductChildId[1] !== undefined) {
              this.storeForm('/dumpingrms', {
                ...nextProduct.d_b_rm_sa.dumping_rm,
                nextdbrmsa: nextProductChildId[1]
              })
            }
            if (nextProductChildId[2] !== undefined) {
              await Promise.all([
                this.storeForm('/setfillings', {
                  ...nextProduct.filling.set_filling,
                  nextfilling: nextProductChildId[2]
                }),
                this.storeForm('/materialalufoils', {
                  ...nextProduct.filling.set_filling,
                  nextfilling: nextProductChildId[2]
                }).then(res => {
                  if (res !== undefined) {
                    this.storeUpload(
                      nextProduct.filling.material_alufoil.image,
                      'materialalufoil',
                      res
                    )
                  }
                }),
                this.storeForm('/setcodesachetfgs', {
                  ...nextProduct.filling.set_code_sachet_fg,
                  nextfilling: nextProductChildId[2]
                }).then(res => {
                  if (res !== undefined) {
                    this.storeUpload(
                      nextProduct.filling.set_code_sachet_fg.image,
                      'setcodesachetfg',
                      res
                    )
                  }
                }),
                this.storeForm('/setnetweights', {
                  ...nextProduct.filling.set_net_weight,
                  nextfilling: nextProductChildId[2]
                }),
                this.storeForm('/verhorsealchecks', {
                  ...nextProduct.filling.ver_hor_seal_check,
                  nextfilling: nextProductChildId[2]
                })
              ])
            }
            if (nextProductChildId[3] !== undefined) {
              await Promise.all([
                this.storeForm('/scoopchanges', {
                  ...nextProduct.packing.scoop_change,
                  nextpacking: nextProductChildId[3]
                }),
                this.storeForm('/setcodefoldingboxes', {
                  ...nextProduct.packing.set_code_folding_box,
                  nextpacking: nextProductChildId[2]
                }).then(res => {
                  if (res !== undefined) {
                    this.storeUpload(
                      nextProduct.packing.set_code_folding_box.image,
                      'setcodefoldingbox',
                      res
                    )
                  }
                }),
                this.storeForm('/setcodeoutercartons', {
                  ...nextProduct.packing.set_code_outer_carton,
                  nextpacking: nextProductChildId[2]
                }).then(res => {
                  if (res !== undefined) {
                    this.storeUpload(
                      nextProduct.packing.set_code_outer_carton.image,
                      'setcodeoutercarton',
                      res
                    )
                  }
                })
              ])
            }
          }

          // post fiber check child
          if (fiberCheckId !== undefined) {
            await Promise.all([
              this.storeForm('/frontalufoils', {
                ...fiberCheck.front_alufoil,
                fibercheck: fiberCheckId
              }),
              this.storeForm('/backalufoils', {
                ...fiberCheck.back_alufoil,
                fibercheck: fiberCheckId
              }),
              this.storeForm('/topalufoils', {
                ...fiberCheck.top_alufoil,
                fibercheck: fiberCheckId
              }),
              this.storeForm('/sidealufoils', {
                ...fiberCheck.side_alufoil,
                fibercheck: fiberCheckId
              }),
              this.storeForm('/frontfillings', {
                ...fiberCheck.front_filling,
                fibercheck: fiberCheckId
              }),
              this.storeForm('/backfillings', {
                ...fiberCheck.back_filling,
                fibercheck: fiberCheckId
              }),
              this.storeForm('/topfillings', {
                ...fiberCheck.top_filling,
                fibercheck: fiberCheckId
              }),
              this.storeForm('/sidefillings', {
                ...fiberCheck.side_filling,
                fibercheck: fiberCheckId
              })
            ]).then(res => {
              this.firstFormSubmitProgress = 100
            })
          }
        }
      }
    },
    async submitSecondForm() {
      if (this.$refs.closeProForm2.validate()) {
        const information = JSON.parse(
          localStorage.getItem(constant.SECOND_FORM_I_PRODUCTION)
        )
        const machineCond = JSON.parse(
          localStorage.getItem(constant.SECOND_FORM_MACHINE_CONDITION)
        )
        const rotaryMagnet = JSON.parse(
          localStorage.getItem(constant.SECOND_FORM_ROTARY_MAGNET_SAMPLE)
        )
        const autoqualities = JSON.parse(
          localStorage.getItem(constant.SECOND_FORM_AUTOQUALITY_CHECK)
        )
        const note = JSON.parse(localStorage.getItem(constant.SECOND_FORM_NOTE))
        const formId = await this.storeForm('/secondaryforms', {})
        if (formId !== undefined) {
          await Promise.all([
            this.storeForm('​/secondaryinformationproductions', {
              ...information,
              secondaryform: formId
            }),
            this.storeForm('​/secondarymachineconditions', {
              ...machineCond,
              jaw_seal: null,
              secondaryform: formId
            }).then(res => {
              if (res !== undefined) {
                this.storeForm('/jawseals', {
                  ...machineCond.jaw_seal,
                  secondarymachinecondition: res
                }).then(res => {
                  if (res !== undefined) {
                    this.storeUpload(machineCond.jaw_seal.image, 'jawseal', res)
                  }
                })
              }
            }),
            this.storeForm('​/secondaryrotarymagnetsamples', {
              ...rotaryMagnet,
              secondaryform: formId
            }),
            this.storeForm('​/secondarynotes', {
              ...note,
              secondaryform: formId
            }),
            this.storeForm('​/secondaryreporters', {
              ...this.secondFormReporter,
              previous_operator: null,
              next_operator: null,
              secondaryform: formId
            }).then(res => {
              if (res !== undefined) {
                this.storeForm('/previousoperators', {
                  ...this.secondFormReporter.previous_operator,
                  secondaryreporter: res,
                  thirdreporter: null
                })
                this.storeForm('/nextoperators', {
                  ...this.secondFormReporter.next_operator,
                  secondaryreporter: res,
                  thirdreporter: null
                })
              }
            })
          ])

          autoqualities.forEach(item => {
            this.storeForm('/secondaryautoqualitychecks', {
              ...item,
              secondaryform: formId,
              code: null,
              o2_level: null
            }).then(res => {
              if (res !== undefined) {
                this.storeForm('/otwolevels', {
                  ...item,
                  secondaryautoqualitycheck: res
                })
                // code
              }
            })
          })
        }
      }
    },
    async submitThirdForm() {
      if (this.$refs.closeProForm3.validate()) {
        const information = JSON.parse(
          localStorage.getItem(constant.THIRD_FORM_I_PRODUCTION)
        )
        const checkweigher = JSON.parse(
          localStorage.getItem(constant.THIRD_FORM_CHECKWEIGHER_XRAY_TWO_HOUR)
        )
        const checkxray = JSON.parse(
          localStorage.getItem(constant.THIRD_FORM_XRAY_CHECK_ONE_HOUR)
        )
        const note = JSON.parse(localStorage.getItem(constant.THIRD_FORM_NOTE))
        const formId = await this.storeForm('/thirdforms', {})
        if (formId !== undefined) {
          await Promise.all([
            this.storeForm('/thirdinformationproductions', {
              ...information,
              thirdform: formId
            }),
            this.storeForm('/thirdnotes', {
              ...note,
              thirdform: formId
            }),
            this.storeForm('/thirdreporters', {
              ...this.thirdFormReporter,
              previous_operator: null,
              next_operator: null,
              thirdform: formId
            }).then(res => {
              if (res !== undefined) {
                this.storeForm('/previousoperators', {
                  ...this.secondFormReporter.previous_operator,
                  secondaryreporter: null,
                  thirdreporter: res
                })
                this.storeForm('/nextoperators', {
                  ...this.secondFormReporter.next_operator,
                  secondaryreporter: null,
                  thirdreporter: res
                })
              }
            })
          ])
          await checkweigher.forEach(item => {
            this.storeForm('/thirdcheckweigherxraytwohours', {
              ...item,
              weight: null,
              thirdform: formId
            }).then(res => {
              if (res !== undefined) {
                this.storeForm('/weights', {
                  ...item.weight,
                  thirdcheckweigherxraytwohour: res
                })
              }
            })
          })
          await checkxray.forEach(item => {
            this.storeForm('/xraycheckonehours', { ...item, thirdform: formId })
          })
        }
      }
    },
    storeForm(path, payload) {
      return this.$axios
        .post(this.simOneApi + path, payload)
        .then(res => {
          this.firstFormSubmitProgress += 2
          if (res.status === 200) {
            return res.data.id
          }
        })
        .catch(err => {
          console.log(err)
          return undefined
        })
    },
    storeUpload(file, ref, refId) {
      if (file !== null && ref !== null && refId !== null) {
        const form = new FormData()
        form.append('files', file)
        form.append('ref', ref)
        form.append('refId', refId)
        form.append('field', 'image')
        this.$axios.post(this.simOneApi + '/upload', form).then(res => {
          this.firstFormSubmitProgress += 3
        })
      }
    }
  }
}
</script>
<style>
.card-form-rounded {
  border-radius: 10px;
}
</style>
