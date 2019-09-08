export default {
  data() {
    return {
      required: [v => !!v || 'This field is required'],
      loading: false,
      months: [
        'Jan',
        'Peb',
        'Mar',
        'Apr',
        'Mei',
        'Jun',
        'Jul',
        'Agu',
        'Sep',
        'Okt',
        'Nop',
        'Des'
      ]
    }
  },
  computed: {
    user() {
      return this.$store.getters.user
    },
    currentDate() {
      let month, day
      const date = new Date()
      if (date.getMonth() + 1 <= 9) {
        month = '0' + (date.getMonth() + 1)
      } else {
        month = date.getMonth()
      }
      if (date.getDate() < 9) {
        day = '0' + date.getDate()
      } else {
        day = date.getDate()
      }
      return date.getFullYear() + '-' + month + '-' + day
    },
    simOneApi() {
      return process.env.SIM_ONE_API
    }
  },
  methods: {
    formatDate(date) {
      const temp = date.split('-')
      return temp[2] + ' ' + this.months[temp[1] - 1] + ' ' + temp[0]
    }
  }
}
