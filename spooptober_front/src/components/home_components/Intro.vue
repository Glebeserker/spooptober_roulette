<script setup>

</script>

<template>
    <div class="columns is-multiline" id="homeIntroWrap">
        <div class="column is-12 mt-2 mb-6">
            <h1 class="title is-3 has-text-centered has-text-white">SPOOKTOBER ROULETTE</h1>
        </div>
        <div class="column is-1 is-hidden-mobile"></div>
        <div class="column is-5 is-12-mobile has-text-danger" id="introPara">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
    </div>
</template>

<style scoped lang="scss">
    h1{
        font-weight:800 ;
    }

    #introPara{
        line-height: 200%;

        @media(max-width: 800px){
            padding-right: 2rem;
            padding-left: 2rem;
        }
    }
</style>