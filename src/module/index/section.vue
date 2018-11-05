<template>
  <section>
    <router-view></router-view>
  </section>  
</template>
  
<script>
export default {
  mounted(){
    this.$router.push('home');
  }
}
</script>

<style scoped>
</style>