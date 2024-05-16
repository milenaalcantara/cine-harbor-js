import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MoviesView from "@/views/MoviesView.vue";
import SeriesView from "@/views/SeriesView.vue";
import DetailView from "@/views/DetailView.vue";
import FavoritesView from "@/views/FavoritesView.vue";
import Movies from "@/views/Movies/index.vue";
import  DetailsMovie from "@/views/Movies/Details.vue";
import Series from "@/views/Series/index.vue";
import DetailsSerie from "@/views/Series/Details.vue"
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
          component: HomeView,
        },
      ],
      meta: {
        reload: true,
      },
    },
    {
      path: "/movies",
      name:"movies",
      component:Movies
    },
    {
      path:"/movies/:page",
      name:"movie-detailed",
      component:DetailsMovie
    },
    {
      path:"/series",
      name:"series",
      component: Series
    },
    {
      path: "/series/:page",
      name: "series-detailed",
      component: DetailsSerie,
      
    },
    {
      path: "/favorites",
      name: "favorites",
      component: FavoritesView,
    },
    {
      path: "/details/:type/:item",
      name: "detail",
      component: DetailView,
      props: true,
    },
  ],
});

export default router;
