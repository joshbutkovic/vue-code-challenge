export const actions = {
    loadData(context, data) {
        context.commit('loadData', data);
    },
    searchBenefits(context, searchTerm) {
        context.commit('searchBenefits', searchTerm);
    },
    dismissCard(context, cardTitle) {
        context.commit('dismissCard', cardTitle);
    },
};
