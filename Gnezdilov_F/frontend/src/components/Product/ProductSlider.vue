<template>
    <div class="product-slider">
        <div id="carouselIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button v-for="i in Images.length-1" :key="i" type="button" data-bs-target="#carouselIndicators" :data-bs-slide-to="i" :aria-label="'Slide ' + (i+1)"></button>
                
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active" >
                    <img :src="require('@/assets/' + Images[0])" class="d-block" alt="...">
                </div>
                <div class="carousel-item" v-for="image_i in Images.length-1" :key="image_i">
                    <img :src="require('@/assets/' + Images[image_i])" class="d-block" alt="...">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Предыдущий</span>
                </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Следующий</span>
            </button>
        </div>
    </div>
</template>

<script>

export default {
    name: 'ProductSlifer',
   props:['Images']
}
</script>

<style>
    .product-slider {
        width: 400px;
        height: 100%;
    }
    
    .product-slider img {
        width: 100%;
        height: 100%;
    }
</style>