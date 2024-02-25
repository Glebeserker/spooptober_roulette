<script setup>

</script>

<template>
    <nav class="navbar is-fixed-top has-background-primary" id="navWrapper" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <RouterLink to="/" class="navbar-item is-96x96">
                <img src="@/assets/imgs/Logo.jpg" alt="Spooktober Rouletter Logo">
            </RouterLink>
        </div>
        <div class="navbar-menu">
            <div class="navbar-end">
                <RouterLink to="/" class="navbar-item">
                    Genres
                </RouterLink>
                <RouterLink to="create-roulette" class="navbar-item">
                    Roulette
                </RouterLink>
                <Router-Link to="/" class="navbar-item">Login</Router-Link>
                <RouterLink to="/" class="navbar-item">
                    <font-awesome-icon :icon="['fas', 'magnifying-glass']" style="color: red"/>  Search
                </RouterLink>
            </div>
        </div>
    </nav>
</template>

<style scoped lang="scss">

nav{
    border-bottom: 1px solid red;
}
.navbar-end{
    .navbar-item{
        margin-right: 1.5rem;
    }
}

.navbar-brand{
    .navbar-item{
        margin-left: 1.5rem;

        @media(max-width: 800px){
            margin-left: .25rem;
        }
        img{
            @media(max-width: 800px){
                max-height: 2.5rem;
            }
        }
    }
}

.navbar-item{
    font-weight: 600;
    transition: 0.5s;

    &:hover{
        transition: 0.5s;
    }
}
</style>