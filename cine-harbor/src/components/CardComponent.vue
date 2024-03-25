<script setup>
import router from '@/router'
const props = defineProps(['item'])

const goToDetailPage = () => {
  console.log('props.item', props.item)
  router
    .push({
      name: 'detail',
      params: { type: props.item.media_type, item: props.item.id }
    })
    .then(() => router.go())
}

const getImageUrl = (item) => 'https://image.tmdb.org/t/p/original' + item.poster_path
</script>

<template>
  <div class="col card m-3 p-0" @click="goToDetailPage" style="width: 19rem">
    <img :src="getImageUrl(props.item)" class="img-fluid" alt="image" />
    <!-- <div class="card-body">
      <div class="row justify-content-space-between">
        <div class="col"> star </div>
        <div class="col"> favoritar </div>
      </div>
    </div> -->
  </div>
</template>

<style scoped>
img,
.col,
.card,
.card-body {
  background-color: var(--vt-c-black-soft);
  border-radius: 12px;
  border: none;
}

.card:hover {
  cursor: pointer;
  border: 12px solid var(--vt-c-black-soft);
  opacity: 0.6;
  transition: all 0.4s;
}

img {
  height: 100%;
}
</style>
