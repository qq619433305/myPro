<template>
  <div class="desc_top">
    <div class="top_left">
      <div class="desc_pic">
        <div class="image">
          <img v-if="routeParams" :src="routeParams.imgSrc" alt="">
        </div>
        <div class="sel">
          <a href="#" class="lf"></a>
          <div class="pic_ul">
            <ul>
              <li v-for="(item,index) of imgs" :key="index"><img :src="item" @mouseenter="toggleImg(index)"></li>
            </ul>
          </div>
          <a href="#" class="lg"></a>
        </div>
      </div>
      <desc-top-box :routeParams="routeParams"></desc-top-box>
    </div>
    <div class="top_right">
      <h3 v-text="tr_other[0]"></h3>
      <div class="tr_ul">
        <ul>
          <li v-for="(item,index) of imgs" :key="index"><i></i>{{tr_txt[index]}}</li>
        </ul>
      </div>
      <div class="online_tip">
        <div><a></a></div>
        <div>
          {{tr_other[1]}}<br>
          {{tr_other[2]}}
        </div>
      </div>
      <div class="store">
        <a href="" v-text="tr_other[3]"></a>
        <a href="" v-text="tr_other[4]"></a>
      </div>
    </div>
    <div></div>
  </div>  
</template>
  
<script>
import descTopBox from './desc-top-box'
export default {
  components:{
    descTopBox
  },
  data(){
    return{
      src:'/static/img/desc/tl1.jpg',
      imgs:['/static/img/desc/tl1.jpg','/static/img/desc/tl2.jpg','/static/img/desc/tl3.jpg','/static/img/desc/tl4.jpg'],
      tr_txt:['提前还款免服务费','正品保证','闪电发货','不支持7天无理由退货'],
      tr_other:['分期乐Apple产品专营店','联系商家','09:00 - 21:00','收藏店铺','进入店铺']
    }
  },
  props:['routeParams'],
  methods:{
    toggleImg(index){
      this.src = this.imgs[index]
    }
  },
  mounted(){
  }
}
</script>
<style scoped>
.desc_top{width: 1198px;border: 1px solid #e2e2e2;background-color: #fff;padding-bottom: 33px;margin-bottom: 15px;overflow: hidden}
.top_left{width: 1000px;float: left;}
.desc_pic{float: left;width: 374px;position: relative;}
.image{width: 314px;overflow: hidden;vertical-align: middle;margin: 25px auto;text-align: center;}
.image img{vertical-align: middle;height: 314px;}
.sel{padding: 0 35px;position: relative;margin-bottom: 17px;}
.sel>a{height: 52px;width: 11px;overflow: hidden;position: absolute;top: 0;
background: url(/static/img/desc/desc_icon.jpg) no-repeat;display: inline-block;}
.sel .lf{background-position: 0 0;left: 15px;}
.sel .lg{background-position: -18px 0;right: 15px;}
.pic_ul{width: 304px;overflow: hidden;height: 52px;position: relative;}
.pic_ul ul{position: absolute;top: 0;left: 0;border: 0;}
.pic_ul ul li{float: left;border: 1px solid #f0f0f0;width: 50px;height: 50px;margin: 0 10px;}
.pic_ul ul li img {width: 50px;height: 50px;}
.top_right{width: 191px;position: relative;font-size: 14px;padding: 30px 15px 0 0;float: right; color: #5f5f5f;}
.top_right>h3{font-size: 17px;font-weight: 500; padding-bottom: 20px; }
.tr_ul{padding: 22px 0 15px;border-top: 1px dotted #e4e4e4;border-bottom: 1px dotted #e4e4e4;}
.tr_ul li{margin-bottom: 8px;font-size: 14px;}
.tr_ul li i{width: 18px;height: 18px;position: relative;top: 4px;display: inline-block;
margin-right: 10px;background: url(/static/img/desc/tr_icon.jpg) no-repeat;}
.tr_ul li:nth-child(1) i{background-position: -108px 0;}
.tr_ul li:nth-child(2) i{background-position: 0 0;}
.tr_ul li:nth-child(3) i{background-position: -90px 0;}
.tr_ul li:nth-child(4) i{background-position: -270px 0;}
.online_tip{overflow: hidden;padding: 27px 0 24px;border-bottom: 1px dotted #e4e4e4;}
.online_tip a{position: relative;display: inline-block;top: 2px;width: 36px;height: 36px;
background: url(/static/img/desc/tip_icon.jpg) no-repeat;background-position: 0 0;}
.online_tip>div{float: left;overflow: hidden;margin-right: 20px}
.store{padding: 26px 0;text-align: center;border-bottom: 1px dotted #e4e4e4;}
.store a{display: inline-block;width: 70px;height: 22px;margin: 0 5px;line-height: 22px;
text-align: center;font-size: 12px;color: #b3b7be;border-radius: 3px;  background-color: #ededed;}
</style> 