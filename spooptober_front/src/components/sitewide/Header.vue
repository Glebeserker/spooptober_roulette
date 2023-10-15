<script setup>

</script>

<template>
    <nav class="navbar is-fixed-top has-background-primary" id="navWrapper" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <RouterLink to="/" class="navbar-item is-96x96">
                <img src="@/assets/imgs/Logo.jpg">
            </RouterLink>
        </div>
        <div class="navbar-menu">
            <div class="navbar-end">
                <RouterLink to="/" class="navbar-item">
                    Genres
                </RouterLink>
                <RouterLink to="/" class="navbar-item">
                    Roulette
                </RouterLink>
                <RouterLink to="/" class="navbar-item">
                    Search Bar Goes Here
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