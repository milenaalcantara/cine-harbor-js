<script setup>
import CardComponent from '@/components/CardComponent.vue'
import storage from '@/service/customStorage.js'
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
  <div class="d-flex justify-content-center m-5" v-else>
    <h6 >Ainda não há favoritos. Adicione novos itens à sua lista!</h6>
  </div>
</template>
