<template>
  <form
    class="rounded-lg border px-4 pt-2 pb-3"
    @submit.prevent="handleSubmitTodo"
  >
    <div class="mb-2">
      <input
        type="text"
        name="todo-title"
        id="todo-title"
        placeholder="Title"
        ref="titleInput"
        class="w-full h-10 text-xl font-semibold focus:outline-none"
        spellcheck="false"
        @input="handleTitleChange"
      />
    </div>
    <textarea
      name="todo-description"
      id="todo-description"
      class="w-full focus:outline-none resize-none"
      placeholder="Take a note..."
      ref="contentInput"
      rows="3"
      spellcheck="false"
      @input="handleContentChange"
    />
    <button
      type="submit"
      class="bg-black text-white px-3 py-1 rounded-sm text-base"
    >
      Add Notes
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      content: "",
    };
  },
  methods: {
    getRandomHexCode(
      hexCodes = [
        "#e2f6d3",
        "#fff8b8",
        "#f39f76",
        "#d3bfdb",
        "#f6e2dd",
        "#b4ddd3",
      ]
    ) {
      if (!hexCodes || !hexCodes.length) {
        return null;
      }
      const randomIndex = Math.floor(Math.random() * hexCodes.length);
      return hexCodes[randomIndex];
    },
    handleTitleChange() {
      this.title = this.$refs.titleInput.value;
    },
    handleContentChange() {
      this.content = this.$refs.contentInput.value;
    },
    handleSubmitTodo() {
      if (this.title || this.content) {
        const data = {
          id: Math.floor(Math.random() * 100000),
          bg: this.getRandomHexCode(),
          title: this.title,
          content: this.content,
        };
        this.$store.commit("addNote", data);
        this.$refs.titleInput.value = "";
        this.$refs.contentInput.value = "";
      }
    },
  },
};
</script>