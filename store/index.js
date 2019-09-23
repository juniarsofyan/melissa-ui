import Vuex from 'vuex'
import cart from './modules/cart'

const store = () => {
    return new Vuex.Store({modules: {
            cart
        }, state: {}, mutations: {}, getters: {}, actions: {}})
}

export default store
