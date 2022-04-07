<template>
    <header>
        <UpperNavbar/>
        <nav id="nav" class="navbar-light bg-light navbar-border">
            <div class="container navbar-position">
                <!-- Logo -->
                <div class="logo">
                    <a id="logo-href" href="#">
                        <img id="logo" src="..\src\assets\logo.svg">
                    </a>
                </div>
                <CategoryList
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

                <!-- Navbar Buttons -->

                <div id="navbar-buttons" class="navbar-buttons">
                    <div class="navbar-circle navbar-ad">
                        <img id="navbar-ad-icon" src="..\src\assets\place ad.svg" class='navbar-icons navbar-ad-icon' alt="">
                    </div>


                    <div class="navbar-circle navbar-profile" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        <img id="navbar-profile-icon" src="..\src\assets\profile.svg" class='navbar-icons' alt="">
                    </div>

                </div>
            </div>
            
        </nav>
        
    </header>
</template>

<script>
 import UpperNavbar from '@/components/UpperNavbar'
 import CategoryList from '@/components/CategoryList'
 import SideBar from '@/components/Sidebar'
  export default{
    name: 'app',
     data(){
      return {categories:[{category: 'Для дома',
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
      SideBar
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

.navbar-buttons {
    width: 15%;
    display: flex;
    justify-content: center;
    position: relative;
    height: 100px;
}

.navbar-icons {
    margin: 0 auto;
}

.navbar-circle {
    display: flex;
    position: absolute;
    border-radius: 50%;
    border: solid 1px var(--color1);
    height: 42px;
    width: 42px;
    text-align: center;
    vertical-align: middle;
    align-items: center;
    margin-right: 20px;
    color: var(--color1);
    cursor: pointer;
    transition: 0.15s linear;
    top: 30%;
}

.navbar-ad {
    left: 0%;
}

.navbar-profile {
    right: 30%;
}

.hidden-text-ad {
    font-size: small;
    text-decoration: none;
    /* font-family: 'Montserrat', sans-serif; */
    color: white;
    white-space: nowrap;
    margin-left: auto;
    margin-right: auto;
}

@media(max-width: 1200px) {
    .navbar-profile {
        right: 0%;
    }
}

</style>