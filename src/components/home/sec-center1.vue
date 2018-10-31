<template>
  <div class="sec_center">
      <div class="sec_title">
        <h2>限时秒杀</h2>
        <span>每日上新限量秒杀</span>     
        <a href="#">更多</a>
      </div>
      <div class="sec_details">
        <ul>
          <li class="pro"  v-for="(item,index) of details" :key="index">
            <div class="pro_box"  @click.prevent="gotodesc($event,item.img,item.title,item.price)">
              <div><img :src="item.img"></div>
              <a :title="item.title" href="#">{{item.title}}</a>
              <span>疯抢价： ¥{{item.price}}</span>
              <div class="pro_price">
                <span class="pl">月供：¥{{item.yg}} <em>x36</em></span>
                <span class="pr"><i class="arrows"></i>直降 ¥{{item.reduce}}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      details:[
          {img:'/static/img/dt1.jpg',title:'【海外直邮】Shiseido/资生堂安热沙防晒霜防水防紫外线金瓶安耐晒防晒霜60ml',price:199,yg:8.24,reduce:'36.00'},
          {img:'/static/img/dt2.jpg',title:'Dickies夏季新款男士休闲皮鞋透气软底鞋子男韩版潮流板鞋男青年161XG05AP02',price:159,yg:6.58,reduce:'43.00'},
          {img:'/static/img/dt3.jpg',title:'喆堃珠宝 银耳钉韩版时尚女款耳饰 樱花小清新气质耳钉 镶钻耳坠 送女友',price:39,yg:1.62,reduce:'30.00'},
          {img:'/static/img/dt4.jpg',title:'LINGWUZHE领舞者时尚休闲潮鞋男生舒适潮搭运动鞋气垫跑步休闲鞋  跑步鞋小白鞋SC666',price:99,yg:4.10,reduce:'40.00'},
          {img:'/static/img/dt5.jpg',title:'现代/HYUNDAI 迷你单桶洗衣机 XPB45-298 4.5公斤半自动波轮迷你洗衣机 沥水',price:256,yg:11.13,reduce:'32.00'},
        ]
    }
  },
  methods:{
    gotodesc(e,imgSrc,title,price){
      if(e.target.nodeName=="IMG"||e.target.nodeName=="A"||e.target.nodeName=="SPAN"){
        var pushObj={name:'desc',params:{}}
        pushObj.params.imgSrc = imgSrc
        pushObj.params.title = title
        pushObj.params.price = price
        scrollTo(0,0)      
        this.$router.push(pushObj)
      }
    }
  }
}
</script>

<style scoped>
a{color: #000;text-decoration: none;}
.sec_center{width: 1200px;margin:0 auto;overflow: hidden;}
.sec_title {margin: 1.5rem 0;}
.sec_title h2{height: 20px;line-height: 1rem;font-size: 20px;color: #000;border-left: 6px solid #60aeff;padding-left: 6px;display: inline-block;}
.sec_title span{background: #fe4979;margin-left: 10px;color: #fff;height: 22px;line-height: 22px;border-radius: 4px;
padding:2px 5px;font-size: 15px;}
.sec_title a{float:right;cursor: pointer;margin-right: 10px;color: grey;font-size: 15px;}
.sec_details{overflow: hidden;}
.pro{height:275px;width:240px;color: #292929;float: left;margin-bottom: 5px;border-left: 1px solid #f2f2f2;}
.pro_box{padding: 30px 14px 0;background: #fff;}
.pro_box div:first-child{height:140px;width:100%;text-align: center;}
.pro_box div img{width: 140px;cursor: pointer;}
.pro_box a{width: 100%;margin:14px 0 10px;display: inline-block;;font-size: 14px;text-overflow: ellipsis;white-space: nowrap;overflow: hidden;text-align: center;cursor: pointer;}
.pro_box>span{font-size: 12px;color: #8e8e8e;margin: 0 0 5px 10px;display:block;cursor: pointer;}
.pro_price{height: 35px;line-height: 35px;font-size: 15px;color: #fff;background: #ff91b0;position: relative;margin: 0 -15px;padding-left: 20px;cursor: pointer;}
.pro_price .pl{width: 103px;display: inline-block;}
.pro_price .pl em{font-size: 12px;}
.pro_price .pr{width:118px;height: 35px;background-color: #ff7ea2;padding: 0 10px 0 0px;position: absolute;text-align: center;}
.pro_price .arrows{width: 0;height: 0;overflow: hidden;font-size: 0;display: inline-block;border-width: 18px 9px;border-color: transparent transparent transparent #ff91b0;border-style: dashed dashed dashed solid;position: absolute;left:0px;}
</style>
