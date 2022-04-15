<template>
    <ul id="categories" class="navbar-categories">
        <li class="nav-item dropdown dropdown-mega position-static">
            <div class="categories-btn" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside"><span>Категории<i class="icon-down-open"></i></span></div>
            <div class="dropdown-menu inner-categories mt-4">
                <div class="mega-content px-4">
                    <div class="container">
                        <div class="row">
                            <div v-for="category in categories" :key="category.id" class="col-12 col-sm-6 col-md-4 col-lg-2 py-4" >
                                <h5><a class="categories-text" href="#">{{category.category}}</a></h5>
                                <ul class="categories-text">
                                    <li v-for="subcategory in category.subCategory" :key="subcategory">
                                        <a class="categories-text" href="#"><span>{{subcategory}}</span></a>
                                    </li>
                                </ul>

                            </div>
                        
                        </div>
                    </div>
                </div>
            </div>
        </li>
    </ul>
</template>

<script>
    export default {
        props: ['categories']
    }
</script>

<style>
.navbar-categories {
    width: 120px;
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.categories-btn {
    display: flex;
    color: #252627;
    border: 1px solid #252627;
    border-radius: 7px;
    text-align: center;
    vertical-align: middle;
    align-items: center;
    height: 38px;
    width: 100%;
    transition: all 0.5s ease 0s;
    cursor: pointer;
}

.categories-btn:hover {
    background-color: #252627;
    color: #F8F9FA;
    box-shadow: 0 0 15px #252627;
}

.categories-btn span {
    margin: 0 auto;
    padding: 0 auto;
}

.inner-categories {
    background-color: #f8f9fa;
    border: none;
    border-radius: 0px;
    box-shadow: 5px 0 5px -5px #d4d4d4, 0 5px 5px -5px #d4d4d4, -5px 0 5px -5px #d4d4d4;
    width: 100%;
    margin: 0;
    padding: 0;
}

.categories-text {
    list-style-type: none;
    text-decoration: none;
    color: #252627;
    padding: 0;
}
</style>