import Vue from 'vue'
import Vuex from 'vuex'
import checkout from './modules/checkout'
import account from './modules/account'
import myAccount from './modules/myAccount'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    checkout,
    account,
    myAccount
  }
})
