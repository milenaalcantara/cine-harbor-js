<script setup>
import { RouterView } from 'vue-router'
import HeaderNavigation from './components/HeaderNavigation.vue'
</script>

<template>
  <div>
    <HeaderNavigation />

    <Suspense>
      <RouterView />
      <template #fallback>
        <p class="text-white text-5xl">Carregando...</p>
      </template>
    </Suspense>
  </div>
</template>
