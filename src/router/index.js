import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ModifyView from "../views/ModifyView.vue";
import EditTask from "../views/EditTask.vue";


const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/create",
    name: "create",
    component: ModifyView,
  },
  {
    path: "/edit/:taskId",
    name: "edit",
    component: EditTask
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
