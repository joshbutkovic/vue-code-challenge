export const actions = {
    getProducts(context) {
        // this.axios.get('/api/products').then(response => {
        //     let products = response.data.data;
        let products = [
            { product: 'product', inStock: true },
            { product: 'product2', inStock: false },
        ];
        context.commit('setProducts', products);
        // });
    },
    addProduct(context, product) {
        context.commit('addProduct', product);
    },
};
