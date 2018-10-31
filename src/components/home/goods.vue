<template>
  <div class="goods">
      <div class="wrapper game">      
        <h1 class="title">探索游戏系统</h1>
        <div class="row">
          <a class="goods-item col-md-4 col-xs-12" href="#" v-for="(item,index) in game" :key="index">
            <img :src="item.img">
            <h5 class="mt-2">{{item.title}}</h5>
            <span>{{item.price}}</span>   
          </a> 
        </div>    
      </div>
       <div class="wrapper amiibo mt-5">      
        <h1 class="title">新amiibo发布</h1>
        <div class="row">
          <a class="goods-item col-md-3 col-xs-12" href="#" v-for="(item,index) in amiibo" :key="index">
            <img :src="item.img">
            <h5>{{item.name}}</h5>
            <span>{{item.date}}</span>  
          </a> 
        </div>    
      </div>
    </div>
</template>

<script>

export default {
  components: {

  },
  data(){
    return{
      game:[
        {img:"/static/img/section/home/tg1.jpg",title:"任天堂 Switch",price:"$299.99"},
        {img:"/static/img/section/home/tg2.jpg",title:"任天堂 3DS",price:"$199.99"},
        {img:"/static/img/section/home/tg3.jpg",title:"任天堂 2DS",price:"$79.99"},
        ],
      amiibo:[
        {img:"/static/img/section/home/tg4.png",name:"林克",date:"09/01/2017"},
        {img:"/static/img/section/home/tg5.png",name:"马里奥（婚礼装）",date:"10/27/2017"},
        {img:"/static/img/section/home/tg6.png",name:"桃子（婚礼装）",date:"10/27/2017"},
        {img:"/static/img/section/home/tg7.png",name:"米法公主",date:"10/27/2018"}
        ],
    }
  },
  methods:{
  }
}
</script>

<style scoped>
.goods{background: #fff;overflow: hidden;}
.goods .wrapper{text-align: center;padding: 30px 0;}
.goods img{max-width: 100%;}
.goods .goods-item{color:#777}
.goods .goods-item:hover{color:#3aa4ff}
.goods .goods-item img{transition:all 150ms linear;}
.goods .goods-item:hover img{transform:scale(1.1, 1.1)}
/*

div#platforms ul li a:hover img

*/


</style>
