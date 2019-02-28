import { mount, shallowMount, createLocalVue } from 'test-utils'
import Vuex from 'vuex'
import CheckoutPersonalDetail from 'components/CheckoutPersonalDetail'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('CheckoutPersonalDetail.vue', () => {
  let actions
  let store
  let mocks
  let stubs

  beforeEach(() => {
    actions= {
      'account/doSignUp': jest.fn()
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
    
    stubs = ['app-password-input']
  })

  it('does not dispatch "personalDetail" when the "persoanlForm" is invalid', () => {
    const wrapper = shallowMount(CheckoutPersonalDetail, {
      store,
      localVue,
      mocks,
      stubs
    })

    wrapper.vm.submit()
    expect(actions['account/doSignUp']).not.toHaveBeenCalled()
  })

  it('dispatch "personalDetail" when the "persoanlForm" is valid', () => {
    const wrapper = shallowMount(CheckoutPersonalDetail, {
      store,
      localVue,
      mocks,
      stubs,

      computed: {
        personalForm () {
          return {
            firstName: "san",
            lastName: "zhang",
            phoneNumber: "19965326545",
            emailAddress: "zhangsan@fjdjfd.cn",
            password: "123456789",
            confirmPassword: "123456789"
          }
        }
      }
    })

    wrapper.vm.$v.$invalid = false
    wrapper.vm.submit()

    expect(actions['account/doSignUp'].mock.calls[0][1]).toBe(wrapper.vm.personalForm)

  })
})
