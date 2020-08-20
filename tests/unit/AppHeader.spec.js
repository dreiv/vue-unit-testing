import { mount } from '@vue/test-utils'

import AppHeader from '@/components/AppHeader.vue'

describe('AppHeader.vue', () => {
  it('If the user is not logged in, do not show logout button', () => {
    const wrapper = mount(AppHeader)

    expect(wrapper.find('button').isVisible()).toBe(false)
  })

  it('If the user is logged in, show logout button', async () => {
    const wrapper = mount(AppHeader)
    await wrapper.setData({ loggedIn: true })

    expect(wrapper.find('button').isVisible()).toBe(true)
  })
})
