import { createRouter, createWebHistory } from "vue-router";
import boardView from "@/views/BoardView";

const routes = [
  {
    path: "/",
    name: "board",
    component: boardView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
