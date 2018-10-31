<template>
  <div class="goods">
      <goods-detail></goods-detail>
      <goods-car></goods-car>
      <goods-info></goods-info>
  </div>   
</template>

  <script>
  import goodsDetail from "./goodsdetail.vue"
  import goodsCar from "./goodscar.vue"
  import goodsInfo from "./goodsinfo.vue"
  export default {
    components: {
        goodsDetail,
        goodsCar,
        goodsInfo
    },
    data(){
      return{
  
      }
    },
    methods: {
 
    },

  
  }
  </script>
    
  <style scoped>

  </style>
    