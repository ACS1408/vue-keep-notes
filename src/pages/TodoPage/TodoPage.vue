<template>
  <section class="py-16">
    <Container className="max-w-[500px]">
      <TodoInputForm />
    </Container>
  </section>
  <section class="py-6">
    <Container>
      <h2 class="font-semibold text-xl text-black mb-5">
        Notes ({{ $store.state.todos.length }})
      </h2>
      <TodoList />
    </Container>
  </section>
</template>
  
  <script>
import TodoInputForm from "@components/TodoInputForm/TodoInputForm.vue";
import TodoList from "@components/TodoList/TodoList.vue";

export default {
  components: {
    TodoInputForm,
    TodoList,
  },
};
</script>