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
          path: "/home/:page",
          name: "home",
          component: Views.Home,
        },
      ],
      meta: {
        reload: true,
      },
    },
    {
      path: "/movies",
      name:"movies",
      component: Views.Movie
    },
    {
      path:"/movies/:page",
      name:"movie-detailed",
      component: Views.Detail
    },
    {
      path:"/series",
      name:"series",
      component: Views.Serie
    },
    {
      path: "/series/:page",
      name: "series-detailed",
      component: Views.DetailsSeries,
      
    },
    {
      path: "/favorites",
      name: "favorites",
      component: Views.Favorite,
    },
    {
      path: "/details/:type/:item",
      name: "detail",
      component: Views.Detail,
      props: true,
    },
  ],
});

export default router;
