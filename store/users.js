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
  }
}

export const actions = {
  register({ commit }, user) {
    commit('addUser', user)
  }
}

export const getters = {
  users: s => [...s.users].map(({ id, name, email }) => ({ id, name, email })),
  currentUser: s => userId => s.users.find(({ id }) => id === userId),
  loginUsers: s => [...s.users].map(({ id, email, password }) => ({ id, email, password }))
}
