import I18n from './i18n'
import Vue from 'vue'

const i18n = I18n.getInstance()

function install (Vue) {
  Vue.t = function (key, options, defaults) {
    return i18n.translate(key, options, defaults)
  }

  Vue.prototype.$t = function (key, options, defaults) {
    return i18n.translate(key, options, defaults)
  }

  Vue.i18next = i18n.i18next
}

export default {
  install
}

export function loadI18nFile (callback) {
  try {
    Vue.api.localization.getLocalization().then(data => {
      i18n.i18next.addResourceBundle('en', 'common', data, true, true)
      callback && callback()
    }).catch(() => {
      callback && callback()
    })
  } catch (e) {
    callback && callback()
  }
}
