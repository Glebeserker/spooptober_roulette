<script setup>
import { RouterView } from 'vue-router'
import Header from '@/components/sitewide/Header.vue'
import Footer from '@/components/sitewide/Footer.vue'

</script>

<template>
    <Header />
    <main class="pl-3-mobile pr-3-mobile ">
        <RouterView />
    </main>
    <Footer/>
</template>

<style scoped lang="scss">
main{
    padding-left: 1.5rem;
    padding-right: 1.5rem;

    @media(max-width: 800px){
        padding-left: 2rem;
        padding-right: 2rem;
    }
}


</style>
