const authentication = {
    namespaced: true,
    state: {
        accesskey: localStorage.getItem('accesskey') ? JSON.parse(localStorage.getItem('accesskey')) : false,
        userIsAuthorized: localStorage.getItem('userIsAuthorized') ? localStorage.getItem('userIsAuthorized') : false,
        user_data: localStorage.getItem('user_data') ? JSON.parse(localStorage.getItem('user_data')) : [],
        email: localStorage.getItem('email') ? localStorage.getItem('email') : false,
    },
    mutations: {
        setAccessKey(state, replacement) {
            state.accesskey = replacement
            localStorage.setItem('accesskey', JSON.stringify(replacement))
        },
        setUserIsAuthenticated(state, replacement) {
            state.userIsAuthorized = replacement
            localStorage.setItem('userIsAuthorized', replacement)
        },
        setUserData(state, replacement) {
            state.user_data = replacement
            localStorage.setItem('user_data', JSON.stringify(replacement))
        },
        setEmail(state, replacement) {
            state.email = replacement
            localStorage.setItem('email', replacement)
        },
    },
    getters: {
        accesskey(state) {
            return state.accesskey
        },
        userIsAuthorized(state) {
            return state.userIsAuthorized
        },
        user_data(state) {
            return state.user_data
        },
        email(state) {
            return state.email
        },
    },
    actions: {
        setAccessKey({ commit }, payload) {
            commit('setAccessKey', payload)
            commit('setEmail', payload.email)
            commit('setUserData', {
                name: payload.nama,
                email: payload.email,
            })
            commit('setUserIsAuthenticated', true)
        },
        addItem({ state, commit }, payload) {
            commit('addItem', payload)
        },
        auth0Logout({state, commit}) {
            // set credential data to false in vuex
            commit('setAccessKey', false)
            commit('setEmail', false)
            commit('setUserData', [])
            commit('setUserIsAuthenticated', false)

            // Clear credential data from local storage
            localStorage.removeItem('accesskey');
            localStorage.removeItem('email');
            localStorage.removeItem('user_data');
            localStorage.removeItem('userIsAuthorized');

            // redirect to auth0 logout to completely log the user out
            window.location.href = process.env.VUE_APP_AUTH0_CONFIG_DOMAINURL + "/v2/logout?returnTo=" + process.env.VUE_APP_DOMAINURL + "&client_id=" + process.env.VUE_APP_AUTH0_CONFIG_CLIENTID;
        }
    }
}

export default authentication
