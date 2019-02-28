import { shallowMount, createLocalVue } from 'test-utils'
import CheckPaymentMethod from 'components/CheckPaymentMethod'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('CheckPaymentMethod.vue', () => {
  let actions
  let store
  let stubs

  beforeEach(() => {
    actions = {
      'checkout/fetchPaymentMethods': jest.fn()
    }

    store = new Vuex.Store({
      actions
    })

    stubs = ['app-icon']
  })

  it('PaymentMethod information should get from Api correctly', () => {
    let wrapper = shallowMount(CheckPaymentMethod, {
      localVue,
      store,
      stubs,
      computed: {
        paymentMethodCreditCard() {
          return [{
              code: "Adyen.Amex",
              name: "AmericanExpress",
              provider: "Adyen",
              logoUrl: "amex.svg",
              isCreditCard: true
            }
          ]
        },

        paymentMethodNotCreditCard() {
          return [{
              code: "Adyen.iDeal",
              name: "iDeal",
              provider: "Adyen",
              logoUrl: "ideal.svg",
              isCreditCard: false
            }
          ]
        },

        product () {
          return {
            ups: ["A brand new Lumea device"]
          }
        }
      }
    })
    const productUps = wrapper.find('.UpsItem').text()
    expect(actions['checkout/fetchPaymentMethods']).toHaveBeenCalled()
    expect(productUps).toBe(wrapper.vm.product.ups[0])
  })
})