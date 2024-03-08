import { createApp } from "vue";
import "./styles/main.scss";
import App from "./App.vue";
import Container from "./components/Container/Container.vue";
import TodoInputForm from "./components/TodoInputForm/TodoInputForm.vue";
import TodoList from "./components/TodoList/TodoList.vue";
import TodoCard from "./components/TodoCard/TodoCard.vue";
import TrashList from "./components/TrashList/TrashList.vue";

const app = createApp(App);

app.component("Container", Container);
app.component("TodoInputForm", TodoInputForm);
app.component("TodoList", TodoList);
app.component("TodoCard", TodoCard);
app.component("TrashList", TrashList);

app.mount("#app");
