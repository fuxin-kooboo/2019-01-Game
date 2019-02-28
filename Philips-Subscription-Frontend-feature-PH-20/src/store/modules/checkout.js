import Vue from 'vue'
import { formatCurrency } from '@/utilities/common'

const state = () => ({
  orderNumber: '',
  product: {},
  shippingAddress: {
    countryCode: null,
    postalCode: null,
    houseNumber: null,
    addition: null
  },
  hasBillingAddress: false,
  billingAddress: {
    countryCode: null,
    postalCode: null,
    houseNumber: null,
    addition: null
  },
  paymentMethod: []
})

const getters = {
  normalizedProduct (state) {
    return {
      ...state.product,
      price: formatCurrency(state.product.price)
    }
  },

  paymentMethodCreditCard (state) {
    return state.paymentMethod.filter(item => item.isCreditCard)
  },

  paymentMethodNotCreditCard (state) {
    return state.paymentMethod.filter(item => !item.isCreditCard)
  }
}

const mutations = {
  setAddress (state, address) {
    state.shippingAddress = address.shippingAddress
    state.hasBillingAddress = address.hasBillingAddress
    state.billingAddress = address.billingAddress
  },

  setProdcut (state, product) {
    state.product = product
  },

  setPaymentMethods (state, paymentMethod) {
    state.paymentMethod = paymentMethod
  },

  setPaymentProviders (state, paymentProvider) {
    state.paymentProvider = paymentProvider
  }
}

const actions = {
  async submitAddress ({ commit }, { shippingAddress, hasBillingAddress, billingAddress }) {
    const address = await Vue.api.checkout.postOrderAddresses({
      orderNumber: 'test-order-number',
      shippingAddress,
      hasBillingAddress,
      billingAddress
    })
    commit('setAddress', address)
  },

  async fetchProduct ({ commit }) {
    const { product } = await Vue.api.product.getProduct()
    commit('setProdcut', product)
  },

  async fetchPaymentMethods ({ commit }) {
    const PaymentMethods = await Vue.api.payment.getPaymentMethods()
    commit('setPaymentMethods', PaymentMethods)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
