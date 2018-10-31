<template>
  <div class="sec_top clearfix">
      <img v-for="(item,index) of topimg" :src="item" :key="index">
  </div>
</template>

<script>
export default {
  data () {
    return {
      topimg: ['/static/img/top1.jpg','/static/img/top2.png','/static/img/top3.png','/static/img/top4.jpg','/static/img/top5.jpg','/static/img/top6.png','/static/img/top7.jpg','/static/img/top8.png',]
    }
  }
}
</script>

<style scoped>
.sec_top{width: 1200px;margin:0 auto;overflow: hidden;}
.sec_top img{float: left;}
</style>
