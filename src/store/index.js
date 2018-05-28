import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      _id: null,
      username: null,
      type: null,
      name: null,
      email: null
    },
    game: null,
    tickets: null,
    deviceusers: null,
    deviceuserid: null,
    device: null,
    blocknumbers: null,
    ticketbets: null,
    gametickets: null
  },
  actions,
  mutations,
  getters,
  plugins: [createPersistedState()]
})
