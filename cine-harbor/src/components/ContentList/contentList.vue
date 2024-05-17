<template>
  <main class="container text-center my-5 justify-content-center p-0">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 justify-content-center">
      <card v-for="item in streams" :key="item.id" :item="item" />
    </div>

    <pagination
      :from="page"
      :to="maxPage"
      @previous="goToPreviousPage"
      @next="goToNextPage"
    />
  </main>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Stream } from "@/model/stream.model";
import { GoToRoute } from "@/utils/go-to.utils";

export default defineComponent({
  name: "ContentList",
  props: {
    streams: {
      type: Array as PropType<Stream[]>,
      required: true,
    },
    page: {
      type: Number,
      required: true,
    },
    routerType: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      maxPage: 500,
    };
  },
  computed: {
    go(): GoToRoute {
      return new GoToRoute();
    },
  },
  methods: {
    goToPreviousPage(): void {
      this.go.redirectToPage(this.routerType, { page: this.page - 1 });
    },
    goToNextPage(): void {
      this.go.redirectToPage(this.routerType, { page: this.page + 1 });
    },

  },
});
</script>

