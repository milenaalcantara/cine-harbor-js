import { createRouter, createWebHistory } from "vue-router";
import { Views } from "@/views";


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: { path: "/home/1" },
      name: "home",
      children: [
        {
          path: "/:page",
          name: "home",
          component: Views.Home
        }
      ],
      meta: {
        reload: true
      }
    },
    {
      path:"/movies/:page",
      name:"movies",
      component: Views.Movie
    },
    {
      path: "/series/:page",
      name: "series",
      component: Views.Serie
    },
    {
      path: "/favorites",
      name: "favorites",
      component: Views.Favorite
    },
    {
      path: "/details/:type/:item",
      name: "detail",
      component: Views.Detail
    }
  ]
});

export default router;
