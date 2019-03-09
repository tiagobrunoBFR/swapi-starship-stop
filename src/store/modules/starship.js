import starshipService from './../../services/StarshipService'

export default {

    namespaced: true,
    state:{
        starshipsStore:[],
        search_distance: '',
        stopStarshipStore:'',
        starshipLengthStore:''
    },

    mutations:{
        updateStarshipStore(state, newStarship) {

            state.starshipsStore = newStarship
        },

        updateSearchDistance(state, newSearchDistance) {

            state.search_distance = newSearchDistance
        },

        updateStopStarship(state, newStopstarship){

            state.stopStarshipStore = newStopstarship

        },

        setStarshipLenght(state, newStarshipLength){

            state.starshipLengthStore = newStarshipLength

        }
    },

    actions:{
        async updateStarship({commit}, page = 1) {
            try {
                let response = await starshipService.getListStarships(page);
                 commit('updateStarshipStore', response.data.results);
                 commit('setStarshipLenght', response.data.count);
            } catch (error) {
                commit('updateStarshipStore', []);
            }
        },

        stopStarship({state}, mglt) {

            try {
                return state.commit('updateStopStarship', Math.ceil(parseFloat(state.search_distance)/parseFloat(mglt)) - 1)

            } catch (e) {
                return state.commit('updateStopStarship', 'unknowm')
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

        }
    },
}