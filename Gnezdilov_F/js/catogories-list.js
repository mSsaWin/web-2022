const elements = document.getElementsByClassName('categories-item')

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('mouseover', showCategories);
    elements[i].addEventListener('mouseleave', hideCategories);
}

function showCategories() {
    if (this.children.length > 1) {
        this.children[0].style.background = '#252627';
        this.children[0].style.color = '#F8F9FA';
        this.children[0].style.boxShadow = '0 0 15px #252627';
        this.children[1].style.height = '1px';
        this.children[1].style.opacity = '1';
        this.children[1].style.overflow = 'visible';
    }
}

function hideCategories() {
    if (this.children.length > 1) {
        this.children[0].style.background = 'none';
        this.children[0].style.color = '#252627';
        this.children[0].style.boxShadow = 'none';

        this.children[1].style.height = '0';
        this.children[1].style.opacity = '0';
        this.children[1].style.overflow = 'hidden';
    }
}























// document.getElementById('nav').onmouseover = (event) => {
//     var target = event.target;
//     // console.log(event.target);
//     if (target.className == 'navbar-categories') {
//         var s = target.getElementsByClassName("inner-categories")[0];
//         console.log(s)
//         closeCategories();
//         s.style.display = 'block';
//     }
// }

// document.onmouseover = (event) => {
//     var target = event.target;
//     // console.log(event.target);
//     if (target.className != 'categories-btn' && target.className != 'inner-categories') {
//         closeCategories();
//     }
// }

// function closeCategories() {
//     var categories = document.getElementById('categories');
//     var inner_cat = document.getElementsByClassName('inner-categories');
//     for (var i = 0; i < inner_cat.length; i++) {
//         inner_cat[i].style.display = 'none';
//     }
// }