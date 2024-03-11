<template>
  <section class="pt-10">
    <Container className="max-w-[500px]">
      <h1 class="text-3xl font-bold text-black text-center mb-8">
        {{ title }}
      </h1>
    </Container>
  </section>
  <TodoPage />
  <TrashPage />
</template>

<script>
import TodoPage from "@pages/TodoPage/TodoPage.vue";
import TrashPage from "@pages/TrashPage/TrashPage.vue";

export default {
  components: {
    TodoPage,
    TrashPage,
  },
  data() {
    return {
      title: "Vue Keep Notes",
    };
  },
};
</script>