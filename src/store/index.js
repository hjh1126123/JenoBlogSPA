import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export function createStore() {
    return new Vuex.Store({
        state: {
            loadding: false
        },
        mutations: {
            set_loadding(state, on_off) {
                state.loadding = on_off;
            }
        },
        actions: {
            open_loadding({commit}) {
                commit('set_loadding', true);
            },
            close_loadding({commit}){
                commit('set_loadding', false);
            }
        }
    })
}
