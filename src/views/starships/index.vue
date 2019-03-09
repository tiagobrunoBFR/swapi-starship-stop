<template>

    <v-app>

    <v-container class="grid-list-md text-xs-center">

        <v-text-field
                label="Digite a distância percorrida, em mega lights (MGLT)"
                prepend-inner-icon="search"
                v-model="search_distance"
        ></v-text-field>


        <v-layout row>
            <v-flex  sm12 xs12>
                <v-card>
                    <v-toolbar color="teal" dark>
                        <!--<v-toolbar-side-icon></v-toolbar-side-icon>-->

                        <v-toolbar-title>
                            Starships
                        </v-toolbar-title>

                        <v-spacer></v-spacer>

                        <v-btn icon>
                        <v-icon>more_vert</v-icon>
                        </v-btn>
                    </v-toolbar>

                    <v-list>
                        <v-list-group
                                :key="starship.name"
                                v-for="starship in starships"
                                v-model="starship.active"
                        >
                            <v-list-tile slot="activator">
                                <v-list-tile-content>
                                    <v-list-tile-title>
                                        <v-icon>fas fa-space-shuttle</v-icon>

                                        {{ starship.name }} - paradas exigidas:
                                    </v-list-tile-title>
                                </v-list-tile-content>
                            </v-list-tile>

                            <v-list-tile>
                                <v-list-tile-content>
                                    <v-list-tile-title>Model: {{ starship.model }}</v-list-tile-title>

                                </v-list-tile-content>

                                <v-list-tile-action>
                                    <v-icon>{{ starship.action }}</v-icon>
                                </v-list-tile-action>
                            </v-list-tile>
                        </v-list-group>
                    </v-list>
                </v-card>
            </v-flex>
        </v-layout>



            <div class="text-xs-center">
                <v-pagination
                    v-model="page"
                    :length="pages"
                    @input="starshipList"
                    circle
                ></v-pagination>
            </div>

    </v-container>

    </v-app>

</template>

<script>

    // import StarshipsService from '../../services/StarshipService'
    import {mapGetters} from 'vuex'

    export default {
        name: "index",
        // components: [
        //        // Card
        // ],

        data() {
            return {
               // starships: [],
                page: 1,
                search_distance:'',
                 //length: this.starships!=''?Math.ceil(this.starships.results.length/10):null
            }
        },

        computed:{

            ...mapGetters('starship', {
                starships: 'starships',
                pages: 'starshipLength'
            }),



            // starships(){
            //
            //    return this.$store.getters.starship.starships
            //
            // },

            // stopStarship(){
            //
            //    return this.$store.dispatch('starship/stopStarship')
            // },

        },

        // watch:{
        //     // ...mapActions('starship', {
        //     //     search_distance:{
        //     //         this.$store.commit('starship/updateSearchDistance', value)
        //     //       //  this.$store.dispatch('starship/updateStarship', 1);
        //     //     }
        //     // }),
        //
        //     page:{
        //         get () {
        //             return this.$store.getters.starship.starshipLength
        //         },
        //         set (value) {
        //           return this.$store.dispatch('starship/updateStarship', value)
        //
        //         }
        //     }
        //
        // },




        methods: {


            // editListStarships(){
            //  var self = this;
            // alert('Pegou');
            //
            //     this.starships.results.map( function( item ) {
            //       return parseFloat(self.search_distance)/parseFloat(item.MGLT)
            //     });
            //
            // },

            // calculateStops(value) {
            //
            //     return  Math.ceil(parseFloat(this.search_distance)/parseFloat(value))
            //     //
            //     // let distance = null;
            //     // var self = this;
            //     // switch (value) {
            //     //     // case value == 'unknown':
            //     //     //     distance = 'unknown'
            //     //     //     break;
            //     //     case self.isNumber(self.search_distance):
            //     //         distance = Math.ceil(parseFloat(self.search_distance)/parseFloat(value));
            //     //         break;
            //     //     default:
            //     //         distance = 'unknown'
            //     // }
            //     //
            //     // return distance;
            // },

            starshipList(){

                return this.$store.dispatch('starship/updateStarship', this.page);

            }

        },

        created() {

          this.starshipList(1)

        }
    }
</script>

<style scoped>

</style>