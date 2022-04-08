<template>
     
    <div class="col-xl-3 col-md-4 col-sm-4 col-6 product-card">
        <div class="product">
            <div class="product-img">
                <a href="product.html"><img :src="productCard.image"></a>
            </div>
            <div class="product__content">
                <div class="product-title">
                    <a href="product.html">{{productCard.title}}</a>
                </div>
                <div class="product-price">
                    <a href="product.html">{{productCard.price}}</a>
                    <div class="product-favorite">
                        <div class="product-favorite-circle">
                            <i class="icon-heart-empty"></i>
                        </div>

                    </div>
                </div>
                <div class="product-publication">
                    <a href="#">{{productCard.publication}}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: ['productCard']
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
    display: flex;
    flex-direction: column;
}

.product-title {
    margin-top: 4px;
}

.product-title a {
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

.product-price a {
    text-decoration: underline;
    color: var(--color1);
}

.product-price a:hover {
    color: crimson;
}

.product-favorite-circle {
    border-radius: 50%;
    border: solid 2px #AEC5EB;
    height: 35px;
    width: 35px;
    text-align: center;
    vertical-align: middle;
}

.product-favorite-circle:hover {
    box-shadow: 0 0 7px crimson;
    color: crimson;
    transition: all 0.5s ease 0s;
    border-color: crimson;
}

.product-favorite-circle i {
    text-align: center;
    line-height: 35px;
    font-size: 20px;
}

.product-publication a {
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
        height: 100%;
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