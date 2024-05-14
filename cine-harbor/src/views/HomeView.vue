<script setup lang="ts">
import router from "@/router";
import { getAllStreams } from "@/service";
import ContentListComponent from "@/components/ContentListComponent.vue";

const page = Number(router.currentRoute.value.params.page);
const data = await getAllStreams(page);
const results = await data.results;
</script>

<template>
  <ContentListComponent :results="results" :page="page" :router-type="'home'" />
</template>
