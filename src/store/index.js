import { createStore } from 'vuex'
import Cookies from 'js-cookie'
export default createStore({
  state: {
    locale: Cookies.get('locale') || 'ar',
  },
  mutations: {
    changeLocale(state, payload) {
      state.locale = payload
    },
  },
  actions: {},
  modules: {},
  getters: {
    locale: (state) => state.locale,
  },
})
