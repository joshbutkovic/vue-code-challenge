export const getters = {
    benefits: state => {
        return state.data.benefits;
    },
    policies: state => {
        return state.policies;
    },
    safety: state => {
        return state.safety;
    },
    filteredBenefits: state => {
        return state.data.filteredBenefits;
    },
};
