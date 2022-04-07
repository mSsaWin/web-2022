<template>
    <div class="bg-light offcanvas offcanvas-start shadow" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-head d-flex align-items-center">
                        <div class="sidebar-logo">
                            <img src="..\src\assets\logo.svg" class="text-center">
                        </div>
                        <div class="text-end">
                            <button type="button" class="btn-close text-reset text-end" data-bs-dismiss="offcanvas" aria-label="Закрыть"></button>
                        </div>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="sidebar-list">
                            <li class="sidebar-item" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                <a class="sidebar-text">
                                    <h4>Войти</h4>
                                </a>
                            </li>
                            <li class="sidebar-item">
                                <a class="sidebar-text">
                                    Разместить объявление
                                </a>
                            </li>
                            <div id="tree">
                                <li class="sidebar-item">Категории
                                    <ul id="category-tree">
                                        <li class="sidebar-item" v-for="category in categories" :key="category">
                                            {{category.category}}
                                            <ul class="sidebar-text">
                                                <li class="sidebar-item" v-for="subcategory in category.subCategory" :key="subcategory">
                                                    <a class="sidebar-text" href="#"><span>{{subcategory}}</span></a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </div>

                        </ul>
                    </div>

    </div>
</template>

<script>
    export default {
        props: ['categories']
    }
</script>

<style scoped>

</style>