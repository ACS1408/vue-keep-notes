import { createStore } from "vuex";

// Create a new store instance.
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
      ],
      trashes: [],
    };
  },
  mutations: {},
});
