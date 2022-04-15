<template>
    <div class="bg-light offcanvas offcanvas-start shadow" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" v-bind="categoryTree()">
                    <div class="offcanvas-head d-flex align-items-center">
                        <router-link to='/' class="sidebar-logo">
                        <div class="sidebar-logo">
                            <img src="..\src\assets\logo.svg">
                        </div>
                        </router-link>
                        <div class="text-end">
                            <button type="button" class="btn-close text-reset text-end" data-bs-dismiss="offcanvas" aria-label="Закрыть"></button>
                        </div>
                    </div>
                    <div class="offcanvas-body" >
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
                                            <ul class="sidebar-text" >
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
        props: ['categories'],
        data(){
        return {
            tree: '',
            liTree:'',
            }
        },
        
        methods: {
            categoryTree(){
            setTimeout(()=>{
                this.tree = document.getElementById('tree');
                this.liTree = this.tree.querySelectorAll('li');
                let span = document.createElement('span');
                span.classList.add('start-hide-category');
                this.liTree[0].prepend(span);
                span.append(span.nextSibling);
                

                for (let i = 1; i < this.liTree.length; i++) {
                    let span = document.createElement('span');
                    if (this.liTree[i].parentNode.querySelector('ul'))
                        span.classList.add('start-hide-category');
                    this.liTree[i].prepend(span);
                    this.liTree[i].parentNode.hidden = true;
                    span.append(span.nextSibling);
                }
                this.tree.addEventListener('click', this.treeClick)}, 1)
                
            },
            treeClick(event){
                if (event.target.tagName != 'SPAN') return;

                let childrenContainer = event.target.parentNode.querySelector('ul');

                if (!childrenContainer) return;

                childrenContainer.hidden = !childrenContainer.hidden;

                if (childrenContainer.hidden) {
                    event.target.style.fontWeight = 'normal';
                    event.target.classList.add('start-hide-category');
                    event.target.classList.remove('start-show-category');
                } else {
                    event.target.style.fontWeight = 'bold';
                    event.target.classList.add('start-show-category');
                    event.target.classList.remove('start-hide-category');
                }
            }
                    
        }
        
    }
    
</script>

<style>


[class^="start-"]:before,
[class*=" start-"]:before {
    font-family: "fontello";
    font-style: normal;
    font-weight: normal;
    speak: never;
    display: inline-block;
    text-decoration: inherit;
    width: 1em;
    margin-right: .2em;
    text-align: center;
    font-variant: normal;
    text-transform: none;
    line-height: 1em;
    margin-left: .2em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.sidebar {
    width: 10px;
}

.logo-link{
    text-align: center;
}

.sidebar-logo {
    margin: 0 auto;
    padding: 0 auto;
}

.login {
    /* margin-bottom: 10px; */
    display: flex;
    justify-content: space-between;
}


/* .sidebar-ad {} */

.sidebar-buttons {
    display: flex;
}

.sidebar-circles {
    display: flex;
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
}

.sidebar-item {
    padding: 5px;
    margin-bottom: 3px;
    list-style-type: none;
    font-size: 20px;
    transition: all 0.5s ease 0s;
}

.sidebar-text {
    cursor: pointer;
    color: #252627;
    text-decoration: none;
}

.start-show-category::before {
    content: '\e806';
}

.start-hide-category::before {
    content: "\e805";
}
</style>