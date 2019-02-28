import { shallowMount, createLocalVue, RouterLinkStub } from 'test-utils'
import MyAccountMenuMobile from 'components/MyAccountMenuMobile'

const localVue = createLocalVue()

const $route =  {
  name: 'personal-details',
  path: '/my-account/personal-details'
}

describe('MyAccountMenuMobile.vue', () => {
  it('suppose the url is correct when choose the navItem', () => {
    const wrapper = shallowMount(MyAccountMenuMobile, {
      localVue,
      propsData: {
        menuOptions: [
          { name: 'Overview', route: { path: '/my-account/overview' } },
          { name: 'Personal details', route: { path: '/my-account/personal-details' } }
        ]
      },
      stubs: {
        RouterLink: RouterLinkStub
      },
      mocks: {
        $route
      }
    })

    expect(wrapper.vm.itemSelected.route.path).toBe("/my-account/personal-details")
  })
})
