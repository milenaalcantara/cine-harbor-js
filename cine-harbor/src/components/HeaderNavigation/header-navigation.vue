<template>
  <header>
    <nav class="navbar navbar-expand-sm navbar-dark shadow-lg">
      <div class="container-fluid mx-3">
        <router-link
          class="navbar-brand order-md-right"
          to="/"
          style="background-color: transparent"
        >
          Cine Harbor
        </router-link>

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
              <router-link
                id="home"
                class="nav-link"
                :to="{ name: 'home', state: { page: 1 } }"
                aria-selected
              >
                Início
              </router-link>
            </li>

            <li class="nav-item me-5" style="background-color: transparent">
              <router-link class="nav-link" :to="{ name: 'movies', state: { page: 1 } }">
                Filmes
              </router-link>
            </li>

            <li class="nav-item me-5" style="background-color: transparent">
              <router-link class="nav-link" :to="{ name: 'series', state: { page: 1 } }">
                Séries
              </router-link>
            </li>

            <li class="nav-item" style="background-color: transparent">
              <router-link
                class="favorite-btn btn btn-danger"
                :to="{ name: 'favorites', state: { page: 1 } }"
              >
                Favoritos 🤍
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style src="./styles.scss" lang="scss" />
