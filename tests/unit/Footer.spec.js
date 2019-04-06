import { shallowMount } from '@vue/test-utils'
import Footer from '@/components/Footer.vue'

describe('Footer.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(Footer, {
      propsData: { msg }
    })
    const heading = wrapper.find('h2');
    expect(heading.is('h2')).toBe(true);
    expect(heading.text()).toBe('Footer')
  })
})
