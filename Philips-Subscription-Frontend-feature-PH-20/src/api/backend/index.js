import axios from 'axios'
import { mock } from '../mock'
import siteConfig from 'siteConfig'
import { authInterceptor, languageInterceptor, siteInterceptor, countryInterceptor, currencyInterceptor } from './interceptors'
import resources from './resources'

const apiEndpointBaseUrl = siteConfig.ApiHost

export const instance = axios.create({
  baseURL: apiEndpointBaseUrl,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
    'Accept-Language': 'nl-NL',
    'Philips-Site': 'The Netherlands'
  }
})

instance.interceptors.request.use(authInterceptor)
instance.interceptors.request.use(languageInterceptor)
instance.interceptors.request.use(siteInterceptor)
instance.interceptors.request.use(countryInterceptor)
instance.interceptors.request.use(currencyInterceptor)

export default function (option) {
  if (option && option.mock) {
    mock(instance)
  }
  let apiResources = {}
  Object.entries(resources).forEach(([key, factory]) => {
    apiResources[key] = factory(instance)
  })
  return apiResources
}
