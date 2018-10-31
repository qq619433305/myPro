<template>
  <li @mouseover="getDetails" @click.prevent="goto(index)">
      <a href="#">
          <i :style="styles[index]"></i>
          <span v-text="content"></span>
        </a>
  </li>
</template>

<script>
export default {
  data(){
    return{
      position:['0 0','-150px -50px','-22px 0','-44px 0','-66px 0','-180px -96px','-100px -96px','-110px 0','-100px -50px','-120px -96px'],
      styles:[]
    }
  },
  props: ['content', 'index'],
  methods: {
    getDetails(){
      this.$emit('changeDetails',this.index)
    },
    getStyle(){
        for(var item of this.position){
          var style = `background-position: ${item}`
          this.styles.push(style)
        }
      },
    goto(index){
      var pushObj={name:'detail',params:{}}
      pushObj.params.listid = index
      scrollTo(0,0)      
      this.$router.push(pushObj)
    }
  },
  mounted() {
    this.getStyle.bind(this)()
  },
}
</script>

<style scoped>
li{background: #3a3a3a;border-top: 1px solid #3f3f3f;padding: 0 15px;}
li:hover{background: #3f3f3f;}
li a{color: #fff;height: 40px;line-height: 40px;display: block;font-size: 14px;position: relative;padding-left: 73px;text-decoration: none;margin: 0 -15px;border-top: 0;}
li:last-child a{height: 36px;line-height: 36px;}
li a i{width: 20px;height: 20px;position: absolute;top: 50%; margin-top: -10px;left: 39px;background: url(/static/img/fs-left.png) no-repeat;display: inline-block; background-position: 0 0;}
</style>
