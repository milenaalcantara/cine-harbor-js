<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <!-- <nav-header /> -->

  <div>
    <router-view v-slot="{ Component }">
      <transition name="scale" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    
    <!-- <template #fallback>
      <p>Carregando...</p>
    </template> -->
  </div>
</template>
