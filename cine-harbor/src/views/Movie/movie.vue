<template>
    <content-list :streams="movies" :page="pageNumber" :router-type="'movies'" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Movie } from '../../model/movies.model';
import { MoviesRest } from "../../service/rest/movies.rest"
import { MoviesService } from "./movie.service"
import { QueryParams } from '@/model/query-params.model';
export default defineComponent({
    name:'Movie',
    computed:{
        rest(): MoviesRest {
            return new MoviesRest()
        },
        service(): MoviesService {
            return new MoviesService()
        },
        pageNumber(): number {
            return Number(this.$route.params.page)
        }
    },
    data() {
        return {
            movies: new Movie(),
            queryParams: new QueryParams()
        }
    },
    mounted() {
       this.getMovies()
    },
    methods: {
        getMovies() {
            this.service.movies.subscribe({
                next: (response) => {
                    this.movies = response
                    console.log(response)
                }
            })
            this.queryParams.page = this.pageNumber
            this.service.getMovies(this.queryParams)
        }
    }
})
</script>
