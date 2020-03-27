import Vue from 'vue'
import Vuex from 'vuex'
import sub from './modules/sub'
import subnm from './modules/subnm'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    count: 0,
    count2: 0,
    todos: [
      { id: 1, text: 'text 1', done: true },
      { id: 2, text: 'text 2', done: false }
    ]
  },

  mutations: {
    increment(state, v) {
      state.count += v
    },

    increment2(state, v) {
      state.count2 += v
    },

    todosAdd(state, it) {
      let item = {
        id: state.todos.length + 1,
        text: it.text + ' ' + (state.todos.length + 1),
        done: it.done
      }

      state.todos.push(item)
    }
  },
  actions: {
    increment(context, v) {
      context.commit('increment2', v)
    },
    increment2({ commit }, v) {
      commit('increment2', v)
    },
    incrementAsync({ commit }, v) {
      setTimeout(() => {
        commit('increment2', v)
      }, 1000)
    }
  },

  modules: {
    sub,
    subnm
  },

  getters: {
    allTodos: state => {
      return state.todos
    },
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    getTodoById: state => id => {
      return state.todos.find(todo => todo.id === id)
    }
  }
})
