<script setup>
import router from '@/router'
import { getMovies } from '@/service'
import ContentComponent from '@/components/ContentComponent.vue'

const page = Number(router.currentRoute.value.params.page)
const data = await getMovies(page)
const results = await data.results
</script>

<template>
  <ContentComponent :results="results" :page="page" :router-type="'movies'" />
</template>
