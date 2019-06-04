<template>

        <form-group :validator="$v.searchDistance" name="Distância percorrida">
            <template slot-scope="{ attrs }">
            <v-text-field
                    label="Digite a distância percorrida em mega lights (MGLT)"
                    prepend-inner-icon="search"
                    v-bind="attrs"
                    v-model="searchDistance"
                    @input="$v.searchDistance.$touch()"
            >
            </v-text-field>
            </template>
        </form-group>
</template>

<script>
    import {required, numeric} from "vuelidate/lib/validators";
    import FormGroup from "@/components/FormGroup.vue";

    export default {
        name: "SearchDistance",
        comments: {
            FormGroup
        },
        data() {
            return {
                searchDistance: ''

            }
        },

        watch: {

            searchDistance: function (value) {
                console.log(this.$v.searchDistance)
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

