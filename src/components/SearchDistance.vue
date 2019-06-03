<template>
    <form>

    <form-group :validator="$v.searchDistance" label="Username">
    <v-text-field
                label="Digite a distância percorrida em mega lights (MGLT)"
                prepend-inner-icon="search"
                v-model="searchDistance"
                @input="$v.searchDistance.$touch()"
        >
    </v-text-field>
    </form-group>
    </form>
</template>

<script>
    import {required, numeric} from "vuelidate/lib/validators";

    export default {
        name: "SearchDistance",
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

