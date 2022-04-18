<template>
<div class="container">
    <div class="product-main-title">
        <p>{{product[id-1].title}}</p>
    </div>
    <div class="product-card">
        <ProductSlider v-bind:Images="product[id-1].image"/>
        <div class=" product-card-description">
            <div class="price-string">
                <div class="price">
                    <p>{{product[id-1].price}}</p>
                </div>
                <Favorite v-bind:product="{id: product[id-1].id, isFavorite: product[id-1].isFavorite}" />
            </div>
            <button type="button" class="btn btn-outline-dark w-100" v-on:click="hidePhone = !hidePhone">
                        <p class="phone-number-text">Показать телефон <br>{{printPhone()}}</p> 
                        
                    </button>
            <button type="button" class="btn btn-outline-success w-100 ">
                        <p class="btn-message-text">Перейти в сообщения</p> 
                    </button>
            <div class="seller">
                <p><span class="seller-name">{{user.name}}</span><br><span class="seller-description">{{user.subjectType}}</span><br><span class="seller-description">{{user.dealCount}} сделок закрыто</span></p>
                <div class="celler-profile-circle">
                    <i class="icon-user"></i>
                </div>
            </div>

        </div>
    </div>
     <div class="product-description-name">
                <p>
                    Описание
                </p>
            </div>

            <div class="product-description-text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex natus harum laborum necessitatibus eius, adipisci distinctio tenetur tempore amet quas, reprehenderit blanditiis aspernatur quis cupiditate? Esse sequi repudiandae, minima doloribus
                    in accusantium omnis, nemo, libero impedit neque porro at. Repellat alias voluptatum delectus quod aliquam a laborum in quis velit dicta, nulla autem sunt laboriosam, maxime numquam illum temporibus dolor quo et aperiam dolores ipsum
                    tenetur soluta necessitatibus? Eveniet exercitationem sequi sed rem molestiae, quis fugit esse, in magnam quidem reiciendis cumque voluptates vero commodi, iusto sapiente mollitia quas! Assumenda enim in minus nisi deleniti sapiente
                    repellat esse neque aspernatur est officia adipisci, fugit suscipit itaque cupiditate quisquam, incidunt nobis impedit labore doloribus at ut nam totam. Tempore adipisci culpa excepturi aut reiciendis vitae, fuga labore reprehenderit
                    harum enim eos illum, mollitia soluta debitis asperiores blanditiis corrupti facilis eum necessitatibus error, dolorum quisquam nihil autem omnis. Quo repellendus fugiat temporibus perferendis. Mollitia distinctio assumenda aliquam
                    est cupiditate quisquam reprehenderit possimus voluptates eius voluptatum repudiandae, ex, fugit autem cum nesciunt, dolor quaerat eos? Dolores illo repellat consequuntur amet est, illum doloribus unde nam eligendi sit magni et. Laboriosam
                    quia eligendi sequi quasi ut facere. Quidem ullam maiores suscipit in, itaque vero, perspiciatis excepturi autem laudantium quod exercitationem. Atque, magni? Quos blanditiis perferendis voluptatum, commodi perspiciatis id dignissimos?</p>
            </div>
</div>



    
</template>

