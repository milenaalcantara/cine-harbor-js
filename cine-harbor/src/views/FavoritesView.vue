<script setup>
import CardComponent from "@/components/CardComponent.vue";
import storage from "@/service/customStorage.js";
import { reactive } from "vue";
const favoriteList = reactive(storage.getFavoriteList());
</script>

<template>
  <main class="container text-center justify-content-center p-0">
    <div
      class="grid row row-cols-1 row-cols-sm-2 row-cols-md-4 justify-content-center my-5"
      v-if="!(favoriteList.length == 0)"
    >
      <CardComponent
        v-for="item in favoriteList"
        :key="item.id"
        :item="item"
        :isInFavorite="true"
      />
    </div>
    <div class="d-flex justify-content-center text-center m-5" v-else>
      <h6 class="p-5 m-5">Ainda não há favoritos. Adicione novos itens à sua lista!</h6>
    </div>
  </main>
</template>

<style scoped lang="scss">
main {
  min-height: calc(100vh - var(--nav-height));
}
</style>
