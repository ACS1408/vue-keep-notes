import { createApp } from "vue";
// import { createRouter, createWebHistory } from "vue-router";
import "./styles/main.scss";
import App from "./App.vue";
import Container from "./components/Container/Container.vue";
import { store } from "./store/notes";

// const router = createRouter({
//   history: createWebHistory(),
//   routes: [
//     {
//       path: "/",
//       component: TodoList,
//     },
//     {
//       path: "/trash",
//       component: TrashList,
//     },
//   ],
// });

const app = createApp(App);
// app.use(router);
app.use(store);
app.component("Container", Container);

app.mount("#app");
