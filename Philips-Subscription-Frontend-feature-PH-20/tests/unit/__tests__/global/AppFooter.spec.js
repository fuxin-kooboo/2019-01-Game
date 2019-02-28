
import { shallowMount, createLocalVue } from 'test-utils'
import AppFooter from 'components/AppFooter.vue'
import mockApi from 'mock-api'

let localVue = createLocalVue()
describe('AppFooter.vue', () => {
  let stubs = ['app-icon']

  afterEach(() => {
    mockApi.reset()
  })

  it('links should get from Api correctly', (done) => {
    mockApi.onGet(/\/api\/common\/links/).reply(200, {
      footerLinks: [{
        text: 'test-text',
        url: 'test-link'
      }]
    })

    const wrapper = shallowMount(AppFooter, {
      localVue,
      stubs
    })

    setTimeout(() => {
      expect(wrapper.vm.links.length).toBe(1)
      expect(wrapper.vm.links[0].text).toBe('test-text')
      expect(wrapper.vm.links[0].url).toBe('test-link')
      done()
    }, 0)
  })
})
