<template>
  <div class="side_left hide">
      <ul>
        <li v-for="(item,index) of text" :key="index" clik="0" class="off" @mouseover="toggleOn(index)" @mouseout="toggleOff(index)" @click.prevent="gotolist(index)">
          <a href="#" :class="classes[index]"></a>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      side_left:{},
      lis:[],
      text:['手机','电脑','相机','数码','运动','钟表','美妆','奢品'],
      fclasses:['fph','fco','fca','fdi','fsp','fzb','fbe','fsh'],
      classes:['ph','co','ca','di','sp','zb','be','sh']
    }
  },
  methods:{
    toggleOn(index){
      this.lis[index].className = `on ${this.fclasses[index]}`;
      this.lis[index].getElementsByTagName("a")[0].innerHTML = this.text[index];

    },
    toggleOff(index){
      var bool = this.lis[index].getAttribute('clik');
      if(bool=='0'){
        this.lis[index].className = 'off'
        this.lis[index].getElementsByTagName("a")[0].innerHTML = '';
      }
    },
    myscrollTo(y){
      var gotoTop = function(){
        var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
        if(Math.abs(currentPosition-y)>10){
          if (currentPosition > y) {
          currentPosition -= 10;          
          window.scrollTo(0, currentPosition);
          }
          else{
            currentPosition += 10;          
            window.scrollTo(0, currentPosition);
          }
        }
        else{
          window.scrollTo(0, y);
          clearInterval(timer);
        }
      } 
      var timer=setInterval(gotoTop,1);        
    },
    gotolist(index){
      this.myscrollTo.bind(this)(`${1190+index*595}`)   
      for(var i=0;i<this.lis.length;i++){
        if(index==i){
          this.lis[i].setAttribute('clik',1)
        }
        else{
          this.lis[i].setAttribute('clik',0)
          this.toggleOff.bind(this)(i)          
        }
      }
    },
    handleScroll(){
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      if(scrollTop>520){
        this.side_left.className = 'side_left show'
      }
      else{
        this.side_left.className = 'side_left hide'
      }
    }
  },
  mounted(){
    this.side_left = document.querySelector('.side_left')
    this.lis = document.querySelectorAll('.side_left li');
    window.addEventListener('scroll', this.handleScroll);
    this.toggleOn.bind(this)(0)       
  }
}
</script>

<style scoped>
.hide{display:none;}
.show{display: block;}
.side_left{width:46px;height:375px;position: fixed;left: 40px;top: 80px;background: #fff;opacity: .8;}
.side_left a{font-size: 14px;line-height: 47px; width: 28px;height: 47px;display:block;color: #6ab3ff;border-bottom: 1px solid #f8f8f8;margin: 0 auto;text-decoration: none;}
.off a{background: url(/static/img/sideLeft.png) top center no-repeat;}
.fph a,.fco a,.fca a,.fdi a,.fsp a,.fzb a,.fbe a,.fsh a{border: 0;color:#fff;}
.fph{background: #4a9df4;}
.fco{background: #61d4e3;}
.fca{background: #80e2a5;}
.fdi{background: #b8e237;}
.fsp{background: #f8cc52;}
.fzb{background: #ff7195;}
.fbe{background: #ff7d76;}
.fsh{background: #ff945a;}
.off .ph{background-position: 0px 0px;}
.off .co{background-position:-32px 0px;}
.off .ca{background-position:-64px 0px;}
.off .di{background-position:-96px 0px;}
.off .sp{background-position:-128px 0px;}
.off .zb{background-position:-160px 0px;}
.off .be{background-position:-192px 0px;}
.off .sh{background-position:-226px 0px;}
</style>
