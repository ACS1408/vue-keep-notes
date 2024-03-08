<template>
  <div v-if="todos.length === 0" class="py-5">No Todos Found</div>
  <div v-else class="grid grid-cols-6 gap-3">
    <TodoCard
      v-for="todo of todos"
      :id="todo.id"
      :bg="todo.bg"
      :title="todo.title"
      :content="todo.content"
      :isTrash="todo.isTrash"
      :key="todo.id"
      @delete-note="trashNote"
      @edit-note="editNote"
    />
  </div>
</template>

<script>
export default {
  props: {
    todos: Array,
    trashes: Array,
  },
  methods: {
    trashNote(noteId) {
      const indexToRemove = this.todos.findIndex((item) => item.id === noteId);
      if (indexToRemove !== -1) {
        this.todos[indexToRemove].isTrash = true;
        this.trashes.push(this.todos.splice(indexToRemove, 1)[0]);
      }
    },
    editNote(noteId, data) {
      const indexToEdit = this.todos.findIndex((item) => item.id === noteId);
      if (indexToEdit !== -1) {
        this.todos.splice(indexToEdit, 1, data);
      }
    },
  },
};
</script>