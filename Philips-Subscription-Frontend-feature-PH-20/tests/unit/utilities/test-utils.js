import * as VueTestUtils from '@vue/test-utils'
import Api from 'api'
import Vue from 'vue'
import Vuelidate from 'vuelidate'
import Notifications from 'vue-notification'
import GlobalComponentInstaller from 'components/global'

let baseMockVue = (v) => {
  Vue.use(Api)
  Vue.use(Vuelidate)
  Vue.use(Notifications)
  GlobalComponentInstaller(Vue)

  v.prototype.$t = v.t = function (key, options) {
    if (options && typeof (options) === 'string') {
      return options
    }
    return key
  }
}

let clv = () => {
  let localVue = VueTestUtils.createLocalVue()
  baseMockVue(localVue)
  return localVue
}

Object.keys(VueTestUtils).forEach(key => {
  if (key === 'createLocalVue') {
    exports[key] = clv
    return
  }
  exports[key] = VueTestUtils[key]
})
