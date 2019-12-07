export default function ({ app, store, query, redirect }) { 
    const accesskey = store.getters['authentication/accesskey']

    if (!accesskey) {
        const key = query.key
        if (key) {
            app.$axios.post(`accesskey/check`, {
                key: key
            })
            .then(response => {
                if (response.data.data != 0) {
                    store.dispatch('authentication/setAccessKey', response.data.data)
                } else {
                    redirect("/login")
                }
            })
        } else {
            redirect("/login")
        }
    }
}