import Vue from 'vue';
import ElementUI from 'element-ui';
import fetch from './utils/fetch';
import App from './App';
import router from './router';
import store from './store';
import './assets/styles/base';
import 'element-ui/lib/theme-chalk/index';

Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.$fetch = fetch;


new Vue({
    router,
    store,
    mounted() {
        document.dispatchEvent(new Event('render-event'));
    },
    render: (h) => h(App),
}).$mount('#app');
