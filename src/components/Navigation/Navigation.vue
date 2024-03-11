<template>
  <aside class="navigation py-8 px-4 max-w-[300px] w-full">
    <h1 class="text-2xl font-bold text-black mb-8">
      {{ title }}
    </h1>
    <nav class="">
      <router-link to="/" class="px-5 mb-3 py-2 text-base block rounded-full"
        >Notes</router-link
      >
      <router-link
        to="/trash"
        class="px-5 mb-3 py-2 text-base block rounded-full"
        >Trash</router-link
      >
    </nav>
  </aside>
</template>

<style lang="scss">
.navigation {
  .router-link-active {
    background: #feefc3;
  }
}
</style>

<script>
export default {
  data() {
    return {
      title: "Vue Notes",
    };
  },
};
</script>