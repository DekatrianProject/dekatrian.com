import { mount } from '@vue/test-utils';
import DekatrianLogo from '~/components/DekatrianLogo.vue';

describe('DekatrianLogo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(DekatrianLogo);
    expect(wrapper.vm).toBeTruthy();
  });
});
