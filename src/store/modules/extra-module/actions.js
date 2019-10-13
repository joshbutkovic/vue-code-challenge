import json from './../../../../benefits.json';

export const actions = {
    loadBenefits(context) {
        context.commit('loadBenefits', json);
    },
};
