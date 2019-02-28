import store from 'store'

export function authInterceptor (config) {
  if (store.state && store.state.user && store.state.user.token) {
    config.headers['Philips-User-Token'] = store.state.user.token
  }
  return config
}

export function languageInterceptor (config) {
  const language = config.headers['Accept-Language'] // || get from store.state.user.language ??
  if (language != null) {
    config.headers['Accept-Language'] = language
  }

  return config
}

export function siteInterceptor (config) {
  const site = config.headers['Philips-Site'] // || get from store.state.user.site ??
  if (site != null) {
    config.headers['Philips-Site'] = site
  }

  return config
}

export function countryInterceptor (config) {
  const country = config.headers['Philips-Country'] // || get from store.state.user.country ??
  if (country != null) {
    config.headers['Philips-Country'] = country
  }

  return config
}

export function currencyInterceptor (config) {
  const currency = config.headers['Philips-Currency'] // || get from ??
  if (currency != null) {
    config.headers['Philips-Currency'] = currency
  }

  return config
}
