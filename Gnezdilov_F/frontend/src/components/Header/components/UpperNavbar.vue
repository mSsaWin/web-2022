<template>
        <!-- Upper header -->
    <div class="container">
        <div class="d-flex justify-content-between">
            <!-- Location -->
            <div class="d-flex">
                <a class="nav-link upper-navbar location" href="#">
                    <i class="icon-location"></i>
                    <span class="upper-navbar-text">Белгород</span>
                </a>
            </div>
            <!-- Profile part -->
            <nav class="d-flex justify-content-between">
                <a class="d-flex nav-link upper-navbar message" href="#">
                    <i class="icon-mail"></i>
                    <span class="upper-navbar-text">Сообщения</span>
                </a>
                <a class="d-flex nav-link upper-navbar favorite" href="#">
                    <div class="favorite-icon-with-score m-0 p-0">
                        <i class="icon-heart-empty m-0"></i>
                        <sub>{{this.$store.state.favoriteProducts.count}}</sub>
                    </div>
                    <span class="upper-navbar-text">Избранное</span>
                </a>
                <a class="d-flex nav-link upper-navbar wallet" href="#">
                    <i class="icon-wallet"></i>
                    <span class="upper-navbar-text">Кошелёк</span>
                </a>
            </nav>
        </div>
    </div>
</template>

<script>

</script>

<style>
.upper-navbar {
    color: var(--color1);
    font-family: 'Source Serif Pro', serif;
    /* font-size: 15px; */
}
.location {
    font-size: 13px;
}

.message:hover{
    color:#5c77a4;
}

.favorite:hover{
    color: crimson;
}

.favorite-icon-with-score sub{
    right: 12%;
}

.wallet:hover{
    color: #316314;
}
</style>