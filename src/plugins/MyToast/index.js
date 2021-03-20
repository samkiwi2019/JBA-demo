import MyToast from './Toast'
import vuetify from '../vuetify';


function extendComponents(Vue, options, callback) {
    const Comp = Vue.extend(MyToast)
    const venusToast = document.getElementById('venus-toast')
    if (venusToast) venusToast.remove();

    const div = document.createElement('div')
    div.id = "venus-toast";
    const container = document.getElementsByClassName('v-application--wrap')[0]
    container.appendChild(div)
    const ele = new Comp({
        propsData: {
            ...options,
            close: () => {
                ele.$el.remove()
                const element = document.getElementById("venus-toast")
                if (element) element.remove();
                callback && callback()
            },
        },
        vuetify
    }).$mount();

    div.appendChild(ele.$el);

}


const Toast = {};
Toast.install = function (Vue) {
    Vue.prototype.$toast = {};
    ['primary', 'secondary', 'accent', 'error', 'info', 'success', 'warning', 'default'].forEach(type => {
        Vue.prototype.$toast[type] = (text, callback) => {
            const options = {
                text: text,
                color: type,
            }
            extendComponents(Vue, options, callback)
        }
    })

}


export default Toast;

