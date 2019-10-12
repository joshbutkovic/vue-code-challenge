export const getters = {
    inStock: state => {
        return state.products.filter(products => products.inStock);
    },
};
