<script setup>
import CardComponent from '@/components/CardComponent.vue'
import storage from '@/service/storage.js'
import { reactive } from 'vue'
const favoriteList = reactive(storage.getFavoriteList())
</script>

<template>
  <div
    class="grid row row-cols-1 row-cols-sm-2 row-cols-md-4 justify-content-center"
    v-if="!(favoriteList.length == 0)"
  >
    <CardComponent
      v-for="item in favoriteList"
      :key="item.id"
      :item="item"
    />
  </div>
  <div class="h-full w-full absolute flex flex-col items-center justify-center" v-else>
    <h3>Ainda não há favorito. Adicione novos itens à sua lista!</h3>
  </div>
</template>
