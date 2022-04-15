<template>
<div>
    <Header/>
    <Main/>
    <Footer/>
</div>
    
</template>

<script>

import Header from '@/components/Header/Header'
import Main from '@/components/Main/Main'
import Footer from '@/components/Footer/Footer'


  export default{  
    name: 'HomeView',
    components: {
      Header,
      Main,
      Footer
    }
  }
</script>