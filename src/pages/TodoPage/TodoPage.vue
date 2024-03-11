<template>
  <section class="pt-4 pb-6">
    <Container className="max-w-[500px]">
      <TodoInputForm :todos="todos" />
    </Container>
  </section>
  <section class="py-6">
    <Container>
      <h2 class="font-semibold text-xl text-black mb-5">
        Notes ({{ todos?.length }})
      </h2>
      <TodoList :todos="todos" :trashes="trashes" />
    </Container>
  </section>
</template>
  
  <script>
import TodoInputForm from "@components/TodoInputForm/TodoInputForm.vue";
import TodoList from "@components/TodoList/TodoList.vue";
import { store } from "@store/notes";

export default {
  components: {
    TodoInputForm,
    TodoList,
  },
  data() {
    return {
      todos: store.state.todos,
      trashes: store.state.trashes,
    };
  },
};
</script>