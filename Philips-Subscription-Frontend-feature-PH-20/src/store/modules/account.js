import Vue from 'vue'

const state = () => ({
  user: {
    token: '',
    id: ''
  }
})

const mutations = {
  setUser (state, userInfo) {
    state.user.id = userInfo.userId
    state.user.token = userInfo.token
  }
}

const actions = {
  async doSignUp ({ commit }, signUpForm) {
    let userInfo = await Vue.api.account.signUp(signUpForm)
    commit('setUser', userInfo)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
