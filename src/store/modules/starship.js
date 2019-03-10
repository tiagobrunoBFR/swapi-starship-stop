import starshipService from './../../services/StarshipService'

export default {

    namespaced: true,
    state:{
        starshipsStore:[],
        searchDistanceStore: '',
        stopStarshipStore:'',
        starshipLengthStore:''
    },

    mutations:{
        setStarshipStore(state, newStarship) {

            state.starshipsStore = newStarship
        },

        setSearchDistance(state, newSearchDistance) {

            state.searchDistanceStore = newSearchDistance
        },

        setStopStarship(state, newStopstarship){

            state.stopStarshipStore = newStopstarship

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

         stopStarship({getters}, mglt) {

            try {
                return Math.ceil(parseFloat(getters.searchDistance)/parseFloat(mglt)) - 1

            } catch (e) {
                return 'unknowm'
            }
        }
    },

    getters:{
        starships(state) {

            return state.starshipsStore;

        },

        stopStarship(state) {

            return state.stopStarshipStore

        },

        starshipLength(state) {

            return Math.ceil(state.starshipLengthStore/10)
        },

        searchDistance(state) {

           return state.searchDistanceStore
        }
    },
}