<script setup>
import { ref, defineProps } from 'vue'
import MovieBox from '../boxes/MovieBox.vue'

const dummy_top_movie = {
    0: {
        "Name": "Title",
        "Rating": 7,
        "img": "/Poster_1.jpg",
        "length": 123
    },
    1: {
        "Name": "Title",
        "Rating": 7,
        "img": "/Poster_2.jpg",
        "length": 123
    },
    2: {
        "Name": "Title",
        "Rating": 7,
        "img": "/Poster_1.jpg",
        "length": 123
    },
    3: {
        "Name": "Title",
        "Rating": 7,
        "img": "/Poster_2.jpg",
        "length": 123
    },
    4: {
        "Name": "Title",
        "Rating": 7,
        "img": "/Poster_1.jpg",
        "length": 123
    },
    5: {
        "Name": "Title",
        "Rating": 7,
        "img": "/Poster_2.jpg",
        "length": 123
    },
    6: {
        "Name": "Title",
        "Rating": 7,
        "img": "/Poster_1.jpg",
        "length": 123
    },
    7: {
        "Name": "Title",
        "Rating": 7,
        "img": "/Poster_2.jpg",
        "length": 123
    }
}


</script>

<template>
<div class="columns" id="HomeMoviesWrap">
    <div class="column is-1 is-hidden-mobile"></div>
    <div class="column is-10 has-text-white" id="HomeChild">
        <h2 class="title is-4 has-text-centered has-text-white mb-7" id="MoviesWrapHeader">
            TOP HORROR MOVIES
        </h2>
        <div class="columns is-multiline is-variable is-5 mt-2" id="HomeBoxesWrap">
                <MovieBox v-for="item in dummy_top_movie" :movieData="item" />
        </div>
    </div>
    <div class="column is-1 is-hidden-mobile"></div>
</div>
</template>

<style scoped lang="scss">
#MoviesWrapHeader{
    font-weight: 800;
    
}

#HomeMoviesWrap{
    margin-bottom: 10rem;
    @media(max-width: 800px){
            padding-right: 2rem;
            padding-left: 2rem;
        }
}

#HomeChild{
    @media(max-width: 800px){
            padding-right: 0;
            padding-left: 0;
        }
}
</style>