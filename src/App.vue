<template>
  <section class="pt-10 pb-6">
    <Container className="max-w-[500px]">
      <h1 class="text-3xl font-bold text-black text-center mb-8">
        {{ title }}
      </h1>
      <TodoInputForm :todos="todos" />
    </Container>
  </section>
  <section class="py-6">
    <Container>
      <h2 class="font-semibold text-xl text-black mb-5">
        Notes ({{ todos.length }})
      </h2>
      <TodoList :todos="todos" :trashes="trashes" />
    </Container>
  </section>
  <section class="py-6">
    <Container>
      <h2 class="font-semibold text-xl text-black mb-5">
        Trash ({{ trashes.length }})
      </h2>
      <TrashList :todos="todos" :trashes="trashes" />
    </Container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: "Vue Keep Notes",
      todos: [
        {
          id: 1,
          bg: "#e2f6d3",
          title: "Create notes",
          content:
            "Qui aute non ea eiusmod ea non duis minim incididunt officia cillum adipisicing. Irure elit est anim excepteur ut magna in aliquip dolor elit nisi amet labore eiusmod. Et culpa nulla do do ullamco tempor aliqua et ad ex eu quis occaecat do.",
          isTrash: false,
        },
        {
          id: 2,
          bg: "#fff8b8",
          title: "Edit notes",
          content:
            "Id id nisi sint excepteur. Incididunt pariatur proident mollit duis deserunt laboris consequat nisi dolor fugiat. Eu ullamco ad cillum eiusmod proident officia proident amet.",
          isTrash: false,
        },
      ],
      trashes: [],
    };
  },
};
</script>