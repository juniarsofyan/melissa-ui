let branch = window.localStorage.getItem('branch')

const spb = {
    namespaced: true,
    state: {
        branch: branch ? branch : false
    },
    mutations: {
        setBranch(state, branch) {
            state.branch = branch
            window.localStorage.setItem('branch', branch)
        }
    },
    getters: {
        branch(state) {
            return state.branch
        }
    },
    actions: {
        setBranch(
            {
                state,
                commit
            },
            payload
        ) {
            commit('setBranch', payload)
        }
    }
}

export default spb
