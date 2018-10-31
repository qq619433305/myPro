<template>
  <div class="carousel" @mousemove="stopTimer" @mouseout="startTimer">
    <div class="carou_center">
      <ul>
        <li v-for="(item,index) of carouRight" :key="index"><img :src="item"></li>
      </ul>
    </div>
    <div class="carou_right">
      <img src="/static/img/carouRight4.jpg">
    </div>
    <div class="photo"><img :src="src" :class="imgClass"></div>
    <div class="arrows_left" @click="prev"><img src="/static/img/arrow-left.png"></div>    
    <div class="arrows_right" @click="next"><img src="/static/img/arrow-right.png"></div>
    <div class="select">
      <ul>
        <li v-for="(item,index) of img" :key="index"><i class="" @mouseover="selec(index)"></i></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      lino:0,
      src:'/static/img/carou1.jpg',
      img:['/static/img/carou1.jpg','/static/img/carou2.jpg','/static/img/carou3.jpg','/static/img/carou4.jpg','/static/img/carou5.jpg','/static/img/carou6.jpg','/static/img/carou7.jpg','/static/img/carou8.jpg'],
      carouRight:['/static/img/carouRight1.jpg','/static/img/carouRight2.jpg','/static/img/carouRight3.jpg'],
      imgClass:'show',
      timer:null
    }
  },
  methods:{
    prev(){
      this.imgClass='hide';
      this.lino--;
      if(this.lino<0) this.lino=7      
      this.selec.bind(this)(this.lino);
      setTimeout(function(){
        this.imgClass='show';
        this.src = this.img[this.lino];                      
      }.bind(this),600)
    },
    next(){
      this.imgClass='hide';
      this.lino++;
      if(this.lino>7) this.lino=0;        
      this.selec.bind(this)(this.lino);
      setTimeout(function(){
        this.src = this.img[this.lino];              
        this.imgClass='show';
      }.bind(this),600)
    },
    selec(index){
      var is = document.querySelectorAll(`.select i`);
      for(var item of is){
        item.className = ''
      }
      var i = document.querySelector(`.select li:nth-child(${index+1}) i`)
      i.className = 'selected';
      this.src = this.img[index];                      
    },
    setTimer(){
      return setInterval(function(){
        this.imgClass='hide';
        this.lino++;
        if(this.lino>7) this.lino=0;        
        this.selec.bind(this)(this.lino);
        setTimeout(function(){
          this.src = this.img[this.lino];              
          this.imgClass='show';
        }.bind(this),1000)
      }.bind(this),4000)
    },
    startTimer(){
      this.timer=this.setTimer.bind(this)()
    },
    stopTimer(){
      clearInterval(this.timer)
    }
  },
  mounted(){
      var i = document.querySelector(`.select li:nth-child(${this.lino+1}) i`)
      i.className='selected'
      this.startTimer.bind(this)()
  },
  destroyed(){
    clearInterval(this.timer)
  }
}

</script>

<style scoped>
.carousel{position: absolute;top:0;left:210px;}
.photo img{height: 407px;width: 520px;transition: all 1s;}
.photo .show{opacity: 1;}
.photo .hide{opacity: 0;}
.carousel .arrows_left{position: absolute;top: 180px;left: 60px;width: 24px;height: 50px;line-height: 45px;text-align: center;background-color: rgba(0,0,0,.2);cursor: pointer;}
.carousel .arrows_right{position: absolute;top: 180px;left: 450px;width: 24px;height: 50px;line-height: 45px;text-align: center;background-color: rgba(0,0,0,.2);cursor: pointer;}
.select{ position: absolute;left: 170px;bottom: 20px;font-size: 0;text-align: center;}
.select li{float: left;margin-left: 10px;}
.select i{transition: all .8s ease;position: relative;display: inline-block;width: 10px;height: 10px;margin-right: 1px;border: 2px solid #b9beba;border-radius: 50%;}
.select .selected{background: snow;border:0;box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.5);}
.carou_center{position: absolute;top: 0;left: 525px;}
.carou_center li{margin: 5px 5px 0;}
.carou_center li img{width: 210px;height:129px;}
.carou_right{position: absolute;top:5px;left: 750px;}
</style>

