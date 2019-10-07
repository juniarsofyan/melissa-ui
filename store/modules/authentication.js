import auth0 from 'auth0-js'

const authentication = {
    namespaced: true,
    state: {
        userIsAuthorized: localStorage.getItem('userIsAuthorized') ? localStorage.getItem('userIsAuthorized') : false,
        auth0: new auth0.WebAuth(
            {
                domain: process.env.VUE_APP_AUTH0_CONFIG_DOMAIN,
                clientID: process.env.VUE_APP_AUTH0_CONFIG_CLIENTID,
                redirectUri: process.env.VUE_APP_DOMAINURL + '/profile',
                responseType: process.env.VUE_APP_AUTH0_CONFIG_RESPONSETYPE,
                scope: process.env.VUE_APP_AUTH0_CONFIG_SCOPE
            }
        ),
        user_data: localStorage.getItem('user_data') ? JSON.parse(localStorage.getItem('user_data')) : [],
        email: localStorage.getItem('email') ? localStorage.getItem('email') : false,
        access_token: localStorage.getItem('access_token') ? localStorage.getItem('access_token') : false,
        id_token: localStorage.getItem('id_token') ? localStorage.getItem('id_token') : false,
        expires_at: localStorage.getItem('expires_at') ? localStorage.getItem('expires_at') : false
    },
    mutations: {
        setUserIsAuthenticated(state, replacement) {
            state.userIsAuthorized = replacement
            localStorage.setItem('userIsAuthorized', replacement)
        },
        setUserData(state, replacement) {
            state.user_data = replacement
            localStorage.setItem('user_data', JSON.stringify(replacement))
        },
        setUserData(state, replacement) {
            state.user_data = replacement
            localStorage.setItem('user_data', JSON.stringify(replacement))
        },
        setEmail(state, replacement) {
            state.email = replacement
            localStorage.setItem('email', replacement)
        },
        setAccessToken(state, replacement) {
            state.access_token = replacement
            localStorage.setItem('access_token', replacement)
        },
        setIdToken(state, replacement) {
            state.id_token = replacement
            localStorage.setItem('id_token', replacement)
        },
        setExpiresAt(state, replacement) {
            state.expires_at = replacement
            localStorage.setItem('expires_at', replacement)
        }
    },
    getters: {
        userIsAuthorized(state) {
            return state.userIsAuthorized
        },
        user_data(state) {
            return state.user_data
        },
        email(state) {
            return state.email
        },
        access_token(state) {
            return state.access_token
        },
        id_token(state) {
            return state.id_token
        },
        expires_at(state) {
            return state.expires_at
        }
    },
    actions: {
        auth0Login(context) {
            context.state.auth0.authorize()
        },
        addItem( {state, commit}, payload) {
            commit('addItem', payload)
        },
        auth0HandleAuthentication({state, commit}) {
            state.auth0.parseHash((err, authResult) => {
                if (authResult && authResult.accessToken && authResult.idToken) {

                    let expiresAt = JSON.stringify(authResult.expiresIn * 1000 + new Date().getTime())
                    // let expiresAt = JSON.stringify(authResult.expiresIn * 1000 + new Date().getTime())

                    // save the tokens locally
                    /* localStorage.setItem('email', authResult.idTokenPayload.email)
                    localStorage.setItem('access_token', authResult.accessToken)
                    localStorage.setItem('id_token', authResult.idToken)
                    localStorage.setItem('expires_at', expiresAt) */

                    /* localStorage.setItem('user_data', JSON.stringify({
                        name: authResult.idTokenPayload.name,
                        email: authResult.idTokenPayload.email,
                        picture: authResult.idTokenPayload.picture
                    })) */

                    // set global ui understanding of authentication

                    commit('setEmail', authResult.idTokenPayload.email)
                    commit('setAccessToken', authResult.accessToken)
                    commit('setIdToken', authResult.idToken)
                    commit('setExpiresAt', expiresAt)

                    commit('setUserData', {
                        name: authResult.idTokenPayload.name,
                        email: authResult.idTokenPayload.email,
                        picture: authResult.idTokenPayload.picture
                    })

                    commit('setUserIsAuthenticated', true)
                }
            })
        },
        auth0Logout({state, commit}) {
            // No need to update the bearer in global axiosConfig to null because we are redirecting out of the application

            commit('setEmail', false)
            commit('setAccessToken', false)
            commit('setIdToken', false)
            commit('setExpiresAt', false)
            commit('setUserData', [])
            commit('setUserIsAuthenticated', false)

            // Clear Access Token and ID Token from local storage
            localStorage.removeItem('user_data');
            localStorage.removeItem('email');
            localStorage.removeItem('userIsAuthorized');
            localStorage.removeItem('access_token');
            localStorage.removeItem('id_token');
            localStorage.removeItem('expires_at');

            // redirect to auth0 logout to completely log the user out
            window.location.href = process.env.VUE_APP_AUTH0_CONFIG_DOMAINURL + "/v2/logout?returnTo=" + process.env.VUE_APP_DOMAINURL + "&client_id=" + process.env.VUE_APP_AUTH0_CONFIG_CLIENTID;
        }
    }
}

export default authentication
