import Vue from 'vue';
export const mutations = {
    loadData(state, data) {
        Vue.set(state, 'data', data);
    },
};
