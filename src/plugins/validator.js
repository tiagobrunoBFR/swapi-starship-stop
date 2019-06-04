import Vue from 'vue'
import Vuelidate from "vuelidate";
import VuelidateErrorExtractor, { templates } from "vuelidate-error-extractor";
import FormGroup from '@/components/FormGroup'
Vue.use(Vuelidate);
Vue.use(VuelidateErrorExtractor, {
    i18n: false,
    // Define common validation messages.
    messages: {
        required: "{attribute} é obrigatório!",
        numeric: "{attribute} deve conter um valor númerico",
        email: "{attribute} não é um e-mail válido.",

    }
});


Vue.component("FormGroup", FormGroup);
Vue.component("FormWrapper", templates.FormWrapper);
