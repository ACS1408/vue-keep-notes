import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
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
        {
          id: 3,
          bg: "#fff8b8",
          title: "Trash/delete notes",
          content:
            "Irure elit est anim excepteur ut magna in aliquip dolor elit nisi amet labore eiusmod. Et culpa nulla do do ullamco tempor aliqua et ad ex eu quis occaecat do. Incididunt pariatur proident mollit duis deserunt laboris consequat nisi dolor fugiat. Eu ullamco ad cillum eiusmod proident officia proident amet.",
          isTrash: false,
        },
      ],
      trashes: [],
    };
  },
  mutations: {
    addNote(state, payload) {
      state.todos.push(payload);
    },
    updateNote(state, payload) {
      console.log(state, payload);
      const indexToEdit = state.todos.findIndex(
        (item) => item.id === payload.noteId
      );
      if (indexToEdit !== -1) {
        state.todos.splice(indexToEdit, 1, payload.data);
      }
    },
    removeTodoNote(state, id) {
      const indexToRemove = state.todos.findIndex((item) => item.id === id);
      if (indexToRemove !== -1) {
        state.todos[indexToRemove].isTrash = true;
        state.trashes.push(state.todos.splice(indexToRemove, 1)[0]);
      }
    },
    removeTrashNote(state, id) {
      const indexToRemove = state.trashes.findIndex((item) => item.id === id);
      if (indexToRemove !== -1) {
        state.trashes.splice(indexToRemove, 1);
      }
    },
    restoreNote(state, id) {
      const indexToRestore = state.trashes.findIndex((item) => item.id === id);
      if (indexToRestore !== -1) {
        state.trashes[indexToRestore].isTrash = false;
        state.todos.push(state.trashes.splice(indexToRestore, 1)[0]);
      }
    },
  },
});
