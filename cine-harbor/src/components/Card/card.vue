<template>
  <div class="col card m-3 p-0" @click="goToDetailPage" style="width: 19rem">
    <img :src="imageUrl" class="img-fluid" alt="image" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import router from "@/router";

export default defineComponent({
  name: "CardComponent",
  props: {
    item: {
      type: Object,
      required: true
    },
    isFavorite: {
      type: Boolean,
      required: true,
    }
  },
  computed: {
    imageUrl(): string {
      return "https://image.tmdb.org/t/p/original" + this.item.poster_path;
    }
  },
  methods: {
    goToDetailPage(): void {
      if (this.isFavorite == true) {
        router.push({
          name: "detail",
          params: {
            type: this.item.title ? "movie" : "tv",
            item: this.item.id
          }
        });
      } else {
        router.push({
          name: "detail",
          params: { type: this.item.media_type, item: this.item.id }
        });
      }
    }
  }
});
</script>



<style src="./style.scss" lang="scss" />
