<template>
  <div class="sec_center2 clearfix">
      <div class="sec_title">
        <h2 v-text="sec_title[0]"></h2>
        <div class="title_right">
          <ul>
            <li v-for="(item,index) of sec_title.slice(1)" :key="index"><a href="#"  v-text="item"></a></li>
          </ul>
        </div>
      </div>
      <div class="sec_left">
        <div><img :src="sec_left[0]" alt=""></div>
      </div>
      <div class="sec_center">
        <div><img :src="sec_left[1]"></div>
        <ul class="pro">
          <li v-for="(item,index) of sec_box" :key="index" class="sec_box" @click.prevent="gotodesc($event,item.img,item.title,item.price)">
            <div><img :src="item.img"></div>
            <a :title="item.title" href="#" v-text="item.title"></a>
            <span>售价： ¥{{item.price}}</span>
            <span class="sec_btn">立即抢购</span>   
          </li>  
        </ul>   
      </div>
      <div class="sec_right">
        <img v-for="(item,index) of secs_right
        " :src="item" :key="index">
      </div>
    </div>
</template>

<script>
export default {
  props: ['sec_title', 'sec_left', 'sec_box', 'secs_right'],
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
.clearfix::after{content:'';display:inline-block;clear:both;}
a{color: #000;text-decoration: none;}
.sec_center2{width: 1200px;margin:10px auto 20px;overflow: hidden;}
.sec_title {margin: 1.5rem 0;}
.sec_title h2{height: 20px;line-height: 1rem;font-size: 20px;color: #000;border-left: 6px solid #60aeff;padding-left: 6px;display: inline-block;}
.title_right{float: right;}
.title_right ul li{height: 15px;line-height: 15px;top: 3px;padding: 0 17px;border-right: 1px solid #e3e3e3;float: left;}
.title_right ul li:last-child{border: 0;}
.title_right ul li a{color: grey;font-size: 15px;}
.sec_left{width: 240px;height: 499px;float: left;}
.sec_center{width: 720px;height: 499px;float: left;position: relative;}
.sec_right{width: 239px;float: left;}
.sec_right img{width: 118px;height: 99px;}
.pro{color: #292929;float: left;margin-bottom: 5px;border-left: 1px solid #f2f2f2;overflow: hidden;}
.sec_box{height:248px;width:239px;padding: 30px 14px 0;background: #fff;float: left;border-left: 1px solid #f2f2f2;}
.sec_box div:first-child{width:100%;text-align: center;}
.sec_box div img{width: 120px;cursor: pointer;}
.sec_box a{width: 100%;margin:14px 0 0 9px;display: inline-block;;font-size: 12px;text-overflow: ellipsis;white-space: nowrap;overflow: hidden;cursor: pointer;}
.sec_box>span{font-size: 12px;color: #8e8e8e;margin: 0 0 5px 10px;display:block;cursor: pointer;}
.sec_box .sec_btn{color: #fff;font-size: 14px; background: #60aeff;padding: 6px 22px;margin-bottom: 16px;cursor: pointer;display: inline-block;}
</style>
