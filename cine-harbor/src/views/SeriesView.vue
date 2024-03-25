<script setup>
import router from '@/router'
import { getSeries } from '@/service'
import ContentComponent from '@/components/ContentComponent.vue'

const page = Number(router.currentRoute.value.params.page)
const data = await getSeries(page)
const results = await data.results
</script>

<template>
  <ContentComponent :results="results" :page="page" :router-type="'series'" />
</template>
