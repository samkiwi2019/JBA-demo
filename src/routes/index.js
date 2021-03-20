import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// Reset scroll to top
const scrollBehavior = (to, from, savedPosition) => {
    if (savedPosition) {
        return savedPosition;
    } else {
        const position = {};
        if (to.hash) {
            position.selector = to.hash;
        }
        if (to.matched.some((m) => m.meta.scrollToTop)) {
            position.x = 0;
            position.y = 0;
        }
        return position;
    }
};

const routes = [
    {
        path: '/',
        meta: { scrollToTop: true },
        redirect: { path: '/dashboard' },
        name: 'home',
    },
    {
        icon: 'mdi-view-dashboard',
        path: '/dashboard',
        isMenu: true,
        name: 'dashboard',
        meta: { scrollToTop: true },
        component: () => import('../views/Dashboard'),
    },
    {
        icon: 'mdi-account-group',
        path: '/customers',
        isMenu: true,
        name: 'customers',
        meta: { scrollToTop: true },
        component: () => import('../views/customers/Customers'),
    },
    {
        icon: 'mdi-account',
        path: '/customers/:customerId',
        name: 'customers-detail',
        meta: { scrollToTop: true },
        component: () => import('@/views/customers/CustomersDetail'),
    },
];

const router = new VueRouter({
    mode: 'history',
    scrollBehavior,
    routes,
});

export { routes };
export default router;
