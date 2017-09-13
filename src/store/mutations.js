import getters from './getters'
const state = {
  header: true,
  loading: false,
  footer: false
}
const mutations = {
  showHeader (state) {
    state.header = true
  },
  hideHeader (state) {
    state.header = false
  },
  hideLoading (state) {
    state.loading = false
  },
  showLoading (state) {
    state.loading = true
  },
  hideFooter (state) {
    state.footer = false
  },
  showFooter (state) {
    state.footer = true
  }
}
export default {
  state,
  mutations,
  getters
}
