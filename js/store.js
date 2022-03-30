import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

//init store
const store = new Vuex.Store({
    state: {
        globalError: '',
        user: {
            authenticated: false
        }
     },
     mutations: {
         setGlobalError (state, error) {
             state.globalError = error
         }
     }
})

export default store