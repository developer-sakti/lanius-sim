<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="10" sm="10" class="text-center title primary--text pb-0">
        CHECKLIST CLEARENCE SMALL SACHET
      </v-col>
      <v-col
        cols="10"
        sm="10"
        class="text-center subtitle-1 primary--text pt-0 font-weight-bold"
      >
        Pemeriksaan kondisi kaca/plastik keras
      </v-col>
    </v-row>
    <v-card flat>
      <v-card-title class="subtitle-1 primary--text font-weight-bold">
        Skor Pemeriksaan
      </v-card-title>
      <v-card-text>
        <span>0 = Masih utuh/ No damaged</span>
        <br />
        <span>
          1 = Rusak, berbentuk goresan,bagian bawah menempel/ Damaged, scratch,
          part still intact
        </span>
        <br />
        <span>
          2 = Rusak, pecahan terlepas namun masih ditemukan/ Damaged, pieces
          unattached but all pieces still found
        </span>
        <br />
        <span>
          3 = Rusak, pecahan terlepas dan tidak ditemukan/ Damaged, pieces
          unattached but not found
        </span>
        <br />
      </v-card-text>
    </v-card>
    <v-row class="primary--text" justify="center">
      <v-col cols="12" sm="4"><span>Checking</span></v-col>
      <v-col cols="12" sm="3">No Registrasi</v-col>
      <v-col cols="12" sm="5">Skor Pemeriksaan</v-col>
    </v-row>
    <v-form ref="formFiber" lazy-validation>
      <v-row>
        <v-col cols="12" sm="4">
          <span>Fiber penutup bagian depan mesin roll alufoil</span>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            v-model="form.front_alufoil.reg"
            :rules="[v => !!v || 'This is required']"
            outlined
          />
        </v-col>
        <v-col cols="12" sm="5">
          <v-radio-group
            v-model="form.front_alufoil.score"
            :rules="[v => !!v || 'This is required']"
            row
          >
            <v-radio label="0" value="0"></v-radio>
            <v-radio label="1" value="1"></v-radio>
            <v-radio label="2" value="2"></v-radio>
            <v-radio label="3" value="3"></v-radio>
          </v-radio-group>
        </v-col>
        <v-col cols="12" sm="4">
          <span>Fiber penutup bagian belakang mesin roll alufoil</span>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            v-model="form.back_alufoil.reg"
            :rules="[v => !!v || 'This is required']"
            outlined
          />
        </v-col>
        <v-col cols="12" sm="5">
          <v-radio-group
            v-model="form.back_alufoil.score"
            :rules="[v => !!v || 'This is required']"
            row
          >
            <v-radio label="0" value="0"></v-radio>
            <v-radio label="1" value="1"></v-radio>
            <v-radio label="2" value="2"></v-radio>
            <v-radio label="3" value="3"></v-radio>
          </v-radio-group>
        </v-col>
        <v-col cols="12" sm="4">
          <span>Fiber penutup bagian atas mesin roll alufoil</span>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            v-model="form.top_alufoil.reg"
            :rules="[v => !!v || 'This is required']"
            outlined
          />
        </v-col>
        <v-col cols="12" sm="5">
          <v-radio-group
            v-model="form.top_alufoil.score"
            :rules="[v => !!v || 'This is required']"
            row
          >
            <v-radio label="0" value="0"></v-radio>
            <v-radio label="1" value="1"></v-radio>
            <v-radio label="2" value="2"></v-radio>
            <v-radio label="3" value="3"></v-radio>
          </v-radio-group>
        </v-col>
        <v-col cols="12" sm="4">
          <span>Fiber penutup bagian samping mesin roll alufoil</span>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            v-model="form.side_alufoil.reg"
            :rules="[v => !!v || 'This is required']"
            outlined
          />
        </v-col>
        <v-col cols="12" sm="5">
          <v-radio-group
            v-model="form.side_alufoil.score"
            :rules="[v => !!v || 'This is required']"
            row
          >
            <v-radio label="0" value="0"></v-radio>
            <v-radio label="1" value="1"></v-radio>
            <v-radio label="2" value="2"></v-radio>
            <v-radio label="3" value="3"></v-radio>
          </v-radio-group>
        </v-col>
        <v-col cols="12" sm="4">
          <span>Fiber penutup bagian depan mesin filling small sachet</span>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            v-model="form.front_filling.reg"
            :rules="[v => !!v || 'This is required']"
            outlined
          />
        </v-col>
        <v-col cols="12" sm="5">
          <v-radio-group
            v-model="form.front_filling.score"
            :rules="[v => !!v || 'This is required']"
            row
          >
            <v-radio label="0" value="0"></v-radio>
            <v-radio label="1" value="1"></v-radio>
            <v-radio label="2" value="2"></v-radio>
            <v-radio label="3" value="3"></v-radio>
          </v-radio-group>
        </v-col>
        <v-col cols="12" sm="4">
          <span>Fiber penutup bagian belakang mesin filling small sachet</span>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            v-model="form.back_filling.reg"
            :rules="[v => !!v || 'This is required']"
            outlined
          />
        </v-col>
        <v-col cols="12" sm="5">
          <v-radio-group
            v-model="form.back_filling.score"
            :rules="[v => !!v || 'This is required']"
            row
          >
            <v-radio label="0" value="0"></v-radio>
            <v-radio label="1" value="1"></v-radio>
            <v-radio label="2" value="2"></v-radio>
            <v-radio label="3" value="3"></v-radio>
          </v-radio-group>
        </v-col>
        <v-col cols="12" sm="4">
          <span>Fiber penutup bagian atas mesin filling small sachet</span>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            v-model="form.top_filling.reg"
            :rules="[v => !!v || 'This is required']"
            outlined
          />
        </v-col>
        <v-col cols="12" sm="5">
          <v-radio-group
            v-model="form.top_filling.score"
            :rules="[v => !!v || 'This is required']"
            row
          >
            <v-radio label="0" value="0"></v-radio>
            <v-radio label="1" value="1"></v-radio>
            <v-radio label="2" value="2"></v-radio>
            <v-radio label="3" value="3"></v-radio>
          </v-radio-group>
        </v-col>
        <v-col cols="12" sm="4">
          <span>Fiber penutup bagian samping mesin filling small sachet</span>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            v-model="form.side_filling.reg"
            :rules="[v => !!v || 'This is required']"
            outlined
          />
        </v-col>
        <v-col cols="12" sm="5">
          <v-radio-group
            v-model="form.side_filling.score"
            :rules="[v => !!v || 'This is required']"
            row
          >
            <v-radio label="0" value="0"></v-radio>
            <v-radio label="1" value="1"></v-radio>
            <v-radio label="2" value="2"></v-radio>
            <v-radio label="3" value="3"></v-radio>
          </v-radio-group>
        </v-col>
      </v-row>
    </v-form>
    <v-row justify="center">
      <v-col cols="10" sm="5" class="pt-0">
        <v-btn block large class="grey lighten-1" dark @click="draft()">
          save as draft
        </v-btn>
      </v-col>
      <v-col cols="10" sm="5" class="pt-0">
        <v-btn block large color="primary" @click="submit()">submit</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import constant from '../../../constant'
export default {
  middleware: ['user'],
  data() {
    return {
      form: {
        front_alufoil: {
          reg: null,
          score: null
        },
        back_alufoil: {
          reg: null,
          score: null
        },
        top_alufoil: {
          reg: null,
          score: null
        },
        side_alufoil: {
          reg: null,
          score: null
        },
        front_filling: {
          reg: null,
          score: null
        },
        back_filling: {
          reg: null,
          score: null
        },
        top_filling: {
          reg: null,
          score: null
        },
        side_filling: {
          reg: null,
          score: null
        }
      }
    }
  },
  created() {
    if (process.client) {
      const form = localStorage.getItem(constant.FISRT_FORM_FIBER_CHECK)
      if (form !== undefined && form !== null) {
        this.form = { ...JSON.parse(form) }
      }
    }
  },
  methods: {
    save() {
      localStorage.setItem(
        constant.FISRT_FORM_FIBER_CHECK,
        JSON.stringify(this.form)
      )
    },
    draft() {
      this.save()
      this.$router.push('/inspection')
    },
    submit() {
      if (this.$refs.formFiber.validate()) {
        this.snackbar = true
        this.save()
        this.$router.push('/inspection')
      }
    }
  }
}
</script>
