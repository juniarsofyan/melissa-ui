import Vuex from 'vuex'
import cart from './modules/cart'
import profile from './modules/profile'
import auth0 from 'auth0-js'

const store = () => {
    return new Vuex.Store({
        modules: {
            cart,
            profile
        },
        state: {
            userIsAuthorized: false,
            auth0: new auth0.WebAuth(
                {
                    domain: process.env.VUE_APP_AUTH0_CONFIG_DOMAIN,
                    clientID: process.env.VUE_APP_AUTH0_CONFIG_CLIENTID,
                    redirectUri: process.env.VUE_APP_DOMAINURL + '/profile',
                    responseType: process.env.VUE_APP_AUTH0_CONFIG_RESPONSETYPE,
                    scope: process.env.VUE_APP_AUTH0_CONFIG_SCOPE
                }
            )
        },
        mutations: {
            setUserIsAuthenticated(state, replacement) {
                state.userIsAuthorized = replacement
            }
        },
        getters: {
            isAuthenticated(state) {
                return state.auth.loggedIn
            },

            loggedInUser(state) {
                return state.auth.user
            }
        },
        actions: {
            auth0Login(context) { // console.log(" in a store action named auth0Login")
                context.state.auth0.authorize()
            }
        }
    })
}

export default store
