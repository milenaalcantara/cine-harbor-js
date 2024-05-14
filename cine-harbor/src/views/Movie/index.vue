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
            this.service.movies.subscribe({
                next:(response)=>{
                    this.movies = response
                    console.log(response)
                }
            })
        }
    }
})
</script>
<template>


</template>