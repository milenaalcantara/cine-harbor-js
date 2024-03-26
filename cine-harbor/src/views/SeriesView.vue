<script setup>
import router from '@/router'
import { getSeries } from '@/service'
import ContentListComponent from '@/components/ContentComponent.vue'

const page = Number(router.currentRoute.value.params.page)
const data = await getSeries(page)
const results = await data.results
</script>

<template>
  <ContentListComponent :results="results" :page="page" :router-type="'series'" />
</template>
