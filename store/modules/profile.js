let personal = window.localStorage.getItem('personal')

const profile = {
    namespaced: true,
    state: {
        personal: personal ? JSON.parse(personal) : {}
    },
    mutations: {
        updateProfile(state, personal) {
            state.personal = personal

            window.localStorage.setItem(
                'personal',
                JSON.stringify(state.personal)
            )
        }
    },
    getters: {
        personal(state) {
            return state.personal
        }
    },
    actions: {
        updateProfile({ state, commit }, payload) {
            commit('updateProfile', payload)
        }
    }
}

export default profile
