<template>
<div class="product-layout">
  <Header/>
  <slot/>
  <Footer/>
</div>
</template>

<script>
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
export default {
    name: 'DefaultLayout',
    components: {
      Header,
      Footer
    }
}
</script>

<style>

</style>