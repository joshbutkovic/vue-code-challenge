import Vue from 'vue';

export const mutations = {
    loadData(state, data) {
        Vue.set(state, 'data', data);
    },
    // eslint-disable-next-line
    filteredBenefits(state, searchTerm) {
        // eslint-disable-next-line
        // eslint-disable-next-line
        console.log('inside search benefits');
        // eslint-disable-next-line
        console.log(state.data['benefits']);
        // eslint-disable-next-line
        console.log(searchTerm);
        let benefits = state.data['benefits'];
        let filteredBenefits = [];

        for (let item of benefits) {
            if (
                item.title.includes(searchTerm) ||
                item.description.includes(searchTerm)
            ) {
                filteredBenefits.push(item);
            }
        }
        // eslint-disable-next-line
        console.log(filteredBenefits);
        Vue.set(state, 'data', { sample: 'thing' });
    },
    // setProducts(state, products) {
    //     Vue.set(state, 'products', products);
    // },
    // setSearchTerm(state, searchTerm) {
    //     Vue.set(state, 'data', searchTerm);
    // },
    // addProduct(state, product) {
    //     let products = state.products;
    //     products.push(product);
    //     Vue.set(state, 'products', products);
    // },
};
