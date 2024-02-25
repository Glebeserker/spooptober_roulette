<script setup>
// https://image.tmdb.org/t/w300/original - thumbnail
import { defineProps } from 'vue'
const props = defineProps(['movieData'])


</script>


<template>
    <div class="column is-3-desktop is-2-widescreen-only is-4-tablet movieBoxWrap is-flex-desktop is-flex-tablet-only mt-0 mb-0" >
        <div :style="{ background: 'url(https://image.tmdb.org/t/p/w400' + movieData.poster_path + ') lightgray 50% / cover no-repeat' }" class="boxParent">
        <div class="columns is-multiline boxChild mt-0 mb-0">
            <div class="column is-12">
                <h3 class="title is-5 has-text-centered has-text-white pt-3 pb-3 is-spaced boxHeading">{{ movieData.title }}</h3>
            </div>
            <div class="column is-12 movieBoxInfo kaka">
                <p>
                    Rating: {{ Math.round(movieData.vote_average) }}/10
                </p>
            </div>
            <div class="column is-12">
                <div class="columns buttonWrap mt-1 mb-1 mr-3 ml-3 is-flex-mobile">
                    <div class="column is-6 is-6-mobile">
                        <button class="has-background-danger has-text-white">ADD</button>
                    </div>
                    <div class="column is-6 is-6-mobile">
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
    .boxParent{
        border: 1px solid white;
        .boxChild{
            backdrop-filter: blur(0.85px);
            background-color: rgb(0, 0, 0, .35);
            height: 100%;
        }
    
        
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
            transition: 0.5s;
            
            &:hover{
                opacity: 1;
                transition: 0.5s;
            }
        }
    }
}

.movieBoxInfo{
    padding-left: 2.2rem;
    font-weight: 600;
    -webkit-text-stroke: 0.2px black;
    margin-bottom: 1rem;
    font-size: 1.1rem;
}

.boxHeading{
    -webkit-text-stroke: 0.4px black;

}
</style>