<template>

    <master>
        <v-container class="grid-list-md text-xs-center">

           <search-distance />

<!--            <v-layout row v-if="searchDistance">-->
<!--                <v-flex  sm12 xs12>-->

<!--                    <starship-list />-->

<!--                    <div class="text-xs-center">-->
<!--                       <starship-pagination/>-->
<!--                    </div>-->

<!--                </v-flex>-->

<!--            </v-layout>-->

        </v-container>

    </master>


</template>

<script>

    import {mapGetters} from 'vuex'
    import Master from '@/templates/Master'
    import SearchDistance from '@/components/SearchDistance'
    import StarshipList from '@/components/StarshipList'
    import StarshipPagination from "@/components/StarshipPagination";

    export default {
        name: "index",

        components: {StarshipPagination, StarshipList, SearchDistance, Master},

        computed:{

            ...mapGetters('starship', {
                searchDistance:'searchDistance'

            }),

        },

        created() {

            return this.$store.dispatch('starship/listStarship', 1);


        }
    }
</script>
