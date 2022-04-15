<template>
<div>
    <Header/>
    <Product/>
    <Footer/>
</div>
    
</template>

<script>

import Header from '@/components/Header/Header'
import Product from '@/components/Product/Product'
import Footer from '@/components/Footer/Footer'


  export default{  
    name: 'ProductView',
    components: {
      Header,
      Product,
      Footer
    }
  }
</script>