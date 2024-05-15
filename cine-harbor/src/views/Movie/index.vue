<script lang="ts">
import { defineComponent } from 'vue';
import { Movie } from './../../model/movies.model';
import { MoviesRest} from "./../../service/rest/movies.rest"
import {MoviesService} from "./movie.service"
export default defineComponent({
    name:'Movie',
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
            movies: new Movie()
        }
    },
    mounted(){
       this.getMovies()
        
    },
    methods:{
        getMovies(){
            this.service.movies.subscribe({next:(response:any)=>{this.movies = response.results}})
            this.service.getMovies()
        }
    }
})
</script>
<template>
<div v-for="movie in movies">
{{ movie?.original_title }}
</div>

</template>