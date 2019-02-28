import MockAdapter from 'axios-mock-adapter'
import { cloneDeep } from 'lodash'

function fixture (name) {
  return cloneDeep(require(`./fixtures/${name}.json`))
}

export function mock (instance, options) {
  const _options = Object.assign({}, {
    ...options,
    delayResponse: 500
  }, options)

  const mock = new MockAdapter(instance, _options)

  // address
  mock
    .onPost('/api/checkout/addresses')
    .reply(200, fixture('address'))

  // personal form
  mock
    .onPost('/api/checkout/detail')
    .reply(200, fixture('personalForm'))

  // footer
  mock
    .onGet('/api/common/links')
    .reply(200, fixture('footer'))

  // product
  mock
    .onGet('/api/product')
    .reply(200, fixture('product'))

  // paymentMethod
  mock
    .onGet('/api/payment/methods')
    .reply(200, fixture('paymentMethod'))

  // product subscription
  mock
    .onGet('/api/productSubscription')
    .reply(200, fixture('productSubscription'))
}
