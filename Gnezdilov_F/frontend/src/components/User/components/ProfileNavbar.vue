<template>
  <div class="container">
      <div @click="$router.go(-1)" class="navbar">
            <p><span class="material-icons">arrow_back_ios</span>Вернуться</p>
      </div>
      <div class="navbar">
          <p><span class="material-icons">logout</span> Выйти</p>
      </div>
      
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .container{
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
        /* height: 22px; */
        /* padding: 0; */
    }
    .navbar{
        cursor: pointer;
        margin: 0;
        padding: 0;
        font-size: 13px;
        color: var(--color1);
        border: 1px solid var(--color1);;
        border-radius: 8px;
        width: 100px;
        text-align: center;
        
    }
    .navbar p{
        margin: 0 auto;
        padding: 0 auto;
    
    }
    .navbar span{
        font-size: 10px;
    }
</style>