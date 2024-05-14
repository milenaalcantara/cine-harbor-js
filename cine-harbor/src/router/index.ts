import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MoviesView from "@/views/MoviesView.vue";
import SeriesView from "@/views/SeriesView.vue";
import DetailView from "@/views/DetailView.vue";
import FavoritesView from "@/views/FavoritesView.vue";
import Movie from "@/views/Movie/index.vue"


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
          component: HomeView
        }
      ],
      meta: {
        reload: true
      }
    },
    {
      path:"/movies",
      name:"movies",
      component:Movie
    },
    // {
    //   path: "/movies/:page",
    //   name: "movie",
    //   component: MoviesView,
    //   //reload: true
    // },
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
