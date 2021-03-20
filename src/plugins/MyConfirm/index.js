import Confirm from './Confirm'
import vuetify from '../vuetify';


function extendComponents(Vue, options, callback) {
    const Comp = Vue.extend(Confirm)
    const venusConfirm = document.getElementById('venus-toast')
    if (venusConfirm) document.body.removeChild(venusConfirm);
    const div = document.createElement('div')
    div.id = 'venus-confirm';
    document.body.appendChild(div)
    const ele = new Comp({
        propsData: {
            ...options,
            ok: (val) => {
                ele.$el.remove()
                const element = document.getElementById('venus-confirm')
                if (element) document.body.removeChild(element);
                callback && callback(val)
            },
        },
        vuetify
    }).$mount();
    div.appendChild(ele.$el);

}


const Toast = {};
Toast.install = function (Vue) {
    Vue.prototype.$confirm = {};
    ['primary', 'secondary', 'accent', 'error', 'info', 'success', 'warning', 'default'].forEach(type => {
        Vue.prototype.$confirm[type] = (options, callback) => {
            extendComponents(Vue, {
                ...options,
                color: type
            }, callback)
        }
    })

}


export default Toast;

