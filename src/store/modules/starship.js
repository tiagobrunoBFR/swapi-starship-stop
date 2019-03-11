import starshipService from './../../services/StarshipService'

export default {

    namespaced: true,
    state:{
        starshipsStore:[],
        searchDistanceStore: '',
        starshipLengthStore:''
    },

    mutations:{
        setStarshipStore(state, newStarship) {

            state.starshipsStore = newStarship
        },

        setSearchDistance(state, newSearchDistance) {

            state.searchDistanceStore = newSearchDistance
        },


        setStarshipLenght(state, newStarshipLength){

            state.starshipLengthStore = newStarshipLength

        }
    },

    actions:{
        async listStarship({commit}, page) {
            try {
                let response = await starshipService.getListStarships(page);
                 commit('setStarshipStore', response.data.results);
                 commit('setStarshipLenght', response.data.count);
            } catch (error) {
                commit('setStarshipStore', []);
            }
        },
    },

    getters:{
        starships(state) {

            return state.starshipsStore;

        },

        starshipLength(state) {

            return Math.ceil(state.starshipLengthStore/10)
        },

        searchDistance(state) {

           return state.searchDistanceStore
        }
    },
}