import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';

const state = {
    searchTerm: '',
};

const namespaced = true;

export const app = {
    namespaced,
    state,
    getters,
    actions,
    mutations,
};
