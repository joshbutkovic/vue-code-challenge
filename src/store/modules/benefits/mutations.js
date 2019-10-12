import Vue from 'vue';

export const mutations = {
    loadBenefits(state, benefits) {
        Vue.set(state, 'benefits', benefits);
    },
    // addProduct(state, product) {
    //     let products = state.products;
    //     products.push(product);
    //     Vue.set(state, 'products', products);
    // },
};
