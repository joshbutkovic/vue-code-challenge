import Vue from 'vue';
import Vuex from 'vuex';
import { benefits } from './modules/benefits';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        benefits,
    },
});
