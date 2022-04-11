<template>
  <div>
    <div class="content">{{ todo.tittle }}</div>
    <div class="buttons">
      <button @click="toggleDone">Done</button>
      <button @click="removeTask" class="delete">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    todo: Object,
  },
  methods: {
    toggleDone() {
     
    },
    removeTask() {
      console.log(" here to start deleting todo : " + this.todo);
      console.log(" id : " + this.todo.todoId);
      this.$store.dispatch("DeleteToDOs", { id: this.todo.todoId });
    },
  },
};
</script>

<style></style>
