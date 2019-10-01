let selected_branch = window.localStorage.getItem('selected_branch')

const spb = {
    namespaced: true,
    state: {
        selected_branch: selected_branch ? selected_branch : false
    },
    mutations: {
        setBranch(state, selected_branch) {
            state.selected_branch = selected_branch
            window.localStorage.setItem('selected_branch', selected_branch)
        }
    },
    getters: {
        selected_branch(state) {
            return state.selected_branch
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
            alert(payload)
            commit('setBranch', payload)
        }
    }
}

export default spb
