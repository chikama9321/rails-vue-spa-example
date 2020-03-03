import Vue from 'vue/dist/vue.esm'
import Vuex from "vuex"
Vue.use(Vuex)
const authModule = {
    namespaced: true,
    state: {
        accessToken: null,
        client: null,
        uid: null
    },
    mutations: {
        save(state, data) {
            state.accessToken = data.accessToken
            state.client = data.client
            state.uid = data.uid
        },
        delere(state) {
            state.accessToken = null
            state.client = null
            state.uid = null
        }
    },
    actions: {
        signin({state, commit}, data) {
            commit("save", data)
        },
        signout({state, commit}) {
            commit("delete")
        }
    }
}

export default new Vuex.Store({
    modules: {
        authModule
    }
})