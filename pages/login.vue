<template>
  <v-container class="wrapper">
    <v-row justify="center">
      <v-col cols="6" sm="6" class="py-0">
        <v-img src="/logo.svg" />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="9" sm="9">
        <v-form ref="formProfile" v-model="valid" lazy-validation>
          <v-row>
            <v-col sm="12" cols="12">
              <v-text-field
                v-model="formProfile.firstName"
                prepend-inner-icon="mdi-face"
                :rules="[value => !!value || 'First Name is required']"
                label="First Name"
                required
                class="field-rounded"
                solo
                flat
              />
              <v-text-field
                v-model="formProfile.lastName"
                prepend-inner-icon="mdi-face-profile"
                class="field-rounded"
                label="Last Name"
                solo
                flat
              />
              <v-text-field
                v-model="formProfile.employeeId"
                :rules="[value => !!value || 'Employee ID is required']"
                prepend-inner-icon="mdi-account-card-details"
                class="field-rounded top-index"
                label="Employee ID"
                solo
                flat
              />
              <v-btn
                color="primary lighten-1"
                :loading="loading"
                class="field-rounded"
                dark
                elevation="0"
                block
                x-large
                @click="saveProfile()"
              >
                <span class="mx-5 subtitle-1 font-weight-bold">save</span>
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
    <v-img src="/image/Picture6.png" class="image-login-wrapper" />
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
        this.$store.dispatch('storeProfile', this.formProfile).then(() => {
          this.$router.push('/')
        })
      }
    }
  }
}
</script>
<style>
.field-rounded {
  border-radius: 10px;
}
.image-login-wrapper {
  bottom: 3vh;
  right: 2vw;
  width: 60vw;
  position: fixed;
}
.wrapper {
  background-color: #1fc8db;
  background-image: linear-gradient(
    141deg,
    #fafafa 10%,
    #4dd0e1 51%,
    #00e5ff 75%
  );
  height: 100vh;
}
</style>
