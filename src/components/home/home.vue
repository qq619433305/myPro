<template>
  <div class="home">
    <banner></banner>
    <goods></goods>
    <news></news>
  </div>  
</template>

<script>
import banner from './banner'
import goods from './goods'
import news from './news'

export default {
  components: {
    banner,
    goods,
    news
  }
}
</script>
  
<style scoped>
</style>
