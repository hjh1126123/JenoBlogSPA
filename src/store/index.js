import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export function createStore () {
  return new Vuex.Store({
    state: {
      activeType: null,
      itemsPerPage: 20,
      items: {},
      users: {},
      lists: {}
    }
  })
}
