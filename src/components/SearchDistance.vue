<template>
     <span>

         <base-input
                 labelInput="Digite a distância percorrida em mega lights (MGLT)"
                 iconInput="search"
                 v-model="searchDistance"
                 attributeError="Distância percorrida"
                 :v="$v.searchDistance">
         </base-input>

     </span>

</template>

<script>
    import {required, numeric} from "vuelidate/lib/validators";
    import BaseInput from "@/components/BaseInput";

    export default {
        name: "SearchDistance",
        components: {BaseInput},
        data() {
            return {
                searchDistance: ''

            }
        },

        watch: {

            searchDistance: function (value) {
                if (!this.$v.$invalid) {
                    this.$store.commit('starship/setSearchDistance', value)
                }
            }
        },
        validations: {
            searchDistance: {required, numeric},
        }

    }
</script>

