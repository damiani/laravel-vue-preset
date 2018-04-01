/* JS dependencies */
require('./bootstrap');

/* Vue.js */
window.Vue = require('vue');
Vue.config.productionTip = false;

/* Store */
import Store from './store';
Vue.use(Store, {
    data: {},
    js_namespace: 'vue_app',
});

/* Vue VM */
Vue.component('example-component', require('./components/ExampleComponent.vue'));

const app = new Vue({
    el: '#app'
});
