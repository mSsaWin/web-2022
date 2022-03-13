logoHref = document.getElementById('logo-href')
categories = document.getElementById('categories');
search = document.getElementById('search-field');
navBtn = document.getElementById('navbar-buttons')

if (window.screen.availWidth <= 800) {
    logoHref.innerHTML = '<img id="logo" src="img/burger_menu.png" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">';
    logoHref.href = '#';
    logo = document.getElementById('logo');
    logo.style.marginRight = '10px';

    categories.style.display = 'none';
    navBtn.style.display = 'none';
    search.style.width = '90%';
}

window.addEventListener('resize', headerEditor);

function headerEditor() {
    if (this.screen.availWidth <= 800) {
        logoHref.innerHTML = '<img id="logo" src="img/burger_menu.png" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">';
        logoHref.href = '#';

        logo = document.getElementById('logo');
        categories.style.display = 'none';
        navBtn.style.display = 'none';
        search.style.width = '90%';
        logo.style.marginRight = '10px';

    } else if (this.screen.availWidth > 800) {
        logoHref.innerHTML = '<img id="logo" src="img/Лого.svg">'
        logoHref.href = 'index.html';

        categories.style.display = 'block';
        navBtn.style.display = 'block';
        search.style.width = '53%';
        logo.style.marginRight = '0px';

    }

}