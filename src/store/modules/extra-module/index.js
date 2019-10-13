import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';

const state = {
    benefits: [],
    status: null,
};

const namespaced = true;

export const benefits = {
    namespaced,
    state,
    getters,
    actions,
    mutations,
};