<script>
import ProductSlider from '@/components/Product/ProductSlider'
import Favorite from '@/components/Product/Favorite'
export default {
    name: 'Product',
    components:{
        ProductSlider,
        Favorite
    },
    data(){
        return {
            id: null,
            hidePhone: true,
            phone: null,
            user: null,
            product:[
                {id: 1, image:['example_photo.jpg','example_photo.jpg','example_photo.jpg','example_photo.jpg','example_photo.jpg','example_photo.jpg'], title: 'Крутой кот1', price: '150 ₽', isFavorite: true, publication: '29 февраля, 2022', categoryId: 3},
                {id: 2, image:['example_photo.jpg','example_photo.jpg','example_photo.jpg','example_photo.jpg','example_photo.jpg'], title: 'Крутой кот2', price: '150 ₽', isFavorite: true, publication: '29 февраля, 2022', categoryId: 3},
                {id: 3, image:['example_photo.jpg','example_photo.jpg','example_photo.jpg','example_photo.jpg','example_photo.jpg'], title: 'Крутой кот3', price: '150 ₽', isFavorite: false, publication: '29 февраля, 2022', categoryId: 3},
                {id: 4, image:['example_photo.jpg','example_photo.jpg','example_photo.jpg','example_photo.jpg','example_photo.jpg'], title: 'Крутой кот4', price: '150 ₽', isFavorite: false, publication: '29 февраля, 2022', categoryId: 3},
                {id: 5, image:['example_photo.jpg','example_photo.jpg','example_photo.jpg','example_photo.jpg','example_photo.jpg'], title: 'Крутой кот5', price: '150 ₽', isFavorite: false, publication: '29 февраля, 2022', categoryId: 3},
                {id: 6, image:['example_photo.jpg','example_photo.jpg','example_photo.jpg','example_photo.jpg','example_photo.jpg'], title: 'Крутой кот6', price: '150 ₽', isFavorite: false, publication: '29 февраля, 2022', categoryId: 3},
                {id: 7, image:['example_photo.jpg','example_photo.jpg','example_photo.jpg','example_photo.jpg','example_photo.jpg'], title: 'Крутой кот7', price: '150 ₽', isFavorite: false, publication: '29 февраля, 2022', categoryId: 3},
                {id: 8, image:['example_photo.jpg','example_photo.jpg','example_photo.jpg','example_photo.jpg','example_photo.jpg'], title: 'Крутой кот8', price: '150 ₽', isFavorite: false, publication: '29 февраля, 2022', categoryId: 3},
                {id: 9, image:['example_photo.jpg','example_photo.jpg','example_photo.jpg','example_photo.jpg','example_photo.jpg'], title: 'Крутой кот9', price: '150 ₽', isFavorite: false, publication: '29 февраля, 2022', categoryId: 3},
            ],
            users:[
                {id: 1, name: 'Филиппчик1', phone: '+79507103795', subjectType: 'Частное лицо', dealCount: 10},
                {id: 2, name: 'Филиппчик2', phone: '+79507177525', subjectType: 'Частное лицо', dealCount: 10},
                {id: 3, name: 'Филиппчик3', phone: '+79507101525', subjectType: 'Частное лицо', dealCount: 10},
                {id: 4, name: 'Филиппчик4', phone: '+79507143525', subjectType: 'Частное лицо', dealCount: 10},
                {id: 5, name: 'Филиппчик5', phone: '+79507153525', subjectType: 'Частное лицо', dealCount: 10}
            ]
        }
    },
    created(){
        this.id = this.$route.params.id
        this.user = this.users[(this.id-1)%this.users.length]
        this.phone = this.user.phone
    },
    methods:{
        printPhone(){
            if(this.hidePhone){
                return this.phone.substr(0,2) + ' (' + this.phone.substr(2,3) + ')' + '-xxx-xx-' + this.phone.substr(10,2)
            }
            else{
                return this.phone.substr(0,2) + ' (' + this.phone.substr(2,3) + ')' + '-'+ this.phone.substr(5,3) + '-' + this.phone.substr(8,2) + '-' + this.phone.substr(10,2)
            }
        }
    }
    
}

</script>

<style scoped>
    .product-main-title {
        font-family: 'Source Serif Pro', serif;
        color: #252627;
        font-size: 40px;
        word-break: break-all;
    }
    
    .product-card {
        display: flex;
        margin-top: 10px;
        /* margin: 0; */
        height: 420px;
        padding: 0;
    }
    
    .product-card-description {
        width: 300px;
        height: 400px;
        padding-left: 40px;
    }
    
    .price {
        font-family: 'Source Serif Pro', serif;
        color: #252627;
        font-size: 30px;
        height: 40px;
        justify-content: space-between;
        display: flex;
        margin-bottom: 10px;
    }
    
  .price-string{
      display: flex;
      justify-content: space-between;
  }
    
    .phone-number-text {
        padding: 0;
        margin: 0;
    }
    
    .btn-message-text {
        padding: 0;
        margin: 0;
    }
    
    .seller {
        display: flex;
        margin-top: 10px;
        justify-content: space-between;
    }
    
    .seller-name {
        font-family: 'Source Serif Pro', serif;
        color: #252627;
        font-weight: 400;
        font-size: 17px;
        word-break: break-all;
    }
    
    .seller-description {
        font-family: 'Source Serif Pro', serif;
        color: #252627;
        font-weight: 400;
        font-size: 13px;
        word-break: break-all;
    }
    
    .celler-profile-circle {
        border-radius: 50%;
        border: solid 2px #252627;
        height: 50px;
        width: 50px;
        text-align: center;
        vertical-align: middle;
    }
    
    .celler-profile-circle i {
        margin: 0;
        padding: 0;
        text-align: center;
        line-height: 45px;
        font-size: 25px;
    }
    
    .product-description-name {
        font-family: 'Source Serif Pro', serif;
        color: #252627;
        font-size: 30px;
    }
    
    .product-description-text {
        width: 700px;
    }
    
    @media (max-width: 725px) {
        .product-card {
            height: 300px;
        }
        .product-slider {
            width: 50%;
            /* max-height: 300px; */
        }
        .product-card-description {
            width: 50%;
            height: 300px;
        }
        .product-description-text {
            width: 100%;
        }
    }
    
    @media (max-width: 500px) {
        .product-card {
            height: auto;
            width: auto;
            flex-direction: column;
        }
        .product-slider {
            width: 100%;
            height: auto;
            margin: 0 auto;
            padding: 0 auto;
            /* max-height: 300px; */
        }
        .product-card-description {
            width: 100%;
            height: auto;
            margin-top: 10px;
            padding: 0;
            margin-bottom: 10px;
        }
        .product-description-text {
            width: 100%;
        }
        .product-main-title {
            font-size: xx-large;
        }
    }
</style>