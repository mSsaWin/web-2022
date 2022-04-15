<template>
    <!-- Navbar Buttons -->

                <div id="navbar-buttons" class="navbar-buttons" @mouseover="animateBtn('', '')">
                    <div class="navbar-circle navbar-ad" data-bs-toggle="tooltip" data-bs-placement="right" title="Разместить объявление">
                        <img id="navbar-ad-icon" :src="advBtnImg" class='navbar-icons navbar-ad-icon' alt="">
                    </div>

                    <div class="navbar-circle navbar-profile" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" data-bs-placement="right" title="Войти">
                        <img id="navbar-profile-icon" :src="profileBtnImg" class='navbar-icons' alt="">
                    </div>

                </div>
                
</template>

<script>
    import advBtnImg from '@/assets/placeAdv.svg'
    import profileBtnImg from '@/assets/profile.svg'
    export default{
        data(){
            return{
                advBtnImg,
                profileBtnImg
            }
        },
        methods: {
            
            animateBtn(advBtn, profileBtn){
                
                advBtn = document.querySelector('.navbar-ad');
                profileBtn = document.querySelector('.navbar-profile');
                
                advBtn.addEventListener('mouseover', () => {
                    advBtn.style.width = '80%';
                    advBtn.style.borderRadius = '25px';
                    advBtn.style.border = 'solid 0px #008CF0';
                    advBtn.style.background = '#008CF0';
                    profileBtn.style.display = 'none';
                    advBtn.style.boxShadow = '0 0 10px #008CF0';
                        
                    setTimeout(() => {
                        advBtn.style.width = '40px';
                        advBtn.style.borderRadius = '50%';
                        advBtn.style.border = 'solid 1px var(--color1)';
                        advBtn.style.background = '';

                        profileBtn.style.display = 'flex';
                        advBtn.style.boxShadow = 'none';
                    }, 5000);
                });

                advBtn.addEventListener('mouseleave', () => {
                    advBtn.style.width = '40px';
                    advBtn.style.borderRadius = '50%';
                    advBtn.style.border = 'solid 1px var(--color1)';
                    advBtn.style.background = '';

                    profileBtn.style.display = 'flex';
                    advBtn.style.boxShadow = 'none';
                })

                profileBtn.addEventListener('mouseover', () => {
                    profileBtn.style.width = '50%';
                    profileBtn.style.borderRadius = '25px';
                    profileBtn.style.border = 'solid 0px #00a550';
                    profileBtn.style.background = '#00a550';
                    advBtn.style.display = 'none';
                    profileBtn.style.boxShadow = '0 0 10px #00a550';

                    setTimeout(() => {
                        profileBtn.style.width = '40px';
                        profileBtn.style.borderRadius = '50%';
                        profileBtn.style.border = 'solid 1px var(--color1)';
                        profileBtn.style.background = '';
                        advBtn.style.display = 'flex';
                        profileBtn.style.boxShadow = 'none';
                    }, 5000);

                });

                profileBtn.addEventListener('mouseleave', () => {
                    profileBtn.style.width = '40px';
                    profileBtn.style.borderRadius = '50%';
                    profileBtn.style.border = 'solid 1px var(--color1)';
                    profileBtn.style.background = '';
                    advBtn.style.display = 'flex';
                    profileBtn.style.boxShadow = 'none';
                })
            },
        }
    }
</script>


<style>
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