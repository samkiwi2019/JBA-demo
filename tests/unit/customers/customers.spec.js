import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import config from '@/store/modules/config';
import Customers from '@/views/customers/Customers';

describe('Customers.vue', () => {
    const localVue = createLocalVue();
    localVue.use(Vuex);
    const store = new Vuex.Store({ modules: { config } });

    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(Customers, {
            store,
            localVue,
            stubs: ['v-container'],
        });
    });

    it('Must have 1000 data in Customers.vue', () => {
        expect(wrapper.vm.items.length).toBe(1000);
    });
});
