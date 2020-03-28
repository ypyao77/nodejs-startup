<template>
  <div class="CompA">
    <h2> [msg] {{msg}}. </h2>
  </div>
</template>

<script>
export default {
  name: 'CompA',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
a {
  background-color: #42b983;
}
</style>