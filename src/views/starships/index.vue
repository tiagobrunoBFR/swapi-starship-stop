<template>

        <v-container grid-list-md text-xs-center>
        <v-text-field
                label="Buscar Espaçonave"
                prepend-inner-icon="search"
                @keyup="keydownSearch"
                v-model="search_starships"
        ></v-text-field>
        </v-container>



</template>

<script>
    export default {
        name: "index",
        data(){
            return {
                search_starships:''
            }
        },

        methods:{

            keydownSearch()
            {
               return console.warn(this.search_starships)
            }

        }
    }
</script>

<style scoped>

</style>