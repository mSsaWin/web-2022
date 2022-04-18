<template>
<div class="profile-layout">
    <UpperNavbar/>
    <slot/>
    <Footer/>
  </div>
  
</template>

<script>
import UpperNavbar from '@/components/Header/components/UpperNavbar'
import Footer from '@/components/Footer/Footer'
export default {
    components:{
        UpperNavbar,
        Footer
    }
}
</script>

<style>

</style>