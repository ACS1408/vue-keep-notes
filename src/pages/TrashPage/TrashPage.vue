<template>
  <section class="py-16">
    <Container>
      <h2 class="font-semibold text-xl text-black mb-5">
        Trash ({{ $store.state.trashes.length }})
      </h2>
      <TrashList />
    </Container>
  </section>
</template>

  <script>
import TrashList from "@components/TrashList/TrashList.vue";

export default {
  components: {
    TrashList,
  },
};
</script>