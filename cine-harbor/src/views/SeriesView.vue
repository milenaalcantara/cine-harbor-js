<script setup lang="ts">
import router from "@/router";
import { getSeries } from "@/service";

const page = Number(router.currentRoute.value.params.page);
const data = await getSeries(page);
const results = await data.results;
</script>

<template>
  <ContentList :results="results" :page="page" :router-type="'series'" />
</template>
