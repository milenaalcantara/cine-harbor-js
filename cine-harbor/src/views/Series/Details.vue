<script lang="ts">
import { SeriesRest } from './../../service/rest/series.rest'
import { SeriesService } from './serie.service'
import { defineComponent } from 'vue'
import { Series } from "./../../model/series.model"
import { url } from 'inspector'
export default defineComponent({
    computed: {
        rest(): SeriesRest {
            return new SeriesRest()
        },
        service(): SeriesService {
            return new SeriesService()
        }
    },
    data() {
        return {
            serie: new Series()
        }
    },
    mounted() {

        this.getSerieById(this.$route.params.page)
    },
    methods: {
        getSerieById(id) {
            this.service.serie.subscribe({
                next: (response) => { this.serie = response }
            })
            this.service.getSerieById(id)
        }
    }

})
</script>
<template>

    <section class="min-h-screen w-screen justify-center bg-slate-700 relative ">
        <div :style="{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${serie?.backdrop_path})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize:'cover',
            
        }" class="h-[700px] absolute top-0">
    <div class="w-screen">
        <h1 class="text-2xl"> {{ serie.name }}</h1>
    </div>
            
            
               

            
        </div>
        <div class="h-[700px] opacity-50 bg-gradient-to-r from-slate-900 to-slate-50 absolute top-0 z-20 w-screen">

        </div>

    </section>
</template>