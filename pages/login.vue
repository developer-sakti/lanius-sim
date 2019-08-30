<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="9" sm="9">
        <v-img src="/logo.svg" />
      </v-col>
      <v-col cols="9" sm="9">
        <v-form ref="formProfile" v-model="valid" lazy-validation>
          <v-row>
            <v-col sm="12" cols="12">
              <v-text-field
                v-model="formProfile.firstName"
                :rules="[value => !!value || 'First Name is required']"
                label="First Name"
                required
                outlined
              />
              <v-text-field
                v-model="formProfile.lastName"
                label="Last Name"
                required
                outlined
              />
              <v-text-field
                v-model="formProfile.employeeId"
                :rules="[value => !!value || 'Employee ID is required']"
                label="Employee ID"
                required
                outlined
              />
              <v-btn
                class="primary"
                :loading="loading"
                block
                large
                @click="saveProfile()"
              >
                <span class="mx-5 subtitle-1 font-weight-bold">save</span>
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  layout: 'none',
  middleware: ['login'],
  data() {
    return {
      valid: true,
      loading: false,
      formProfile: {
        firstName: null,
        lastName: null,
        employeeId: null
      }
    }
  },
  methods: {
    saveProfile() {
      if (this.$refs.formProfile.validate()) {
        this.loading = true
        this.snackbar = true
        this.$store.dispatch('storeProfile', this.formProfile).then(() => {
          this.$router.push('/')
        })
      }
    }
  }
}
</script>
