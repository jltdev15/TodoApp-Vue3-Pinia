import { createRouter, createWebHistory } from "vue-router";
import Main from '../views/Main.vue'
import HomeView from '../views/HomeView.vue'
import WorkView from '../views/WorkView.vue'
import SchoolView from '../views/SchoolView.vue'
const routes = [
  {
    path: "/",
    redirect:"/home",
    component: Main,
    children: [
      {
        path: "/home",
        name: "home",
        component: HomeView 
      },
      {
        path: "/work",
        name: "work",
        component: WorkView
      },
      {
        path: "/school",
        name: "school",
        component: SchoolView
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
