<script lang="ts">
import { Series } from "./../../model/series.model.ts"

export default {
    props: {
        serie: new Series()
    },
    methods: {
        goToDetailedPage(id: string) {
            this.$router.push({ path: `series/${id}` })
        }
    }
}
</script>
<template>
    <Card class=" border bg-white rounded-md w-80" style="width: 25rem; overflow: hidden" @click="()=>goToDetailedPage(serie?.id)">
        <template #header>
            <img :src="'https://image.tmdb.org/t/p/original' +serie?.poster_path" />
        </template>
        <template #title>
            <h1 class="text-slate-800 p-6 text-lg font-semibold">{{ serie.original_name }}</h1>
            <span v-if="serie.adult" class="bg-red-600 text-white"> + 18</span>
        </template>
    </Card>
</template>