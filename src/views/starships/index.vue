<template>

    <v-app>

    <v-container class="grid-list-md text-xs-center">

        <v-text-field
                label="Digite a distância percorrida em mega lights (MGLT)"
                prepend-inner-icon="search"
                v-model="searchDistance"
        ></v-text-field>


        <v-layout row v-if="searchDistance">
            <v-flex  sm12 xs12>
                <v-card>
                    <v-toolbar color="teal" dark>
                        <!--<v-toolbar-side-icon></v-toolbar-side-icon>-->

                        <v-toolbar-title>
                            Espaçonaves
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

                                        {{ starship.name }} - paradas exigidas: {{stopstarship(starship.MGLT)}}
                                    </v-list-tile-title>
                                </v-list-tile-content>
                            </v-list-tile>

                            <v-list-tile>
                                <v-list-tile-content>
                                    <v-list-tile-title>Modelo: {{ starship.model }}</v-list-tile-title>

                                </v-list-tile-content>

                                <v-list-tile-action>
                                    <v-icon>{{ starship.action }}</v-icon>
                                </v-list-tile-action>
                            </v-list-tile>
                        </v-list-group>
                    </v-list>
                </v-card>

                <div class="text-xs-center">
                    <v-pagination
                            v-model="page"
                            :length="pages"
                            @input="starshipList"
                            circle
                    ></v-pagination>
                </div>

            </v-flex>

        </v-layout>





    </v-container>

    </v-app>

</template>

<script>

    import {mapGetters} from 'vuex'

    export default {
        name: "index",


        data() {
            return {
                page: 1,
                searchDistance:''
            }
        },

        computed:{

            ...mapGetters('starship', {
                starships: 'starships',
                pages: 'starshipLength'
            }),

        },

        watch: {

            searchDistance:function (value) {

                this.$store.commit('starship/setSearchDistance', value)

            }


        },



        methods: {

            starshipList(){

                return this.$store.dispatch('starship/listStarship', this.page);

            },

            stopstarship(mglt){

              return  mglt!='unknown'?Math.ceil(parseFloat(this.searchDistance)/parseFloat(mglt)) - 1:'Indefinido';

            }

        },

        created() {

          this.starshipList(1)

        }
    }
</script>
