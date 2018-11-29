import { shallowMount } from '@vue/test-utils';
import VueDoc from '@/components/VueDoc.vue';

describe('VueDoc.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(VueDoc, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
