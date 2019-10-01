import Vuex from 'vuex'
import authentication from './modules/authentication'
import cart from './modules/cart'
import profile from './modules/profile'
import spb from './modules/spb'

const store = () => {
    return new Vuex.Store({
        modules: {
            authentication,
            cart,
            profile,
            spb
        },
        state: {},
        mutations: {},
        getters: {},
        actions: {}
    })
}

export default store
