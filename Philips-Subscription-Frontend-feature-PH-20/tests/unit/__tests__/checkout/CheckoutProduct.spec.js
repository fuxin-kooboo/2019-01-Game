import { shallowMount, createLocalVue } from 'test-utils'
import CheckoutProduct from 'components/CheckoutProduct'
import Vuex from 'vuex'

const localVue = createLocalVue() 
localVue.use(Vuex)

describe('CheckoutProduct.vue', () => {
  let actions
  let store

  beforeEach(() => {
    actions = {
      'checkout/fetchProduct': jest.fn()
    }

    store = new Vuex.Store({
      actions
    })
  })

  it('product infomation should get from Api correctly', () => {

    const wrapper = shallowMount (CheckoutProduct, {
      localVue,
      store,
      computed: {
        normalizedProduct () {
          return {
            id: '1a2e628137ad4d749d91e65c1066bca3',
            image: 'product.png',
            name: 'Lumea prestige',
            price: ['€39','95'],
            subName: 'BRI956/00'
          }
        }
      }
    })
    const productName = wrapper.find('.Product_name').text()
    expect(actions['checkout/fetchProduct']).toHaveBeenCalled()
    expect(productName).toBe(wrapper.vm.normalizedProduct.name)
  })
})