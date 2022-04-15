<template>
    <div class="col-xl-3 col-md-4 col-sm-4 col-6 product-card">
        <div class="product">
            <router-link :to="{name: 'product', params:{id: productCard.id}}" class="product-link">
            <div class="product-img">
                <img :src="require('@/assets/' + productCard.image[0])">
            </div>
            </router-link>
            <div class="product__content">
                <router-link :to="{name: 'product', params:{id: productCard.id}}" class="product-link">
                <div class="product-title">
                   <span>{{productCard.title}}</span>
                </div>
                </router-link>
                <div class="product-price">
                    <router-link :to="{name: 'product', params:{id: productCard.id}}" class="product-link">
                   <span>{{productCard.price}}</span>
                    </router-link>
                    <Favorite v-bind:isFavorite="productCard.isFavorite" />
                </div>
                <router-link :to="{name: 'product', params:{id: productCard.id}}" class="product-link">
                <div class="product-publication">
                   <span>{{productCard.publication}}</span>
                </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import Favorite from '@/components/Product/Favorite'
export default {
    name: 'ProductCard',
    props: ['productCard'],
    components:{
        Favorite
    }
}

</script>

<style>
.product {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: #F8F9FA;
    border: solid 2px var(--color2);
    border-radius: 20px;
    width: calc(25%-80px);
    max-width: 260px;
    height: 323px;
    overflow: hidden;
    position: relative;
    transition: all 0.5s ease 0s;
    padding: 10px;
    margin-top: 10px;
    font-family: 'Source Serif Pro', serif;
    text-decoration: none;
}

.product-link{
    text-decoration: none;
}

.product:hover {
    box-shadow: 0 0 9px var(--color2);
}

.product-img {
    position: relative;
    width: 220px;
    height: 220px;
}

.product-img img {
    height: 100%;
    width: 100%;
    border-radius: 20px;
}

.product__content {
    width: 80%;
    display: flex;
    flex-direction: column;
}

.product-title {
    text-align: center;
    margin-top: 4px;
}

.product-title span {
    color: #252627;
    font-weight: 550;
    text-decoration: none;
}

.product-price {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.product-price span {
    text-decoration: underline;
    color: var(--color1);
}

.product-price span:hover {
    color: crimson;
}


.product-publication span {
    text-decoration: none;
    font-size: 14px;
    font-weight: 400;
    color: var(--color1);
}

@media (max-width: 768px) {
    .product {
        width: 200px;
    }
    .product-img {
        width: 100%;
        height: auto;
    }
}

@media (max-width: 490px) {
    .product {
        width: 185px;
    }
    .container {
        align-items: center;
        justify-content: space-between;
    }
    .product-card {
        width: 200px;
    }
}

@media (max-width: 400px) {
    .product {
        width: 160px;
        height: 250px;
    }
    .product-img {
        padding: 5px;
    }
    .container {
        align-items: center;
        justify-content: space-between;
    }
    .product-card {
        width: 185px;
    }
}

@media (max-width: 365px) {
    .product {
        width: 160px;
        height: 250px;
    }
    .container {
        align-items: center;
        justify-content: space-between;
    }
    .product-card {
        width: 165px;
    }
}
</style>