<script setup>
// https://image.tmdb.org/t/w300/original - thumbnail
import { defineProps } from 'vue'
const props = defineProps(['movieData'])
</script>

<template>
    <div class="column is-3 is-6-mobile movieBoxWrap" >
        <div :style="{ background: 'url(' + movieData.img + ') lightgray 50% / cover no-repeat' }" class="parent">
        <h3 class="title is-5 has-text-centered has-text-white pt-3 pb-3">{{ movieData.Name }}</h3>
        <div class="columns is-multiline">
            <div class="column is-12 movieBoxInfo">
                <p>
                    Genre: {{ movieData.Name }}
                    <br>
                    <br>
                    Length: {{ movieData.length }}
                    <br>
                    <br>
                    Rating: {{ movieData.Rating }}/10
                </p>
            </div>
            <div class="column is-12">
                <div class="columns buttonWrap mt-1 mb-1 mr-3 ml-3">
                    <div class="column is-6">
                        <button class="has-background-danger has-text-white">ADD</button>
                    </div>
                    <div class="column is-6">
                        <button class="has-background-info has-text-white">INFO</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
    </div>
</template>

<style scoped lang="scss">
.movieBoxWrap{
    backdrop-filter: blur(0.75px);
    .parent{
        border: 1px solid white;
    
        
    }
}

.buttonWrap{
    .column{
        button{
            width: 100%;
            border: none;
            padding: .5rem 1rem;
            cursor: pointer;
            opacity: 0.75;
            
            &:hover{
                opacity: 1;
            }
        }
    }
}

.movieBoxInfo{
    padding-left: 1.5rem;
    font-weight: 700;
    -webkit-text-stroke: 0.2px black;
    margin-bottom: 1rem;
}

</style>