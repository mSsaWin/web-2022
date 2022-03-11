advBtn = document.querySelector('.navbar-ad');
profileBtn = document.querySelector('.navbar-profile');

console.log(advBtn);

advBtn.addEventListener('mouseover', () => {
    advBtn.style.width = '80%';
    advBtn.style.borderRadius = '25px';
    advBtn.style.border = 'solid 0px #008CF0';
    advBtn.style.background = '#008CF0';
    profileBtn.style.display = 'none';
    advBtn.innerHTML = '<span class="hidden-text-ad">Разместить <wbr>объявление</span>';
});

advBtn.addEventListener('mouseleave', () => {
    advBtn.style.width = '40px';
    advBtn.style.borderRadius = '50%';
    advBtn.style.border = 'solid 1px var(--color1)';
    advBtn.style.background = '';

    advBtn.innerHTML = '<img src="../Gnezdilov_F/img/place ad.svg" class="navbar-icons" alt="">';
    profileBtn.style.display = 'flex';
})

profileBtn.addEventListener('mouseover', () => {
    profileBtn.style.width = '50%';
    profileBtn.style.borderRadius = '25px';
    profileBtn.style.border = 'solid 0px #00a550';
    profileBtn.style.background = '#00a550';
    advBtn.style.display = 'none';
    profileBtn.innerHTML = '<span class="hidden-text-ad">Войти</span>';

});

profileBtn.addEventListener('mouseleave', () => {
    profileBtn.style.width = '40px';
    profileBtn.style.borderRadius = '50%';
    profileBtn.style.border = 'solid 1px var(--color1)';
    profileBtn.style.background = '';
    profileBtn.innerHTML = '<img id="navbar-profile-icon" src="../Gnezdilov_F/img/profile.svg" class="navbar-icons" alt="">';
    advBtn.style.display = 'flex';
})