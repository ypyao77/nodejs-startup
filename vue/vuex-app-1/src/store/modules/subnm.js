const state = {
  count: 0
}

const mutations = {
  addSubNM(state, v) {
    state.count += v
  }
}

const getters = {
  countSubNM: state => {
    return state.count
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  getters
}
