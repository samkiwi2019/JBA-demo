import Vue from 'vue';
import App from './App.vue';
import router from '@/routes';
import store from '@/store';
import vuetify from '@/plugins/vuetify';
import i18n from '@/plugins/i18n';
import '@/plugins/base';
import MyToast from '@/plugins/MyToast';
import MyConfirm from '@/plugins/MyConfirm';

import '@/sass/index.scss';

Vue.config.productionTip = false;

Vue.use(MyToast);
Vue.use(MyConfirm);

new Vue({
    router,
    store,
    i18n,
    vuetify,
    render: (h) => h(App),
}).$mount('#app');
