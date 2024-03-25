<script setup>
import router from '@/router'
import { getAllStreams } from '@/service'
import ContentComponent from '@/components/ContentComponent.vue'

const page = Number(router.currentRoute.value.params.page)
const data = await getAllStreams(page)
const results = await data.results
</script>

<template>
  <ContentComponent :results="results" :page="page" :router-type="'home'" />
</template>
