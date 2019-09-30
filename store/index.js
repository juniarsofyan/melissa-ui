import Vuex from 'vuex'
import cart from './modules/cart'
import profile from './modules/profile'
import auth0 from 'auth0-js'
import router from 'vue-router'

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
            },
            auth0HandleAuthentication(context) {
                context.state.auth0.parseHash((err, authResult) => {
                    if (authResult && authResult.accessToken && authResult.idToken) {
                        let expiresAt = JSON.stringify(authResult.expiresIn * 1000 + new Date().getTime())
                        // save the tokens locally
                        localStorage.setItem('access_token', authResult.accessToken);
                        localStorage.setItem('id_token', authResult.idToken);
                        localStorage.setItem('expires_at', expiresAt);

                        // router.push('/members');
                        // return redirect('/profile')
                    } else if (err) {
                        alert('login failed. Error #KJN838');
                        // router.push('/login');
                        // return redirect('/login')
                        console.log(err);
                    }
                })
            },
            auth0Logout(context) {
                // No need to update the bearer in global axiosConfig to null because we are redirecting out of the application
                // Clear Access Token and ID Token from local storage
                localStorage.removeItem('access_token');
                localStorage.removeItem('id_token');
                localStorage.removeItem('expires_at');

                // redirect to auth0 logout to completely log the user out
                window.location.href = process.env.VUE_APP_AUTH0_CONFIG_DOMAINURL + "/v2/logout?returnTo=" + process.env.VUE_APP_DOMAINURL + "/login&client_id=" + process.env.VUE_APP_AUTH0_CONFIG_CLIENTID;
            }
        }
    })
}

export default store
