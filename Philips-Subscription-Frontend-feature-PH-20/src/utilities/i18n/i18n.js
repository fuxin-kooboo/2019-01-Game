import i18next from 'i18next'
import Vue from 'vue'

let instance = null

export default class I18n {
  constructor () {
    if (instance != null) {
      this.i18next = i18next
      return
    }

    i18next
      .init({
        debug: false, // process.env.NODE_ENV !== 'production',
        load: 'currentOnly',
        initImmediate: false,
        lng: 'en',
        fallbackLng: 'en',
        preload: ['en'],
        defaultNS: 'common',
        fallbackNS: 'common',
        ns: [
          'common'
        ],
        joinArrays: ' ',
        nsSeparator: '|',
        keySeparator: '~',
        saveMissing: true,
        missingKeyHandler: (lng, ns, key, value) => {
          Vue.api.localization.saveEntry(key, value)
        }
      })

    this.i18next = i18next
  }

  static getInstance () {
    if (instance == null) {
      instance = new I18n()
    }

    return instance
  }

  t (...args) {
    return this.translate(...args)
  }

  getFixedNamespaceT (namespace) {
    return this.i18next.getFixedT(null, namespace)
  }

  translate (key, options, defaults = {}) {
    return this.i18next.t(key, {
      ...defaults,
      ...options
    })
  }
}
