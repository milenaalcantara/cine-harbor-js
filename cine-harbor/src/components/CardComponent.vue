<script setup>
import router from "@/router";
const props = defineProps(["item", "isInFavorite"]);

const goToDetailPage = () => {
  if (props.isInFavorite == true) {
    router.push({
      name: "detail",
      params: {
        type: props.item.title ? "movie" : "tv",
        item: props.item.id
      }
    });
  } else {
    router.push({
      name: "detail",
      params: { type: props.item.media_type, item: props.item.id }
    });
  }
};

const getImageUrl = (item) => "https://image.tmdb.org/t/p/original" + item.poster_path;
</script>

<template>
  <div class="col card m-3 p-0" @click="goToDetailPage" style="width: 19rem">
    <img :src="getImageUrl(props.item)" class="img-fluid" alt="image" />
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
