import '../node_modules/vue-multiselect/dist/vue-multiselect.min.css'
import 'sass/app.scss'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from 'store'
import GlobalComponentInstaller from 'components/global'
import Api from './api'
import i18n, { loadI18nFile } from './utilities/i18n'
import Vuelidate from 'vuelidate'
import Notifications from 'vue-notification'

Vue.config.productionTip = false

GlobalComponentInstaller(Vue)

Vue.use(Api, { mock: true })
Vue.use(i18n)
Vue.use(Vuelidate)
Vue.use(Notifications)

const app = new Vue({
  router,
  store,
  render: h => h(App)
})

let initApp = () => {
  app.$mount('#app')
}

if (Vue.i18next.hasResourceBundle('en', 'common')) {
  initApp()
} else {
  loadI18nFile(initApp)
}
