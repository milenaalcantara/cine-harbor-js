<script setup lang="ts">
import router from "@/router";
import { getAllStreams } from "@/service";

const page = Number(router.currentRoute.value.params.page);
const data = await getAllStreams(page);
const results = await data.results;
</script>

<template>
  <ContentList :results="results" :page="page" :router-type="'home'" />
</template>
