<script setup>
import router from '@/router'

import CardComponent from '@/components/CardComponent.vue'
import PaginationComponent from '@/components/PaginationComponent.vue'

const props = defineProps(['results', 'page', 'routerType'])
const maxPage = 500

const nextPage = async () => {
  await router.push(`/${props.routerType}/${props.page + 1}`).then(() => router.go())
}

const previousPage = () => {
  router
    .push({
      name: `${props.routerType}`,
      params: { page: props.page > 1 ? props.page - 1 : 1 }
    })
    .then(() => {
      router.go()
    })
}
</script>

<template>
  <main class="container text-center my-5 justify-content-center p-0">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 justify-content-center">
      <CardComponent v-for="item in props.results" :key="item.id" :item="item" />
    </div>

    <PaginationComponent
      :from="props.page"
      :to="maxPage"
      @previous="previousPage"
      @next="nextPage"
    />
  </main>
</template>
