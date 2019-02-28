import Vue from 'vue'

const state = () => ({
  productSubscription: []
})

const mutations = {
  setProductSubscription (state, productSubscription) {
    state.productSubscription = productSubscription
  }
}

const actions = {
  async fecthProductSubscription ({ commit }) {
    const { productSubscription } = await Vue.api.productSubscription.getProductSubscription()
    console.log(productSubscription)
    commit('setProductSubscription', productSubscription)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
