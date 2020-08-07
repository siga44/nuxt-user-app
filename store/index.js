export const TOKEN = 'session-token'
export const USERS = 'registered-users'

export const state = () => ({
  token: null
})

export const mutations = {
  initToken(state, token) {
    state.token = token
  },
  setToken(state, id) {
    state.token = id

    this.$cookies.set(TOKEN, id)
  },
  deleteToken(state) {
    state.token = null

    this.$cookies.remove(TOKEN)
  }
}

export const actions = {
  nuxtServerInit({ commit }) {
    const token = this.$cookies.get(TOKEN) || null
    const users = this.$cookies.get(USERS) || []
    commit('users/initUsers', users)
    commit('initToken', token)
  },
  login({ commit }, id) {
    commit('setToken', id)
  },
  logout({ commit }) {
    commit('deleteToken')
  }
}

export const getters = {
  token: s => s.token,
  isAuth: (_, { token }) => !!token
}
