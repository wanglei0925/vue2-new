/**
 * Created by C on 2017/9/11.
 */
export default{
  showHeader: ({commit}) => {
    commit('showHeader')
  },
  hideHeader: ({commit}) => {
    commit('hideHeader')
  },
  showLoading: ({commit}) => {
    commit('showLoading')
  },
  hideLoading: ({commit}) => {
    commit('hideLoading')
  },
  hideFooter: ({commit}) => {
    commit('hideFooter')
  },
  showFooter: ({commit}) => {
    commit('showFooter')
  }
}
