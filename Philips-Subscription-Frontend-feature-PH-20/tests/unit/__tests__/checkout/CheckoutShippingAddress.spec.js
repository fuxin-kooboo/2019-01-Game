import { shallowMount, createLocalVue } from 'test-utils'
import Vuex from 'vuex'
import CheckoutShippingAddress from 'components/CheckoutShippingAddress'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('CheckoutShippingAddress.vue', () => {
  let actions
  let store
  let mocks

  beforeEach(() => {
    actions = {
      'checkout/submitAddress': jest.fn()
    }
    store = new Vuex.Store({
      actions
    })

    mocks = {
      $v: {
        $invalid: true,
        $touch: jest.fn()
      }
    }
  })

  it('does not dispatch "submitAddress" when the "addressForm" is invalid', () => {
    const wrapper = shallowMount(CheckoutShippingAddress, {
      store,
      localVue,
      mocks
    })
    wrapper.vm.submit()
    expect(actions['checkout/submitAddress']).not.toHaveBeenCalled()
  })

  it('dispatch "submitAddress" when the "addressForm" is valid', () => {
    const wrapper = shallowMount(CheckoutShippingAddress, {
      store,
      localVue,
      mocks,

      computed: {
        address () {
          return  {
            shippingAddress: {
              countryCode: 'Nl',
              postalCode: '123456',
              houseNumber: '123456',
              addition: 'addition'
            },
            hasBillingAddress: true,
            billingAddress: {
              countryCode: 'NA',
              postalCode: '654321',
              houseNumber: '654321',
              addition: 'addition'
            }
          }
        }
      }
    })

    wrapper.vm.$v.$invalid = false
    wrapper.vm.submit()

    expect(actions['checkout/submitAddress'].mock.calls[0][1]).toBe(wrapper.vm.address)
  })
})
