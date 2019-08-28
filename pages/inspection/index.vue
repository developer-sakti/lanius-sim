<template>
  <v-container>
    <!-- <v-row justify="center" class="pb-5">
      <span
        class="display-1 font=weight-bold"
        style="text-decoration:underline"
      >
        SIM 1 FORM
      </span>
    </v-row> -->
    <v-row class="mt-5 pt-5">
      <v-col cols="12" xs="12" sm="12" md="12">
        <v-list>
          <v-list-group>
            <template slot="activator">
              <v-list-item-title class="headline blue--text">
                CHECKLIST CLEARENCE SMALL SACHET
              </v-list-item-title>
            </template>
            <v-list-item v-for="item in form1" :key="item.id" :to="item.path">
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
      <v-col cols="12" xs="12" sm="12" md="12">
        <v-list>
          <v-list-group>
            <template slot="activator">
              <v-list-item-title class="headline blue--text">
                FILLING SACHET MONITORING
              </v-list-item-title>
            </template>
            <v-list-item v-for="item in form2" :key="item.id" :to="item.path">
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
      <v-col cols="12" xs="12" sm="12" md="12">
        <v-list>
          <v-list-group>
            <template slot="activator">
              <v-list-item-title class="headline blue--text">
                PACKING SACHET MONITORING
              </v-list-item-title>
            </template>
            <v-list-item v-for="item in form3" :key="item.id">
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
      <v-col cols="12" xs="12" sm="12" md="12">
        <v-list>
          <v-list-group>
            <template slot="activator">
              <v-list-item-title class="headline blue--text">
                KONDISI OPERASIONAL
              </v-list-item-title>
            </template>
            <v-list-item v-for="item in form4" :key="item.id">
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
    </v-row>
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
      product: 'Produk A',
      shift: 'Shift 1',
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
        { id: 10, subform: 'Informasi Produksi' },
        { id: 11, subform: 'Pemeriksaan' },
        { id: 12, subform: 'Catatan' }
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
