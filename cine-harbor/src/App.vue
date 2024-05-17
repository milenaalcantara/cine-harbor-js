<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <!-- <nav-header /> -->

  <div>
    <Suspense>
      <router-view v-slot="{ Component }"> 
        <component :is="Component"/>
      </router-view>
      
      <template #fallback>
        <p>Carregando...</p>
      </template>
    </Suspense>
  </div>
</template>
