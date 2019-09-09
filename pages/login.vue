<template>
  <div>
    <transition name="slide-top-fade">
      <v-img
        v-if="animation"
        src="/image/login/bg-top.png"
        class="image-top-wrapper"
      />
    </transition>
    <v-img src="/image/login/logo-danone.png" class="image-danone-wrapper" />
    <v-container>
      <v-row justify="center">
        <v-col cols="5" sm="5" class="logo-sim">
          <v-img src="/image/login/logo-sim.png" />
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="6" sm="6" class="form-login">
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
                  color="primary lighten-2"
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
    </v-container>
    <transition name="slide-bottom-fade">
      <v-img
        v-if="animation"
        src="/image/login/bg-bottom.png"
        class="image-bottom-wrapper"
      />
    </transition>
  </div>
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
      },
      animation: true
    }
  },
  methods: {
    async saveProfile() {
      if (this.$refs.formProfile.validate()) {
        await setTimeout(() => {
          this.$store.dispatch('storeProfile', this.formProfile).then(() => {
            this.$router.push('/')
          })
        }, 1000)
        this.loading = true
        this.animation = false
      }
    }
  }
}
</script>
<style>
.field-rounded {
  border-radius: 15px;
}
.image-top-wrapper {
  top: 0;
  left: 0;
  width: 40vw;
  position: fixed;
}
.image-danone-wrapper {
  top: 0;
  right: 5vw;
  width: 10vw;
  position: fixed;
}
.logo-sim {
  margin-top: 15vh !important;
}
.image-bottom-wrapper {
  bottom: 0;
  width: 100vw;
  position: fixed;
}
.form-login {
  z-index: 999;
  margin-top: 15vh;
}
/* animation */
.slide-bottom-fade-enter-active {
  transition: all 2s ease;
}
.slide-bottom-fade-leave-active {
  transition: all 1s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-bottom-fade-enter, .slide-bottom-fade-leave-to
/* .slide-bottom-fade-leave-active below version 2.1.8 */ {
  transform: translateY(50px);
  opacity: 0;
}

.slide-top-fade-enter-active {
  transition: all 2s ease;
}
.slide-top-fade-leave-active {
  transition: all 1s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-top-fade-enter, .slide-top-fade-leave-to
/* .slide-top-fade-leave-active below version 2.1.8 */ {
  transform: translateY(-50px);
  opacity: 0;
}
</style>
