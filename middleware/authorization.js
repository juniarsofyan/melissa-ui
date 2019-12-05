export default function ({store, redirect, route}) { 
    const userIsAuthorized = store.getters['authentication/userIsAuthorized']
    
    
    if (route.name != "login") {
        if (!userIsAuthorized) {
            redirect("/login")
        }
    } else {
        if (userIsAuthorized) {
            redirect("/")
        }
    }

}