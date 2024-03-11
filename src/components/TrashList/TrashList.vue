<template>
  <div v-if="$store.state.trashes?.length === 0" class="py-5">
    No Trash Found
  </div>
  <div v-else class="grid grid-cols-6 gap-3">
    <TodoCard
      v-for="trash of $store.state.trashes"
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
      this.$store.commit("removeTrashNote", noteId);
    },
    restoreNote(noteId) {
      this.$store.commit("restoreNote", noteId);
    },
  },
};
</script>