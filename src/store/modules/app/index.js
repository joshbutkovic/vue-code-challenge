import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';

const state = {
    searchTerm: '',
    theme: '',
};

const namespaced = true;

export const app = {
    namespaced,
    state,
    getters,
    actions,
    mutations,
};
