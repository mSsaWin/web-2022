<template>
<main>
    <div class="container">
            <!-- Product -->
        <div class="row">
            <ProductCard v-for="product in products" :key="product.id" v-bind:productCard="product"/>
        </div>
    </div>
</main>
</template>

<script>
import ProductCard from "@/components/Product/ProductCard"


export default {
    data(){
        return{
            products:[
                {id: 1, image:['example_photo.jpg','example_photo.jpg','example_photo.jpg','example_photo.jpg','example_photo.jpg'], title: 'Крутой кот', price: '150 ₽', isFavorite: true, publication: '29 февраля, 2022', categoryId: 3},
                {id: 2, image:['example_photo.jpg','example_photo.jpg','example_photo.jpg','example_photo.jpg','example_photo.jpg'], title: 'Крутой кот', price: '150 ₽', isFavorite: true, publication: '29 февраля, 2022', categoryId: 3},
                {id: 3, image:['example_photo.jpg','example_photo.jpg','example_photo.jpg','example_photo.jpg','example_photo.jpg'], title: 'Крутой кот', price: '150 ₽', isFavorite: false, publication: '29 февраля, 2022', categoryId: 3},
                {id: 4, image:['example_photo.jpg','example_photo.jpg','example_photo.jpg','example_photo.jpg','example_photo.jpg'], title: 'Крутой кот', price: '150 ₽', isFavorite: false, publication: '29 февраля, 2022', categoryId: 3},
                {id: 5, image:['example_photo.jpg','example_photo.jpg','example_photo.jpg','example_photo.jpg','example_photo.jpg'], title: 'Крутой кот', price: '150 ₽', isFavorite: false, publication: '29 февраля, 2022', categoryId: 3},
                {id: 6, image:['example_photo.jpg','example_photo.jpg','example_photo.jpg','example_photo.jpg','example_photo.jpg'], title: 'Крутой кот', price: '150 ₽', isFavorite: false, publication: '29 февраля, 2022', categoryId: 3},
                {id: 7, image:['example_photo.jpg','example_photo.jpg','example_photo.jpg','example_photo.jpg','example_photo.jpg'], title: 'Крутой кот', price: '150 ₽', isFavorite: false, publication: '29 февраля, 2022', categoryId: 3},
                {id: 8, image:['example_photo.jpg','example_photo.jpg','example_photo.jpg','example_photo.jpg','example_photo.jpg'], title: 'Крутой кот', price: '150 ₽', isFavorite: false, publication: '29 февраля, 2022', categoryId: 3},
                {id: 9, image:['example_photo.jpg','example_photo.jpg','example_photo.jpg','example_photo.jpg','example_photo.jpg'], title: 'Крутой кот', price: '150 ₽', isFavorite: false, publication: '29 февраля, 2022', categoryId: 3},
            ]
        }
    },
   components: {
      ProductCard
    }
}
</script>

<style>
main {
    padding-top: 14px;
}

main .row {
    padding-top: 14px;
}
</style>