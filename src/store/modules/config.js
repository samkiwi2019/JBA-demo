import data from './data.json';

import * as R from 'ramda';

const state = {
    barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
    drawer: true,
    items: data, // origin data
    itemsByAge: {}, // splited by ages
    itemsByGender: {}, // splited by gender
};

// getters
const getters = {};

// actions

/**
 * @param {Array} payload
 */
const actions = {
    splitDataByAgeGroup({ state, commit }) {
        if (!R.isEmpty(state.itemsByAge)) return; // it will only be executed when "itemsByAge" is empty.

        const byAge = R.groupBy((item) => {
            const age = item.age;
            return age < 20
                ? '20'
                : age < 30
                ? '30'
                : age < 40
                ? '40'
                : age < 50
                ? '50'
                : age < 60
                ? '60'
                : age < 70
                ? '70'
                : age < 80
                ? '80'
                : age < 90
                ? '90'
                : '100';
        });
        commit('SET_ITEMS_BY_AGE', byAge(state.items));
    },
    splitDataByGenderGroup({ state, commit }) {
        if (!R.isEmpty(state.itemsByGender)) return; // it will only be executed when "itemsByGender" is empty.
        const byGender = R.groupBy((item) => item.gender);
        commit('SET_ITEMS_BY_GENDER', byGender(state.items));
    },
};

// mutations
const mutations = {
    SET_DRAWER(state, payload) {
        state.drawer = payload;
    },
    SET_ITEMS_BY_AGE(state, payload) {
        state.itemsByAge = payload;
    },
    SET_ITEMS_BY_GENDER(state, payload) {
        state.itemsByGender = payload;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
