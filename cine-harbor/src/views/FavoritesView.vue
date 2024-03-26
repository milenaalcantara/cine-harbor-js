<script setup>
import router from '@/router'
import { getFavorites } from '@/service'
import ContentListComponent from '@/components/ContentComponent.vue'

const page = Number(router.currentRoute.value.params.page)
const data = await getFavorites(page)
const results = await data.results
</script>

<template>
  <ContentListComponent :results="results" :page="page" :router-type="'favorites'" />
</template>
