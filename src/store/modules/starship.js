import starshipService from '.@/services/StarshipService'

const state = {
    starshipsStore:[],
    search_distance: '',
    stopStarshipStore:''
}

// getters
const getters = {
    starships(state) {
        // console.log(state.search_distance);
        //    for (var key in state.starshipsStore) {
        //        state.starshipsStore[key].MGLT = Math.ceil(parseFloat(state.search_distance)/parseFloat(state.starshipsStore[key].MGLT)) - 1
        //    }

        return state.starshipsStore;


    },

    stopStarship(state) {

        return state.stopStarshipStore

    }
}

// actions
const actions = {
    async updateStarship(context, page = 1) {
        try {
            let response = await starshipService.getListStarships(page);
            return context.commit('updateStarshipStore', response.data.results);
        } catch (error) {
            context.commit('updateStarshipStore', []);
        }
    },

    stopStarship({state}, mglt) {

        try {
            return state.commit('updateStopStarship', Math.ceil(parseFloat(state.search_distance)/parseFloat(mglt)) - 1)

        } catch (e) {
            return state.commit('updateStopStarship', 'unknowm')
        }
    }
}

// mutations
const mutations = {
    updateStarshipStore(state, newStarship) {

        state.starshipsStore = newStarship
    },

    updateSearchDistance(state, newSearchDistance) {

        state.search_distance = newSearchDistance
    },

    updateStopStarship(state, newStopstarship){

        state.stopStarshipStore = newStopstarship

    }
}

export default {

    namespaced: true,
    state,
    getters,
    actions,
    mutations
}