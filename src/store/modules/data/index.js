import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';

const state = {
    benefits: [],
    policies: [],
    safety: [],
};

const namespaced = true;

export const data = {
    namespaced,
    state,
    getters,
    actions,
    mutations,
};
