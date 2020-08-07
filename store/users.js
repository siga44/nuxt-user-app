import {USERS} from "@/store"

export const state = () => ({
  users: []
})

export const mutations = {
  initUsers(state, users) {
    state.users = users
  },
  addUser(state, user) {
    const newState = [...state.users, user]
    state.users = newState

    this.$cookies.set(USERS, newState)
  },
  updateAvatar(state, { id, avatar }) {
    const users = [...state.users]
    const index = state.users.findIndex(u => u.id === id)
    const currentUser = state.users[index]
    users[index] = { ...currentUser, avatar }

    state.users = users

    this.$cookies.set(USERS, users)
  }
}

export const actions = {
  register({ commit }, user) {
    commit('addUser', user)
  },
  updateAvatar({ commit }, payload) {
    commit('updateAvatar', payload)
  }
}

export const getters = {
  users: s => [...s.users].map(({ id, name, email }) => ({ id, name, email })),
  currentUser: s => userId => s.users.find(({ id }) => id === userId),
  loginUsers: s => [...s.users].map(({ id, email, password }) => ({ id, email, password }))
}
