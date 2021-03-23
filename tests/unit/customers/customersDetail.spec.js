import { createLocalVue, mount, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import config from '@/store/modules/config';
import CustomersDetail from '@/views/customers/CustomersDetail';

describe('CustomersDetail.vue', () => {
    const localVue = createLocalVue();
    localVue.use(Vuex);
    const store = new Vuex.Store({ modules: { config } });

    const $route = {
        path: '/customers/1',
        params: { customerId: 1 },
    };

    let wrapper;
    beforeEach(() => {
        wrapper = mount(CustomersDetail, {
            store,
            localVue,
            mocks: {
                $route,
            },
            stubs: [
                'v-container',
                'v-card-text',
                'base-material-card',
                'v-row',
                'v-breadcrumbs',
                'v-col',
            ],
        });
    });

    it('the User should not be empty!', () => {
        expect(wrapper.vm.customers.length).toBe(1000);
        expect(wrapper.vm.$route.params.customerId).toBe(1);
        expect(wrapper.vm.user.name).toBeTruthy();
    });
});
