export const actions = {
    setSearchTerm(context, searchTerm) {
        context.commit('setSearchTerm', searchTerm);
    },
    setTheme(context, theme) {
        context.commit('setTheme', theme);
    },
};
