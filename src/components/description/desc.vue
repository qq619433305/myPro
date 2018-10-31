<template>
  <div class="desc">
    <drop-list></drop-list>
    <div class="title">
      <span>首页</span>
      <span class="gl">></span>
      <span>手机通讯</span>
      <span class="gl">></span>
      <span>iOS</span>
    </div>
    <desc-top :routeParams="routeParams"></desc-top>
    <desc-bottom></desc-bottom>
  </div>  
</template>
  
<script>
import descTop from './desc-top'
import descBottom from './desc-bottom'
import dropList from '../home/drop-list'

export default {
  data(){
    return{
      routeParams:null
    }
  },
  components:{
    descTop,
    descBottom,
    dropList
  },
  mounted(){
    this.routeParams = this.$route.params
  }
}
</script>
<style scoped>
.desc{width: 1200px;margin: 0 auto;}
.title .gl{margin: 0 4px;}
.title{padding: 17px 0;font-size: 14px}
.title span{margin: 0 4px;color: #5f5f5f;}
</style>