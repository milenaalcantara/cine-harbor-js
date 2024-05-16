<script lang="ts">
import { defineComponent } from 'vue';
import { Movie } from './../../model/movies.model';
import { MoviesRest } from "./../../service/rest/movies.rest"
import { MoviesService } from "./movie.service"
export default defineComponent({
    name: 'Movies',
    computed: {
        rest(): MoviesRest {
            return new MoviesRest()
        },
        service(): MoviesService {
            return new MoviesService()
        }
    },
    data() {
        return {
            movies: new Movie()
        }
    },
    mounted() {
        this.getMovies()

    },
    methods: {
        getMovies() {
            this.service.movies.subscribe({ next: (response: any) => { this.movies = response.results } })
            this.service.getMovies()
        }
    }
})
</script>
<template>
    <section class="flex flex-wrap items-center justify-center w-screen h-min-screen bg-slate-800 gap-4">
        <div v-for="movie in movies" :key="movie?.id">
            <card-movie :movie="movie" />
        </div>
    </section>


</template>