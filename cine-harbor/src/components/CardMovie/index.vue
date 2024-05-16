<script lang="ts">
import { Movie } from "./../../model/movies.model";


export default {
    props: {
        movie: new Movie()
    },
    methods: {
        goToDetailedPage(id: string) {
            this.$router.push({ path: `movies/${id}` })
        }
    }
}
</script>
<template>
    <Card class=" border bg-white rounded-md w-80" style="width: 25rem; overflow: hidden">
        <template #header>
            <img :src="'https://image.tmdb.org/t/p/original' + movie?.poster_path"
                class=" rounded-md" /></template>
        <template #title>
            <h1 class="text-slate-800 p-6 text-lg font-semibold">{{ movie.title }}</h1>
            <span v-if="movie.adult" class="bg-red-600 text-white"> + 18</span>
        </template>
        <template #content>
            <p class="px-6 pb-4 overflow-clip h-40">{{ movie.overview }}</p>
        </template>
        <template #footer>
            <div class="flex   flex-row-reverse px-6 pb-6">
                <Button label="Saiba mais" @click="goToDetailedPage(movie?.id)"
                    class="bg-red-600 text-slate-200 px-4 py-2 rounded-md " />
            </div>



        </template>
    </Card>
</template>