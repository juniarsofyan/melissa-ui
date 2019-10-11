export default function ({store, redirect}) { 
    // set login data
    store.dispatch('authentication/auth0HandleAuthentication')
}
