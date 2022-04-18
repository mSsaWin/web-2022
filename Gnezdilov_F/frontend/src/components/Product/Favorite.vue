<template>
    <div class="product-favorite">
        <div :class="{product__favorite__circle__on: isFavorite, product__favorite__circle: true}" v-on:click="favoriteClick()">
            <i class="icon-heart-empty"></i>
        </div>

    </div>
</template>
<script>
export default {
    props: ['product'],
    data(){
        return{
            isFavorite: null
        }
    },
    methods: {
        favoriteClick(){
            this.isFavorite = !this.isFavorite
            this.checkFavorite()
        },
        checkFavorite(){
            if (this.isFavorite){
                this.$store.commit('addFavorite', this.product.id)
            }
            else{
                this.$store.commit('removeFavorite', this.product.id)
            }
        }
        
    },
    beforeMount(){
        this.isFavorite = this.product.isFavorite
        if (this.isFavorite){
            this.$store.commit('addFavorite', this.product.id)
        } 
    }
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