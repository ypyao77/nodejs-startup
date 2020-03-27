<template>
  <div class="board2">
    <h1>This is a board2 page</h1>
    <input />
    <div> count: {{ count }} </div>
    <div> doneTodosCount: {{ doneTodosCount }} </div>
    <div> doneTodosCount: {{ this.$store.getters.doneTodos.length }} </div>
  </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count
    },

    doneTodosCount() {
      return this.$store.state.todos.filter(todo => todo.done).length
    }
  }
}
</script>