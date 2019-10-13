import Vue from 'vue';

export const mutations = {
    loadData(state, data) {
        Vue.set(state, 'data', data);
    },
    // addProduct(state, product) {
    //     let products = state.products;
    //     products.push(product);
    //     Vue.set(state, 'products', products);
    // },
};
