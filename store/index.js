import Vuex from 'vuex'
import authentication from './modules/authentication'
import cart from './modules/cart'
import profile from './modules/profile'

const store = () => {
    return new Vuex.Store({
        modules: {
            authentication,
            cart,
            profile
        },
        state: {},
        mutations: {},
        getters: {},
        actions: {}
    })
}

export default store
