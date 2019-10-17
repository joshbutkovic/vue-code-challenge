import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';

const state = {
    benefits: [],
    filteredBenefits: [],
    policies: [],
    safety: [],
    dismissedCardTitles: [],
};

const namespaced = true;

export const data = {
    namespaced,
    state,
    getters,
    actions,
    mutations,
};
