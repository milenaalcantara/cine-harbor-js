<script setup>
// import router from '@/router'
// import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-sm navbar-dark shadow-lg">
      <div class="container-fluid mx-3">
        <RouterLink
          class="navbar-brand order-md-right"
          to="/"
          style="background-color: transparent"
        >
          Cine Harbor
        </RouterLink>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarToggler">
          <ul class="navbar-nav mr-auto" style="background-color: transparent">
            <li class="nav-item me-5" style="background-color: transparent">
              <RouterLink
                id="home"
                class="nav-link"
                :to="{ name: 'home', params: { page: 1 } }"
                aria-selected
              >
                Início
              </RouterLink>
            </li>

            <li class="nav-item me-5" style="background-color: transparent">
              <RouterLink class="nav-link" :to="{ name: 'movies', params: { page: 1 } }">
                Filmes
              </RouterLink>
            </li>

            <li class="nav-item me-5" style="background-color: transparent">
              <RouterLink class="nav-link" :to="{ name: 'series', params: { page: 1 } }">
                Séries
              </RouterLink>
            </li>

            <li class="nav-item" style="background-color: transparent">
              <RouterLink
                class="favorite-btn btn btn-danger"
                :to="{ name: 'favorites', params: { page: 1 } }"
              >
                Favoritos 🤍
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="scss">
header {
  height: var(--nav-height);
  line-height: 1.5;
  max-height: 100vh;
  min-width: 100vw;
  top: 0;
  z-index: 999;
  position: absolute;
}

nav {
  max-width: 100vw;
  background-color: #181818;
}

li,
.container-fluid,
.container-fluid > div {
  background-color: transparent;
}

.collapse {
  justify-content: right;
}

.nav-link:hover {
  color: #fff;
  text-decoration: underline;
  transition: 1s;
}

.nav-link:focus {
  text-decoration: underline;
}

.favorite-btn:focus {
  background-color: #f7071f;
}
</style>
