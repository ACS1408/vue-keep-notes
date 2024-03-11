<template>
  <div class="flex">
    <Navigation />
    <main class="ps-10 flex-1">
      <router-view />
    </main>
  </div>
</template>

<script>
import TodoPage from "@pages/TodoPage/TodoPage.vue";
import TrashPage from "@pages/TrashPage/TrashPage.vue";
import Navigation from "@components/Navigation/Navigation.vue";

export default {
  components: {
    TodoPage,
    TrashPage,
    Navigation,
  },
};
</script>