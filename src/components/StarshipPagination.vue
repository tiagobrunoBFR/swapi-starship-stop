<template>

    <v-pagination
            v-model="page"
            :length="pages"
            @input="starshipList"
            circle
    ></v-pagination>

</template>

<script>
    import {mapGetters} from 'vuex'


    export default {
        name: "StarshipPagination",
        data() {
            return {
                page: 1,
            }
        },

        computed:{

            ...mapGetters('starship', {
                pages: 'starshipLength',

            }),

        },





        methods: {

            starshipList(){

                return this.$store.dispatch('starship/listStarship', this.page);

            },



        },



    }
</script>

<style scoped>

</style>