<template>
    <div class="product-favorite">
        <div :class="{product__favorite__circle__on: isFavorite, product__favorite__circle: true}" v-on:click="isFavorite = !isFavorite">
            <i class="icon-heart-empty"></i>
        </div>

    </div>
</template>
<script>
export default {
    props: ['isFavorite'],
}
</script>

<style>
.product__favorite__circle {
    border-radius: 50%;
    border: solid 2px #AEC5EB;
    height: 35px;
    width: 35px;
    text-align: center;
    vertical-align: middle;
}

.product__favorite__circle:hover {
    box-shadow: 0 0 7px crimson;
    color: crimson;
    transition: all 0.5s ease 0s;
    border-color: crimson;
}

.product__favorite__circle__on{
    /* box-shadow: 0 0 7px crimson; */
    color: crimson;
    transition: all 0.5s ease 0s;
    border-color: crimson;
}

.product__favorite__circle i {
    text-align: center;
    line-height: 35px;
    font-size: 20px;
}

</style>