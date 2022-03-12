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