const state = {
  count: 0
}

const mutations = {
  addSub(state, v) {
    state.count += v
  }
}

const getters = {
  countSub: state => {
    return state.count
  }
}

export default {
  // namespaced: true,
  state,
  mutations,
  getters
}
