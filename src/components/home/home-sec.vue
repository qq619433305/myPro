<template>
  <div class="home-sec">
    <goods></goods>
    <sec-top></sec-top>
    <sec-center></sec-center>
    <side-left></side-left>
  </div>  
</template>
  
<script>
import goods from './goods'
import secTop from './sec-top'
import secCenter from './sec-center'
import sideLeft from './side-left'

export default {
  components: {
    goods,
    secTop,
    secCenter,
    sideLeft   
  }
}
</script>
  
<style scoped>
</style>
