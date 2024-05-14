<script setup lang="ts">
import router from "@/router";
import { getMovies } from "@/service";
import ContentListComponent from "@/components/ContentListComponent.vue";

const page = Number(router.currentRoute.value.params.page);
const data = await getMovies(page);
const results = await data.results;
</script>

<template>
  <ContentListComponent :results="results" :page="page" :router-type="'movies'" />
</template>
