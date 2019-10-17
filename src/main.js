import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { store } from './store';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faSearch,
    faWindowClose,
    faChevronCircleRight,
    faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faSearch, faWindowClose, faChevronCircleRight, faCheckCircle);

Vue.config.productionTip = false;

Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
    mode: 'history',
    store,
    router,
    render: h => h(App),
}).$mount('#app');
