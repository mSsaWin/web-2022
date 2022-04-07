<template>
  <div id="app">
    <Header/>
  </div>
</template>

<script>

import Header from '@/views/Header'
  export default{
    name: 'app',
   
    components: {
      Header
    }
  }
</script>


<style>
@import url('@/css/fontello.css');


@import url('https://fonts.googleapis.com/css2?family=Source+Serif+Pro:wght@200;300;400;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Tenor+Sans&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,500;0,600;1,400;1,500&display=swap');
:root {
    --color1: #4A3930;
    --color2: #AEC5EB;
}

.color1 {
    color: var(--color1);
}

@media(max-width: 993px) {
    /* .upper-navbar-text{
        display: none;
    } */
    .container {
        margin: 0 auto;
        max-width: 950px;
    }
}

@media(max-width: 857px) {
    .upper-navbar-text {
        display: none;
    }
    .container {
        margin: 0 auto;
        max-width: 857px;
    }
}
</style>
