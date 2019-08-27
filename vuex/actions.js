import types from './mutation-types'
const cookieparser = process.server ? require('cookieparser') : undefined
const Cookie = process.client ? require('js-cookie') : undefined

export default {
  nuxtServerInit({ commit }, { req }) {
    let user
    if (req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie)
      try {
        user = JSON.parse(parsed.user)
        commit(types.SET_USER_STATE, user)
      } catch (error) {
        console.log('No Cookie', error)
      }
    }
  },
  storeProfile({ commit }, payload) {
    Cookie.set('user', payload)
    commit(types.SET_USER_STATE, payload)
  }
}
