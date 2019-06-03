import Vue from 'vue'
import Vuelidate from "vuelidate";
import VuelidateErrorExtractor, { templates } from "vuelidate-error-extractor";

Vue.use(Vuelidate);
Vue.use(VuelidateErrorExtractor, {
    i18n: false,
    // Define common validation messages.
    messages: {
        required: "{attribute} é obrigatório!",
        isJoe: "{attribute} must be Joe",
        notGmail: "{attribute} must not be gmail",
        email: "{attribute} is not a valid Email address.",
        isEmailAvailable:
            "{attribute} is not available. Must be at least 10 characters long."
    }
});



Vue.component("form-group", templates.singleErrorExtractor.foundation6);
