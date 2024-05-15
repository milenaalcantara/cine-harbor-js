<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <nav-header />

  <div>
    <Suspense>
      <RouterView :key="`${$route.params}`" />
      
      <template #fallback>
        <p>Carregando...</p>
      </template>
    </Suspense>
  </div>
</template>
