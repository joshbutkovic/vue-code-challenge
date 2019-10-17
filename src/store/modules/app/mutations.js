import Vue from 'vue';

export const mutations = {
    setSearchTerm(state, searchTerm) {
        Vue.set(state, 'searchTerm', searchTerm);
    },
    setTheme(state, theme) {
        Vue.set(state, 'theme', theme);
    },
};
