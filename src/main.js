import Vue from 'vue';
import App from './App.vue';
import '../node_modules/bulma/css/bulma.css';
import router from './router';
import { store } from './store';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faSearch, faWindowClose);

Vue.config.productionTip = false;

Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
    mode: 'history',
    store,
    router,
    render: h => h(App),
}).$mount('#app');
