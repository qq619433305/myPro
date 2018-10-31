<template>
  <section>
    <router-view></router-view>
  </section>  
</template>
  
<script>
export default {
  mounted(){
    this.$router.push('goods?id=0');
  }
}
</script>
  
<style scoped>
</style>