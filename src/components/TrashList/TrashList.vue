<template>
  <div v-if="trashes.length === 0" class="py-5">No Trash Found</div>
  <div v-else class="grid grid-cols-6 gap-3">
    <TodoCard
      v-for="trash of trashes"
      :id="trash.id"
      :bg="trash.bg"
      :title="trash.title"
      :content="trash.content"
      :isTrash="trash.isTrash"
      :key="trash.id"
      @delete-note="deleteNote"
      @restore-note="restoreNote"
    />
  </div>
</template>

<script>
import TodoCard from "@components/TodoCard/TodoCard.vue";
export default {
  components: {
    TodoCard,
  },
  props: {
    todos: Array,
    trashes: Array,
  },
  methods: {
    deleteNote(noteId) {
      const indexToRemove = this.trashes.findIndex(
        (item) => item.id === noteId
      );
      if (indexToRemove !== -1) {
        this.trashes.splice(indexToRemove, 1);
      }
    },
    restoreNote(noteId) {
      const indexToRestore = this.trashes.findIndex(
        (item) => item.id === noteId
      );
      if (indexToRestore !== -1) {
        this.trashes[indexToRestore].isTrash = false;
        this.todos.push(this.trashes.splice(indexToRestore, 1)[0]);
      }
    },
  },
};
</script>