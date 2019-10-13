import benefitsJson from './../../../../benefits.json';

export const actions = {
    loadData(context) {
        context.commit('loadData', benefitsJson);
    },
};
