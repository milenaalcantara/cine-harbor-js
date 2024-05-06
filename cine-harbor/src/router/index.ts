import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MoviesView from "@/views/MoviesView.vue";
import SeriesView from "@/views/SeriesView.vue";
import DetailView from "@/views/DetailView.vue";
import FavoritesView from "@/views/FavoritesView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: { path: "/home/1" },
      name: "home",
      children: [
        {
          path: "/home/:page",
          name: "home",
          component: HomeView
        }
      ],
      meta: {
        reload: true
      }
    },
    {
      path: "/movies/:page",
      name: "movies",
      component: MoviesView,
      reload: true
    },
    {
      path: "/series/:page",
      name: "series",
      component: SeriesView
    },
    {
      path: "/favorites",
      name: "favorites",
      component: FavoritesView
    },
    {
      path: "/details/:type/:item",
      name: "detail",
      component: DetailView,
      props: true
    }
  ]
});

export default router;
