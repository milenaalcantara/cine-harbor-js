<template>
  <content-list :streams="series" :page="pageNumber" :router-type="'series'" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { SeriesRest } from "../../service/rest/series.rest"
import { SeriesService } from "./series.service"
import { QueryParams } from '@/model/query-params.model';
import { Serie } from '@/model/series.model';
export default defineComponent({
    name:'Serie',
    computed:{
      rest(): SeriesRest {
        return new SeriesRest();
      },
      service(): SeriesService {
        return new SeriesService();
      },
      pageNumber(): number {
        return Number(this.$route.params.page)
      }
    },
    data() {
      return {
        series: new Serie(),
        queryParams: new QueryParams()
      }
    },
    mounted() {
      this.getSeries()
    },
    methods: {
      getSeries() {
        this.service.series.subscribe({
          next: (response) => {
            this.series = response
            console.log(response)
          }
        })
        this.queryParams.page = this.pageNumber
        this.service.getSeries(this.queryParams)
      }
    }
});
</script>
 