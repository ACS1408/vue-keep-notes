<template>
  <section class="py-6">
    <Container>
      <h2 class="font-semibold text-xl text-black mb-5">
        Trash ({{ trashes?.length }})
      </h2>
      <TrashList :todos="todos" :trashes="trashes" />
    </Container>
  </section>
</template>

  <script>
import TrashList from "@components/TrashList/TrashList.vue";
import { store } from "@store/notes";

export default {
  components: {
    TrashList,
  },
  data() {
    return {
      todos: store.state.todos,
      trashes: store.state.trashes,
    };
  },
};
</script>