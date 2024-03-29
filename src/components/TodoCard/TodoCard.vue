<template>
  <div
    class="rounded-lg p-4 pb-5 relative flex flex-col h-max"
    :style="{ backgroundColor: bg }"
  >
    <div class="mb-2">
      <h2 class="text-xl font-semibold mb-3 empty:mb-0">{{ title }}</h2>
      <p class="text-sm">{{ content }}</p>
    </div>
    <div class="flex justify-end gap-3 mt-auto">
      <button
        class="rounded-full w-7 h-7 p-1.5"
        v-if="!isTrash"
        @click="handleEditNote"
      >
        <img src="/icon-edit.svg" alt="edit" />
      </button>
      <button
        class="rounded-full w-7 h-7 p-1.5"
        v-else
        @click="handleRestoreNote"
      >
        <img src="/icon-restore.svg" alt="restore" />
      </button>
      <button class="rounded-full w-7 h-7 p-1" @click="handleDeleteNote">
        <img src="/icon-trash.svg" alt="delete" />
      </button>
    </div>
  </div>

  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
              :style="{ backgroundColor: bg }"
            >
              <form class="mt-2" @submit.prevent="handleSubmitEditForm">
                <div class="mb-2">
                  <input
                    type="text"
                    name="todo-title"
                    id="todo-title"
                    placeholder="Title"
                    ref="titleInput"
                    class="w-full h-10 text-xl font-semibold focus:outline-none"
                    spellcheck="false"
                    autofocus
                    v-model="titleEdit"
                    :style="{ backgroundColor: bg }"
                  />
                </div>
                <textarea
                  name="todo-description"
                  id="todo-description"
                  class="w-full focus:outline-none resize-none"
                  placeholder="Take a note..."
                  ref="contentInput"
                  rows="5"
                  spellcheck="false"
                  v-model="contentEdit"
                  :style="{ backgroundColor: bg }"
                />
                <div class="mt-4 flex gap-2 justify-end">
                  <button
                    type="button"
                    class="bg-transparent border border-black text-black px-5 py-1 rounded-sm text-base min-w-[100px]"
                    @click="
                      cancelEdit();
                      closeModal();
                    "
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    class="bg-black text-white px-5 py-1 rounded-sm text-base min-w-[100px]"
                    @click="titleEdit || contentEdit ? closeModal() : null"
                  >
                    Apply
                  </button>
                </div>
              </form>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
export default {
  props: {
    id: Number,
    bg: String,
    title: String,
    content: String,
    isTrash: Boolean,
  },
  data() {
    return {
      titleEdit: "",
      contentEdit: "",
    };
  },
  mounted() {
    this.titleEdit = this.title;
    this.contentEdit = this.content;
  },
  methods: {
    handleDeleteNote() {
      this.$emit("delete-note", this.id);
    },
    handleRestoreNote() {
      this.$emit("restore-note", this.id);
    },
    handleSubmitEditForm() {
      if (this.$refs.titleInput.value || this.$refs.contentInput.value) {
        const data = {
          id: this.id,
          bg: this.bg,
          title: this.$refs.titleInput.value,
          content: this.$refs.contentInput.value,
        };

        this.$emit("edit-note", this.id, data);
      }
    },
    cancelEdit() {
      this.titleEdit = this.title;
      this.contentEdit = this.content;
    },
  },
};
</script>



<script setup>
import { ref } from "vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";

const isOpen = ref(false);

function closeModal() {
  isOpen.value = false;
}
function openModal() {
  isOpen.value = true;
}

function handleEditNote() {
  openModal();
}
</script>