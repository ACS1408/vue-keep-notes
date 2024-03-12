<template>
  <section class="py-16">
    <Container>
      <h2 class="font-semibold text-xl text-black mb-5">
        Trash ({{ $store.state.trashes.length }})
      </h2>
      <div
        class="flex items-center gap-3 mb-8"
        v-if="$store.state.trashes.length"
      >
        <span>Clear trash?</span>
        <button
          class="text-base text-black underline"
          type="button"
          @click="handleClearTrash"
        >
          Clear
        </button>
      </div>
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
  methods: {
    handleClearTrash() {
      this.$store.state.trashes.splice(0, this.$store.state.trashes.length);
    },
  },
};
</script>