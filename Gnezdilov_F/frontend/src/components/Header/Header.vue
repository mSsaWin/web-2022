<template>
    <header >
        <UpperNavbar/>
        <nav id="nav" class="navbar-light bg-light navbar-border" v-bind="widthListener()">
            <div class="container navbar-position">
                <!-- Logo -->
                <div class="logo" v-show="bigSize">
                    <a id="logo-href" href="">
                        <img id="logo" :src="mainLogo">
                    </a>
                </div>
                <div class="burger_menu" v-show="!bigSize">
                    <img :src="burgerMenu" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                </div>
                <CategoryList v-show="bigSize"
                v-bind:categories="categories"
                />
                <SideBar 
                v-bind:categories="categories"
                />
                
            <!-- Search -->
                <div id="search-field" class="input-group input-field">
                    <input type="search" class="form-control rounded" placeholder="" style aria-label="Search" aria-describedby="search-addon" />
                    <button type="button" class="btn btn-danger"><i class="icon-search"></i></button>
                </div>

            <NavBarButtons v-show="bigSize"/>
            </div>
            <Auth/>
        </nav>
    
    </header>
</template>

<script>

    import UpperNavbar from '@/components/Header/components/UpperNavbar'
    import CategoryList from '@/components/Header/components/CategoryList'
    import SideBar from '@/components/Header/components/Sidebar'
    import NavBarButtons from '@/components/Header/components/NavBarButtons'
    import Auth from '@/components/User/Auth/Auth'

    import mainLogo from '@/assets/logo.svg'
    import burgerMenu from '@/assets/burger_menu.png'
 
    export default{
        name: 'app',
        data(){
        return {
            windowSize: '',
            
            bigSize: true,
            mainLogo,
            burgerMenu,
            categories:[
    {category: 'Для дома',
    id: 1,
    subCategory: ['Ремонт и строительство',
                    'Мебель и интерьер',
                    'Бытовая техника',
                    'Посуда и товары для кухни']},
    {category: 'Личные вещи',
    id: 2,
    subCategory: ['Одежда, обувь, аксессуары',
                    'Детская одежда и обувь',
                    'Товары для детей и игрушки',
                    'Красота и здоровье',
                    'Часы и украшения']},
    {category: 'Хобби и отдых',
    id: 3,
    subCategory: ['Велосипеды',
                    'Книги и журналы',
                    'Коллекционирование',
                    'Спорт и отдых']},
    {category: 'Транспорт',
    id: 4,
    subCategory: ['Автомобили',
                    'Мотоциклы и мототехника',
                    'Грузовики и спецтехника',
                    'Водный транспорт']},
    {category: 'Электроника',
    id: 5,
    subCategory: ['Телефоны',
                    'Аудио и видео',
                    'Товары для компьютера',
                    'Игры, приставки и программы',
                    'Ноутбуки',
                    'Настольные компьютеры',
                    'Фототехника']},
    {category: 'Животные',
    id: 6,
    subCategory: ['Собаки', 'Кошки', 'Птицы', 'Другие животные']}]
        
        }
        },
        components: {
        UpperNavbar,
        CategoryList,
        SideBar,
        NavBarButtons,
        Auth
        },

        methods:{
        updateWidth(){
            this.windowSize = window.innerWidth
            if (this.windowSize <= 800){
                this.bigSize = false
            }
            else{
                this.bigSize = true
            }
        },
        widthListener() {
        this.updateWidth()
        window.addEventListener('resize', this.updateWidth);

        },
    }
    }

    
</script>

<style scoped>
.navbar-position {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.input-field {
    display: flex;
    width: 53%;
    align-items: center;
}

.burger_menu{
    margin-right: 10px;

}

@media (max-width: 800px) {
    .input-field{
        width: 90%;
    }
}

</style>