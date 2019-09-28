import Vuex from 'vuex'
import cart from './modules/cart'
import profile from './modules/profile'

const store = () => {
    return new Vuex.Store({
        modules: {
            cart,
            profile
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
