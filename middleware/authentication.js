export default function ({store, redirect}) { // set login data
    store.dispatch('authentication/auth0HandleAuthentication')

    // check if user is logged in
    // (start assuming the user is not logged in = false)
    let routerAuthCheck = false

    // Verify all the proper access variables are present for proper authorization
    if (localStorage.getItem('access_token') && localStorage.getItem('id_token') && localStorage.getItem('expires_at')) { // Check whether the current time is past the Access Token's expiry time
        let expiresAt = JSON.parse(localStorage.getItem('expires_at'))

        // set localAuthTokenCheck true if unexpired / false if expired
        routerAuthCheck = new Date().getTime() < expiresAt
    }

    // set global ui understanding of authentication
    store.commit('authentication/setUserIsAuthenticated', routerAuthCheck)


    if (! routerAuthCheck) {
        redirect('/')
    }
}
