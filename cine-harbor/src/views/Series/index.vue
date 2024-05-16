<script lang="ts">
import { defineComponent } from 'vue';
import { SeriesRest } from "./../../service/rest/series.rest"
import { SeriesService } from './serie.service';
import { Series } from '@/model/series.model';

export default defineComponent({
   name:"Series",
   computed:{
    rest():SeriesRest{
        return new SeriesRest()
    },
    service():SeriesService{
        return new SeriesService()
    }
   },
   data(){
    return{
        series: new Series()
    }
   },
   mounted(){
    this.getSeries()
   }, 
   methods:{
    getSeries(){
        this.service.series.subscribe({next:(response)=>this.series = response.results})
        this.service.getSeries()
    }
   }
})
</script>
<template>
    <section class="flex flex-wrap items-center justify-center w-screen h-min-screen bg-slate-800 gap-4">
    
        <div v-for="serie in series" :key="serie?.id">
           
            <card-serie :serie="serie" />
        </div>
    </section>

</template>