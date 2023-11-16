<template>
  <div>
    <HeaderComponent />
    <div class="main-content">
     <RouterView />
    </div>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import HeaderComponent from './components/HomeComponents/HeaderComponent.vue'
//import { RouterLink, RouterView } from 'vue-router'
</script>
<style scoped>

</style>
