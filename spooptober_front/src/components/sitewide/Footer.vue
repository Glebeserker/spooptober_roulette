<script setup>

</script>

<template>
    <footer class="footer has-background-primary">
        <div class="content has-text-centered has-text-white">
            <p class="mb-0">Created by: <a href="https://github.com/Glebeserker" class="has-text-info" target="_blank">
                Gleb Belyaev</a> {{ new Date().getFullYear() }}</p>
            <p id="footerSupport">This product uses the TMDB API but is not endorsed or certified by <a class="has-text-info" href="https://www.themoviedb.org/" target="_blank"><img src="/IMDB.svg"/></a>.</p>
        </div>
    </footer>
</template>

<style scoped lang="scss">
    footer{
        border-top: 1px solid white;

        .content{
            #footerSupport{
                font-size: 0.75rem;

                img{
                    width: 3%;

                    @media (max-width: 850px){
                        width: 10%;
                    }
                }
            }
        }
    }
</style>