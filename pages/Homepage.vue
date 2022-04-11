<template>
  <main>
    <h1>All Users ToDoList</h1>
    <br /><br />

    <div class="create-new">
      <input
        type="text"
        v-model="newTask"
        placeholder="Add a new list"
        @keypress.enter="addTask"
      />
      <button @click="addTask">Add</button>
    </div>

    <div v-for="(item, index) in $store.state.todoList" :key="index">
      <Task :todo=item></Task>
    </div>
  </main>
</template>

<script>

import Task from "../components/Task";

export default {
  name: "Home-view",
  components: {
    Task,
  },
  data() {
    return {
      newTask: "",
    };
  },
  methods: {
    addTask() {
      if (this.newTask) {
        this.$store.dispatch("CreateToDo", {
          data: {
            tittle: this.newTask,
            description: "string",
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            completed: false,
            deleted: true,
          },
        });
        this.newTask = "";
        
      }
    },
  },
};
</script>
