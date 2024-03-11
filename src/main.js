import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "@styles/main.scss";
import App from "./App.vue";
import Container from "@components/Container/Container.vue";
import { store } from "@store/notes";
import TodoPage from "@pages/TodoPage/TodoPage.vue";
import TrashPage from "@pages/TrashPage/TrashPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: TodoPage,
    },
    {
      path: "/trash",
      component: TrashPage,
    },
  ],
});

const app = createApp(App);

app.use(router);
app.use(store);

app.component("Container", Container);

app.mount("#app");
