<template>
<main>
    <div class="container">
            <!-- Product -->
        <div class="row">
            <ProductCard v-bind:productCard="product[0]"/>
        </div>
    </div>
</main>
</template>

<script>
import ProductCard from "@/components/Main/Product/ProductCard"


export default {
    data(){
        return{
            product:[
                {id: 1, image:'@/assets/example_photo.jpg', title: 'Крутой кот', price: '150 ₽', publication: '29 февраля, 2022'},
            ]
        }
    },
   components: {
      ProductCard
    }
}
</script>
