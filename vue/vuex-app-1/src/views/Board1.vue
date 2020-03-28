<template>
  <div class="board1">
    <h1>This is a BOARD1 page</h1>
    <input />
    <div> count: {{ count }} </div>
    <div> doneTodosCount: {{ doneTodosCount }} </div>
  </div>
</template>

<script scoped>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['count']),

    doneTodosCount() {
      return this.$store.state.todos.filter(todo => todo.done).length
    }
  }
}
</script>
