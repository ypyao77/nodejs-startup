<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />

    <div>
      <lable><button @click="onAddCount"> count + 3 </button>count: {{ count }}</lable>
    </div>
    <div>
      <lable>
        <button @click="onAddCount2"> dispatch: count + 1</button>
        <button @click="onAddCount3"> dispatch2: count + 2 </button>
        <button @click="onAddCount4"> async: count + 3 </button>
        count: {{ count2 }}
      </lable>
    </div>

    <div>
      <lable><button @click="onAddCountSub"> sub: count + 3 </button>count: {{ countSub }} </lable>
    </div>
    <div>
      <lable><button @click="onAddCountSubNm"> subnm: count + 3 </button>count: {{ countSubNm }} </lable>
    </div>
    <div>
      <button @click="onAddTodoList"> todo add </button>
      <div>
        <p> doneTodosCount: {{ doneTodosCount }} </p>
        <p> todos-last-item: {{ todosLast }} </p>

        <ul class="proPaneUl" style="display: block">
          <li v-for="item in todos" :key="item.id">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  computed: {
    ...mapGetters(['countSub']),
    ...mapGetters('subnm', { 'countSubNm': 'countSubNM' }),

    count() {
      return this.$store.state.count
    },
    count2() {
      return this.$store.state.count2
    },
    doneTodosCount() {
      return this.$store.state.todos.filter(todo => todo.done).length
    },
    todos() {
      return this.$store.state.todos
    },
    todosLast() {
      return this.$store.getters.getTodoById(this.$store.getters.allTodos.length)
    }
  },
  methods: {
    ...mapMutations(['addSub']),
    ...mapMutations('subnm', { 'addSubNm': 'addSubNM' }),

    onAddCount() {
      this.$store.commit('increment', 3)
      // this.$store.state.count += 1
    },

    onAddCount2() {
      this.$store.dispatch('increment', 1)
    },

    onAddCount3() {
      this.$store.dispatch('increment2', 2)
    },

    onAddCount4() {
      this.$store.dispatch('incrementAsync', 3)
    },

    onAddCountSub() {
      this.addSub(2)
    },
    onAddCountSubNm() {
      this.addSubNm(2)
    },

    onAddTodoList() {
      let item = {
        text: 'text',
        done: true
      }
      this.$store.commit('todosAdd', item)
    }
  }
}
</script>
