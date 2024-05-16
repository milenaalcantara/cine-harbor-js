<script lang="ts">
import { MoviesRest } from './../../service/rest/movies.rest'
import { MoviesService } from './movie.service'
import { defineComponent } from 'vue'
import {Movie} from "./../../model/movies.model"
export default defineComponent({
    computed:{
        rest():MoviesRest{
            return new MoviesRest()
        },
        service():MoviesService{
            return new MoviesService()
        }
    },
    data(){
        return {
            movie: new Movie()
        }
    },
   mounted(){
    console.log(this.$route)
    this.getMovieById(this.$route.params.page)
   },
   methods:{
    getMovieById(id){
        this.service.movies.subscribe({
            next:(response)=>{this.movie = response.results}
        })
        this.service.getMovieById(id)
    }
   }
    
})
</script>
<template>
<section>
    <h1>{{ movie?.profile_title }}</h1>
</section>
</template>../../service/rest/movies.rest../../model/movies.model