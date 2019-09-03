<template>
  <v-container>
    <v-snackbar
      v-model="message"
      :timeout="3000"
      color="success"
      top
      right
      class="mt-3"
    >
      Profile updated successfully
      <v-btn color="indigo" text class="text-none" @click="cancelUpdate()">
        Cancel
      </v-btn>
    </v-snackbar>
    <v-row justify="center">
      <v-col cols="12" sm="12" class="text-center">
        <v-avatar size="150">
          <v-img src="/profile.png" alt="avatar" />
        </v-avatar>
      </v-col>
      <v-col cols="10" sm="10" class="text-center pt-0">
        <v-form ref="formUpdateProfile" v-model="valid" lazy-validation>
          <v-row justify="center">
            <v-col sm="10" cols="10">
              <v-text-field
                v-model="form.firstName"
                :rules="[value => !!value || 'First Name is required']"
                label="First Name"
                required
                outlined
              />
              <v-text-field
                v-model="form.lastName"
                label="Last Name"
                required
                outlined
              />
              <v-text-field
                v-model="form.employeeId"
                :rules="[value => !!value || 'Employee ID is required']"
                label="Employee ID"
                required
                outlined
              />
              <v-btn
                color="primary"
                block
                large
                :loading="loading"
                @click="update()"
              >
                update
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import user from '~/mixins/user'
export default {
  mixins: [user],
  middleware: ['user'],
  data() {
    return {
      valid: true,
      loading: false,
      form: null,
      tempUser: null,
      message: false
    }
  },
  created() {
    this.setup()
  },
  methods: {
    setup() {
      this.form = { ...this.user }
      this.tempUser = { ...this.user }
    },
    update() {
      if (this.$refs.formUpdateProfile.validate()) {
        this.loading = true
        this.$store.dispatch('storeProfile', { ...this.form }).then(() => {
          this.loading = false
          this.message = true
        })
      }
    },
    cancelUpdate() {
      this.$store.dispatch('storeProfile', { ...this.tempUser })
      this.setup()
      this.message = false
    }
  }
}
</script>
