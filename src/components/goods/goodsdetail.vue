<template>
    <div class="goodsdetail mt-5">
      <div class="wrapper row">
         <div class="goods-left col-5 p-0" id="box">
          <div class="goods-big mb-3">
            <div class="zoom" @mousemove="myzoom($event)" @mouseout="myzoomOut" id="small-box">
              <img :src="goodslist[this.$route.query.id][gameSpec].imglist[imgIndex]" class="w-100" id="small-img">
              <div class="float-box" id="float-box" ></div>
            </div>
            <div class="zoomup" id="big-box">
                  <img :src="goodslist[this.$route.query.id][gameSpec].imglist[imgIndex]" id="big-img">
            </div>
          </div>
          <div class="goods-list">
            <ul>
              <li class="p-1" v-for="(item,index) of goodslist[this.$route.query.id][gameSpec].imglist" :key="index" 
              @mouseenter="getImgIndex(index)" :class="imgIndex == index? 'active' : '' "> 
                <img :src="item"  class="w-100">
              </li>
            </ul>
          </div>
        </div>

        <div class="goods-right  col-7">
          <h4 class="mb-3">{{goodslist[this.$route.query.id][gameSpec].title}}</h4>
          <div class="price pl-3 mb-3">
            <div>
              <b>官方售价：</b>
              <span class="pro-price">{{goodslist[this.$route.query.id][gameSpec].price}}</span>
            </div>
            <div class="promise mt-2">
              <b>服务承诺：</b>
              <span>*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货</span>  
            </div>            
          </div>
          <p class="ml-1 mb-2">
            <b>客服：</b>
            <span>联系客服</span>
          </p>
          <div>
            <div class="row mb-3 ml-1">
              <b>规格：</b>
              <div class="col-10 row spec">
                <a href="#" class="col-4 mr-3 text-center" v-for="(item,index) of goodslist[this.$route.query.id]"
                 :key="index"  @click.prevent="getSpec(index)" :class="(gameSpec==index)?'active':''">
                  {{item.spec}}</a>
              </div>
            </div>
            
            <div class="count mb-4 ml-1">
              <b>数量：</b>
              <button class="sub" @click="getNumber('sub')">-</button>
              <input class="number" type="text" v-model="number">
              <button class="add" @click="getNumber('add')">+</button>              
            </div>
            <div class="d-flex justify-content-center">
              <button type="button" class="btn btn-lg btn-primary mr-4">立即购买</button>
              <button type="button" class="btn btn-lg btn-warning">加入购物车</button>
            </div>
          </div>
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
        show:false,
        number:1,
        gameSpec:0,
        imgIndex:0,
        goodslist:[
           [
            {
            imglist:[
              "/static/img/section/goods/sg1.jpg",
              "/static/img/section/goods/sg2.jpg",
              "/static/img/section/goods/sg3.jpg",
              "/static/img/section/goods/sg4.jpg"
            ],
            title:"任天堂（Nintendo Switch 游戏机 掌机 ns 掌上游戏机便携 Switch NS 彩色",
            price:"￥2199.00",
            spec:"Switch NS彩色",
            },
            {
            imglist:[
              "/static/img/section/goods/sg5.jpg",
              "/static/img/section/goods/sg6.jpg",
              "/static/img/section/goods/sg7.jpg",
              "/static/img/section/goods/sg8.jpg"
            ],
            title:"任天堂（Nintendo）Switch 游戏机 掌机 ns 掌上游戏机便携 Switch NS 黑色",
            price:"￥2199.00",
            spec:"Switch NS黑色",
            }
          ],
          [
            {
            imglist:[
              "/static/img/section/goods/3g1.jpg",
              "/static/img/section/goods/3g2.jpg",
              "/static/img/section/goods/3g3.jpg",
              "/static/img/section/goods/3g4.jpg"
            ],
            title:"任天堂（Nintendo） 掌上游戏机 正版原装游戏机 New 3ds 3dsLL New3dsLL白色",
            price:"￥1799.00",
            spec:"New3dsLL白色",
            },
            {
            imglist:[
              "/static/img/section/goods/3g5.jpg",
              "/static/img/section/goods/3g6.jpg",
              "/static/img/section/goods/3g7.jpg",
              "/static/img/section/goods/3g8.jpg"
            ],
            title:"任天堂（Nintendo） 掌上游戏机 正版原装游戏机 New 3ds 3dsLL New3dsLL红色",
            price:"￥1799.00",
            spec:"New3dsLL红色",
            }
          ]
        ]
      }
    },
    methods: {
      /* 数量 */
      getNumber(property){
        if(property == "add"){
          if(this.number<99){
            this.number++;
          }
        }else if(property == "sub"){
          if(this.number>1){
            this.number--;
          }
        }
      },
      getSpec(index){
        if(this.gameSpec == index){
          return;
        }
        this.gameSpec = index;
      },
      getImgIndex(index){
         if(this.imgIndex == index){
          return;
        }
        this.imgIndex = index;
      },
      myzoom(e){
        this.show = true
        var box = document.getElementById("box")
        var smallBox = document.getElementById("small-box")
        var bigBox = document.getElementById("big-box")
        var floatBox = document.getElementById("float-box")
        floatBox.style.opacity = 0.3;
        bigBox.style.visibility = "visible";
        var bigImg = document.getElementById("big-img")
        var smallImg = document.getElementById("small-img")
        var fheight = floatBox.offsetHeight
        var fwidth = floatBox.offsetWidth
        var left = e.clientX - box.offsetLeft - fwidth/2
        var top = e.clientY - box.offsetTop - fheight/2
        // console.log(floatBox.style)
        if(left<0){
          floatBox.style.left="0px";
        } else if (left > (smallBox.offsetWidth - floatBox.offsetWidth)) {
          left = smallBox.offsetWidth - floatBox.offsetWidth+"px";
        }else{
          left = floatBox.style.left=left+"px"
        }
       if(top<0){
          floatBox.style.top="0px";
        } else if (top > (smallBox.offsetHeight - floatBox.offsetHeight)) {
          top = smallBox.offsetHeight  - floatBox.offsetHeight+"px";
        }else{
          top = floatBox.style.top=top+"px"
        }
        /* 大图片 */
        var percentX = parseInt(floatBox.style.left)/(smallBox.offsetWidth-floatBox.offsetWidth)   
        var percentY = parseInt(floatBox.style.top)/(smallBox.offsetHeight-floatBox.offsetHeight)   
        bigImg.style.left = -percentX * (bigImg.offsetWidth - bigBox.offsetWidth)+"px"
        bigImg.style.top = -percentY * (bigImg.offsetHeight - bigBox.offsetHeight)+"px" 
        //console.log(  bigImg.style.left,bigImg.style.top)       
      },
      myzoomOut(){
        this.show = false
        var floatBox = document.getElementById("float-box")
        var bigBox = document.getElementById("big-box")
        floatBox.style.opacity = 0;
        bigBox.style.visibility = "hidden"
      }
    },
    mounted(){
      scrollTo(0,0)
    }

  
  }
