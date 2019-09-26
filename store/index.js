import Vuex from 'vuex'
import cart from './modules/cart'

const store = () => {
    return new Vuex.Store({
        modules: {
            cart
        },
        state: {},
        mutations: {},
        getters: {
            isAuthenticated(state) {
                return state.auth.loggedIn
            },

            loggedInUser(state) {
                return state.auth.user
            }
        },
        actions: {}
    })
}

export default store
