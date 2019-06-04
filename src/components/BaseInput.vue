<template>
    <form-group :validator="v" :name="attributeError">
        <template slot-scope="{ attrs }">
            <v-text-field
                    :label="labelInput"
                    :prepend-inner-icon="iconInput"
                    v-bind="attrs"
                    v-model="name"
                    @input="v.$touch()"
            >
            </v-text-field>
        </template>
    </form-group>
</template>

<script>
    import FormGroup from "@/components/FormGroup.vue";

    export default {
        name: "BaseInput",
        comments:{
          FormGroup
        },
        props: {
            attributeError:{
              type:String,
              default:''
            },
            labelInput:{
              type:String,
              default:''
            },
            value: {
                type: String,
                default: ""
            },
            iconInput:{
                type:String,
                default: ''
            },
            v: {
                type: Object,
                required: true
            }
        },

        computed: {
            name: {
                get() {
                    return this.value;
                },
                set(value) {
                    this.$emit("input", value);
                }
            }
        }
    }
</script>

<style scoped>

</style>