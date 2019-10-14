import Vue from 'vue';

export const mutations = {
    setSearchTerm(state, searchTerm) {
        Vue.set(state, 'searchTerm', searchTerm);
    },
    // addProduct(state, product) {
    //     let products = state.products;
    //     products.push(product);
    //     Vue.set(state, 'products', products);
    // },
};
