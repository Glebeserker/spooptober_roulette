<script setup>
import { ref, defineProps } from 'vue'
import MovieBox from '../boxes/MovieBox.vue'


let movieDatas = ref(null)
let isLoading = ref(true)


const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=27';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer TOKEN'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(data => {
    movieDatas = data['results'];
    isLoading.value = false;
    })
  .catch(err => {
    console.error('error:' + err);
});

</script>

<template>
<div class="columns" id="HomeMoviesWrap">
    <div class="column is-1 is-hidden-mobile"></div>
    <div class="column is-10 has-text-white" id="HomeChild">
        <h2 class="title is-4 is-5-mobile has-text-centered has-text-white mb-7" id="MoviesWrapHeader">
            TOP HORROR MOVIES
        </h2>
        <div class="columns is-multiline is-variable is-5 mt-2 is-centered" id="HomeBoxesWrap" v-if="!isLoading">
                <MovieBox v-for="item in movieDatas" :movieData="item" />
        </div>
        <div v-else>
            Loading....
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