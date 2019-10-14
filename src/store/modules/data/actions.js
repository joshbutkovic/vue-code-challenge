export const actions = {
    loadData(context, data) {
        context.commit('loadData', data);
    },
    searchBenefits(context, searchTerm) {
        context.commit('searchBenefits', searchTerm);
    },
    filteredBenefits(context, benefits) {
        context.commit('filteredBenefits', benefits);
    },
};
