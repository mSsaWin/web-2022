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
                <a class="d-flex nav-link upper-navbar" href="#">
                    <i class="icon-mail"></i>
                    <span class="upper-navbar-text">Сообщения</span>
                </a>
                <a class="d-flex nav-link upper-navbar" href="#">
                    <i class="icon-heart-empty"></i>
                    <span class="upper-navbar-text">Избранное</span>
                </a>
                <a class="d-flex nav-link upper-navbar" href="#">
                    <i class="icon-wallet"></i>
                    <span class="upper-navbar-text">Кошелёк</span>
                </a>
            </nav>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
.upper-navbar {
    color: var(--color1);
    font-family: 'Source Serif Pro', serif;
    /* font-size: 15px; */
}
.location {
    font-size: 13px;
}
</style>