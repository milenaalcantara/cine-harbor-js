import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MoviesView from '@/views/MoviesView.vue'
import SeriesView from '@/views/SeriesView.vue'
import DetailView from '@/views/DetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: { path: '/home/1' },
      name: 'home',
      children: [
        {
          path: '/home/:page',
          name: 'home',
          component: HomeView
        }
      ],
      meta: {
        reload: true
      }
    },
    {
      path: '/movies/:page',
      name: 'movies',
      component: MoviesView,
      reload: true
    },
    {
      path: '/series/:page',
      name: 'series',
      component: SeriesView
    },
    {
      path: '/favorites/:page',
      name: 'favorites',
      component: SeriesView
    },
    {
      path: '/details/:type/:item',
      name: 'detail',
      component: DetailView,
      props: true
    }
  ]
})

// router.beforeResolve((to, from, next) => {
//   // Quando houver o carregamento de uma págona incial, então usar o NProgress
//   let flag = false;

//   if (to.name) {
//     router.go();
//     flag = true;
//     return
//   }
// });

// eslint-disable-next-line no-unused-vars

export default router
