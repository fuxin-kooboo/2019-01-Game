import { shallowMount, RouterLinkStub } from 'test-utils'
import AppHeader from 'components/AppHeader.vue'

describe('AppHeader.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Hello Vue'
    const wrapper = shallowMount(AppHeader, {
      propsData: { msg },
      stubs: {
        RouterLink: RouterLinkStub
      }
    })
    expect(wrapper.find(RouterLinkStub).contains('img.Logo_img')).toBe(true)
  })
})
