<template>
  <content-list :streams="streams" :page="pageNumber" :router-type="'home'" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Stream } from "../../model/stream.model";
import { StreamRest } from "../../service/rest/stream.rest"
import { StreamService } from "./home.service"
import { QueryParams } from '@/model/query-params.model';
export default defineComponent({
  name:'Home',
  computed:{
    rest(): StreamRest {
      return new StreamRest();
    },
    service(): StreamService {
      return new StreamService();
    },
    pageNumber(): number {
      return Number(this.$route.params.page);
    }
  },
  data() {
    return {
      streams: new Stream(),
      queryParams: new QueryParams()
    }
  },
  mounted() {
    this.getMovies();
  },
  methods: {
    getMovies() {
      this.service.streams.subscribe({
        next: (response) => {
          this.streams = response;
        }
      });
      this.queryParams.page = this.pageNumber;
      this.service.getAllStreams(this.queryParams);
    }
  }
})
</script>