</script>
    
<style scoped>
.zoom{border:1px solid #eee;position:relative}
.goods-big{position:relative}
.goods-big .zoomup{position: absolute;width: 100%;height:100%;border:1px solid #ccc;left:100%;top:0;
overflow: hidden;z-index: 100;visibility:hidden}
.goods-big .zoomup img{width: 200%;position: absolute;}
.goods-list ul{display:flex;justify-content: space-around}
.goods-list ul li{box-shadow: 0 0 0 1px #dadada;border:1px solid transparent;width:22%;}
.goods-list ul li:hover{border:1px solid #46C2F1;} 
.goods-list ul li.active{border:1px solid #46C2F1;} 

.goods-right b{font-size:0.9rem}   
.goods-right .price{ background: -webkit-linear-gradient(top, #f0f0f0 0%, #e0e0e0 100%);
background: -o-linear-gradient(top, #f0f0f0 0%, #e0e0e0 100%);background: -ms-linear-gradient(top, #f0f0f0 0%, #e0e0e0 100%);
box-shadow: 0px 0px 10px #ccc;margin-top: 10px;height: 100px;padding-top: 15px;padding-left: 5px;width:95%;}
.goods-right .price .pro-price{font: 2rem "simhei";color: #0aa1ed;font-family: Arial;}
.goods-right .price .promise{font: 0.85rem "simhei";height: 2rem;}
.goods-right .spec a{color:#000;border:2px solid #ccc;padding:0.5rem 0;border-radius:0.5rem}
.goods-right .spec a:hover{border:2px solid #882d75;}
.goods-right .spec a.active{border:2px solid #882d75;}
.count .number{display: inline-block;width:2rem;text-align: center;border: 1px solid #ddd;
vertical-align: middle;padding: 6px 0px;cursor: pointer;outline: none;}
.float-box {position: absolute;background: #ffffcc;opacity:0;
border: 1px solid #ccc;filter: alpha(opacity=50);width:40%;height:40%;}
</style>
    