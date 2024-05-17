<template>
  <main class="container-fluid text-center p-0">
    <div>
      <img class="img-fluid" :src="imageUrl" alt="Poster" />
      <div class="content ml-5 align-middle">
        <div id="overview" class="d-flex bg-transparent row row-cols-1 row-cols-sm-1 row-cols-md-2">
          <div class="bg-transparent col">
            <div class="text-group">
              <h1 class="title text-start">
                {{ 
                  stream.title ? 
                    stream.title 
                    : stream.name 
                }}
              </h1>
              <div class="details my-2 d-flex justify-content-between">
                <span class="text-xs text-start me-2">
                  {{
                    stream.release_date
                      ? stream.release_date.split("-")[0]
                        : stream.first_air_date?.split("-")[0] ?? ""
                  }}
                </span>
                <span class="text-success mx-3"> ⭑ {{ stream.vote_average }} </span>
                <span class="mx-1"> | </span>
                <span>
                  {{
                    stream.runtime
                      ? stream.runtime + " min"
                      : stream.number_of_episodes + " Episódios"
                  }}
                </span>
              </div>
              <p class="overview text-start paragraph py-3 m-0">{{ stream.overview }}</p>
            </div>
            <div class="button-group justify-content-start bg-transparent my-4">
              <button v-if="!isFavorited" class="btn btn-outline-light" @click="addFavorite">
                🤍 Favoritar
              </button>
              <button v-else class="btn btn-danger" @click="removeFavorite">🤍 Favorito</button>
            </div>
          </div>
          <div class="col bg-transparent justify-content-end mr-5">
            <iframe :src="trailerUrl" class="mr-5 lg border rounded"></iframe>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import * as storage from "@/service/customStorage";
import { StreamDetail } from "@/model/stream.model";
import { StreamRest } from "@/service/rest/stream.rest";
import { StreamService } from "../Home/home.service";

export default defineComponent({
  name: "DetailView",
  props: {
    streamType: {
      type: String,
      required: true,
    },
    itemId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      stream: {} as StreamDetail,
      trailerUrl: "" as string
    };
  },
  computed: {
    rest(): StreamRest {
      return new StreamRest();
    },
    service(): StreamService {
      return new StreamService();
    },
    imageUrl(): string {
      return "https://image.tmdb.org/t/p/original" + this.stream.backdrop_path;
    },
    isFavorited(): boolean {
      return storage.hasItemOnFavoriteList(this.itemId);
    },
  },
  mounted() {
    this.getStreamById();
  },
  methods: {
    getStreamById() {
      this.service.stream.subscribe({
        next: (response) => {
          this.stream = response;
        }
      })

      this.service.getStreamById(this.streamType, this.itemId);
    },
    getTrailerUrlById() {
      this.service.trailerUrl.subscribe({
        next: (response) => {
          this.trailerUrl = response ? 
            "https://www.youtube.com/embed/" + response 
            : "https://www.youtube.com/embed/";
        }
      })
    },
    addFavorite(): void {
      storage.addItemToFavoritList(this.itemId);
      // router.go();
    },

    removeFavorite(): void {
      storage.removeItemOfFavoritList(this.itemId);
      // router.go();
    },
  }, 
});
</script>

<style src="./style.scss" lang="scss" />
