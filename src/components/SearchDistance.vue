<template>

    <v-text-field
            label="Digite a distância percorrida em mega lights (MGLT)"
            prepend-inner-icon="search"
            v-model="searchDistance"
    ></v-text-field>

</template>

<script>
    export default {
        name: "SearchDistance",
        data() {
            return {
                searchDistance:''
            }
        },

        watch: {

            searchDistance:function (value) {

                this.$store.commit('starship/setSearchDistance', value)

            }


        },
    }
</script>

