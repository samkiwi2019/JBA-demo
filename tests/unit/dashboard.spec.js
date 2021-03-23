import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import config from '@/store/modules/config';
import Dashboard from '@/views/Dashboard';

describe('Dashboard.vue', () => {
    const localVue = createLocalVue();
    localVue.use(Vuex);
    const store = new Vuex.Store({ modules: { config } });

    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(Dashboard, {
            store,
            localVue,
            stubs: ['v-container'],
        });
    });

    it('Must have 1000 data in Dashboard.vue', async () => {
        expect(wrapper.vm.items.length).toBe(1000);
    });
});
