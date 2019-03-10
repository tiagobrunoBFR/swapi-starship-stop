<template>
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

</template>

<script>
    import {mapGetters} from 'vuex'


    export default {
        name: "StarshipList",


        computed:{

            ...mapGetters('starship', {
                starships: 'starships',
                searchDistance:'searchDistance'
            }),

        },





        methods: {


            stopstarship(mglt){

                return  mglt!='unknown'?Math.ceil(parseFloat(this.searchDistance)/parseFloat(mglt)) - 1:'Indefinido';

            }

        },

    }
</script>

<style scoped>

</style>