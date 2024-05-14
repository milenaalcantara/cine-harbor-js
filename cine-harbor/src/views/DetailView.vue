<script setup lang="ts">
import router from "@/router";
import { getStreamByID, getTrailerByID } from "@/service";
import * as storage from "@/service/customStorage";

const props = defineProps(["type", "item"]); // mudar para item ID
const stream = await getStreamByID(props.type, props.item);

const getImageUrl = (stream) => "https://image.tmdb.org/t/p/original" + stream.backdrop_path;
const embedLink = await getTrailerByID(props.type, props.item).then((data) => {
  if (data) {
    return "https://www.youtube.com/embed/" + data;
  } else {
    return "https://www.youtube.com/embed/";
  }
});

const isFavorited = storage.getItem(props.item);

const addFavorite = () => {
  storage.addItem(stream);
  router.go();
};

const removeFavorite = () => {
  storage.removeItem(stream.id);
  router.go();
};
</script>

<template>
  <main class="container-fluid text-center p-0">
    <div>
      <img class="img-fluid" :src="getImageUrl(stream)" alt="Poster" />
      <div class="content ml-5 align-middle">
        <div id="overview" class="d-flex bg-transparent row row-cols-1 row-cols-sm-1 row-cols-md-2">
          <div class="bg-transparent col">
            <div class="text-group">
              <h1 class="title text-start">{{ stream.title ? stream.title : stream.name }}</h1>
              <div class="details my-2 d-flex justify-content-between">
                <span class="text-xs text-start me-2">
                  {{
                    stream.release_date
                      ? stream.release_date.split("-")[0]
                      : stream.first_air_date.split("-")[0]
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
            <iframe :src="embedLink" class="mr-5 lg border rounded"></iframe>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
:root {
  --iframe-max-heihgt: 315px;
  --iframe-max-width: 560px;
}

main {
  min-width: 100vw;
  min-height: calc(100vh - var(--nav-height));
  margin-top: var(--nav-height);

  img {
    height: calc(100vh - var(--nav-height));
    width: 100vw;
    object-fit: cover;
    z-index: 0;
  }

  .content {
    z-index: 1;
    position: absolute;
    top: var(--nav-height);
    bottom: 0;
    color: white;
    background: linear-gradient(270deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 1) 100%);

    display: flex;
    flex-direction: column;
    justify-content: center;

    .text-group {
      background-color: transparent;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
    }

    .title {
      background-color: transparent;
      white-space: normal;
      font-size: 32px;
      font-weight: 700;
      margin: 0;
    }

    .details {
      background-color: transparent;
      font-size: 13px;
      font-weight: 400;
      margin: 0;
    }

    .text-start {
      background-color: transparent;
      padding: 0 0 0 4rem;
      border-radius: 12px;
      left: 0;
      align-items: baseline;
    }

    .overview {
      background-color: transparent;
      font-size: 17px;
      font-weight: 400;

      height: auto;
      width: 80%;
    }

    span {
      background-color: transparent;
    }

    .button-group {
      padding: 0 0 0 4rem;
      display: flex;
      justify-content: center;
      align-items: center;

      button {
        width: 7rem;
      }

      button:focus {
        outline: none;
      }
    }
  }
}
</style>
