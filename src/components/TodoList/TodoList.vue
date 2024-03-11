<template>
  <div v-if="$store.state.todos.length === 0" class="py-5">No Notes Found</div>
  <div v-else class="grid grid-cols-6 gap-3">
    <TodoCard
      v-for="todo of $store.state.todos"
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
import TodoCard from "@components/TodoCard/TodoCard.vue";
export default {
  components: {
    TodoCard,
  },
  methods: {
    trashNote(noteId) {
      this.$store.commit("removeTodoNote", noteId);
    },
    editNote(noteId, data) {
      const payload = { noteId, data };
      this.$store.commit("updateNote", payload);
    },
  },
};
</script>