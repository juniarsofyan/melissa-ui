import Vuex from 'vuex'
import authentication from './modules/authentication'
import cart from './modules/cart'
import profile from './modules/profile'
import spb from './modules/spb'
import checkout from './modules/checkout'

const store = () => {
    return new Vuex.Store({
        modules: {
            authentication,
            cart,
            profile,
            spb,
            checkout,
        },
        state: {},
        mutations: {},
        getters: {},
        actions: {}
    })
}

export default store
