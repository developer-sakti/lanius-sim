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
                      CURRENT PRO : -
                    </span>
                  </v-list-item-content>
                </template>
                <v-list-item
                  v-for="item in form1"
                  :key="item.id"
                  :to="item.path"
                >
                  <v-list-item-content class="blue--text">
                    <v-list-item-title class="title" v-text="item.subform" />
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
                      CURRENT PRO : -
                    </span>
                  </v-list-item-content>
                </template>
                <v-list-item
                  v-for="item in form2"
                  :key="item.id"
                  :to="item.path"
                >
                  <v-list-item-content class="blue--text">
                    <v-list-item-title class="title" v-text="item.subform" />
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
                      CURRENT PRO : -
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
        <v-row class="mt-3">
          <v-col cols="12" sm="12" md="12">
            <v-list>
              <v-list-group>
                <template slot="activator">
                  <v-list-item-title class="title blue--text">
                    SAFETY FILLING PACKING
                  </v-list-item-title>
                </template>
                <v-card>
                  a
                </v-card>
              </v-list-group>
            </v-list>
          </v-col>
          <v-col cols="12" sm="12" md="12">
            <v-list>
              <v-list-group>
                <template slot="activator">
                  <v-list-item-title class="title blue--text">
                    QUALITY FILLING
                  </v-list-item-title>
                </template>
                <v-card>
                  a
                </v-card>
              </v-list-group>
            </v-list>
          </v-col>
          <v-col cols="12" sm="12" md="12">
            <v-list>
              <v-list-group>
                <template slot="activator">
                  <v-list-item-title class="title blue--text">
                    QUALITY PACKING
                  </v-list-item-title>
                </template>
                <v-card>
                  a
                </v-card>
              </v-list-group>
            </v-list>
          </v-col>
          <v-col cols="12" sm="12" md="12">
            <v-list>
              <v-list-group>
                <template slot="activator">
                  <v-list-item-title class="title blue--text">
                    COST FILLING
                  </v-list-item-title>
                </template>
                <v-card>
                  a
                </v-card>
              </v-list-group>
            </v-list>
          </v-col>
          <v-col cols="12" sm="12" md="12">
            <v-list>
              <v-list-group>
                <template slot="activator">
                  <v-list-item-title class="title blue--text">
                    DELIVERY FILLING
                  </v-list-item-title>
                </template>
                <v-card>
                  a
                </v-card>
              </v-list-group>
            </v-list>
          </v-col>
        </v-row>
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
          subform: 'PREPARE PrO Produk Sebelumnya',
          path: '/inspection/form1/prepare'
        },
        {
          id: 4,
          subform: 'Ketidaksesuaian',
          path: '/inspection/form1/ketidaksesuaian'
        }
      ],
      form2: [
        {
          id: 5,
          subform: 'Informasi Produksi',
          path: '/inspection/form2/informasi'
        },
        {
          id: 6,
          subform: 'Kondisi Mesin dan Area Kerja',
          path: '/inspection/form2/kondisi'
        },
        {
          id: 7,
          subform: 'Pengambilan Sampel Rotary Magnet',
          path: '/inspection/form2/sampel'
        },
        {
          id: 8,
          subform: 'Pemeriksaan Autoquality',
          path: '/inspection/form2/autoquality'
        },
        { id: 9, subform: 'Catatan', path: '/inspection/form2/catatan' }
      ],
      form3: [
        {
          id: 10,
          subform: 'Informasi Produksi',
          note: '',
          path: '/inspection/form3/informasi'
        },
        {
          id: 11,
          subform: 'Pemeriksaan Checkweigher dan X-Ray',
          note: '(Diisi setiap 2 jam)',
          path: '/inspection/form3/checkxray'
        },
        {
          id: 12,
          subform: 'Pemeriksaan X-Ray',
          note: '(Diisi setiap 1 jam)',
          path: '/inspection/form3/xray'
        },
        { id: 14, subform: 'Catatan', path: '/inspection/form3/catatan' }
      ],
      form4: [{ id: 13, subform: 'Filling' }, { id: 14, subform: 'Packing' }],
      dialogCloseClearence: false
    }
  },
  created() {
    if (this.user === null) {
      this.dialogProfile = true
    }
  }
}
</script>
