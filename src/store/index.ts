import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        TwitchToken: '',
        ClientID: '6v5grv4aoxq8v1cn9o1417qyxrj1xt',
        TwitchBroadCaster: null
    },
    mutations: {
        SetToken(state, Token) {
            state.TwitchToken = Token;
        },
        SetBroadCaster(state, TUser) {
            state.TwitchBroadCaster = TUser;
        }
    },
    actions: {},
    modules: {}
})
