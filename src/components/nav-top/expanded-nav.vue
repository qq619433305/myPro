<template> 
    <div class="expanded">
        <div class="expanded-nav-container" v-for="(expanded,index) of this.expanded" :index="index" :key="index" v-if="myShow == index " @mouseenter="isShow(index)">   
            <div :class="styleName[myShow]">
                <div class="wrapper">
                    <!-- 背景图片 -->
                    <img  class="bgimage" v-for="(item,index) of expanded.bgimg" :src="item" :index="index" :key="index">
                    <div class="main-tiles filterH">
                        <a href="#" class="switch-home">
                            <p class="link-title">{{expanded.left.title}}</p>
                            <img :src="expanded.left.img" class="bg-layer">                
                            <span class="link-copy hidden">{{expanded.left.node}}</span>
                        </a>
                        <a href="#" class="switch-btn">
                            <div>{{expanded.left.button}}</div>
                        </a>
                    </div>
                    <!-- 6个图片 -->
                    <div class="small-tiles">
                        <div class="small-tiles-container filterH">
                            <a href="#" v-for="(item,index) of expanded.right" :key="index">
                                <p>{{item.title}}</p>
                                <img :src="item.img">
                            </a>                
                        </div>
                    </div>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
  components:{
   
  },
  data(){
    return{
        styleName:["switch","threeds","game","amiibo","play","support","mycerter"],
        expanded:[
            {
                bgimg:["/static/img/header/wb1.svg",
                   "/static/img/header/wb2.svg",
                   "/static/img/header/wb3.svg",
                   "/static/img/header/wb4.svg",
                   "/static/img/header/wb5.svg",
                   "/static/img/header/wb4.svg"],
                left:{
                    title:"任天堂Switch",
                    node:"无论何时何地,自由享受乐趣",
                    img:"/static/img/header/wl1.jpg",
                    button:"立即购买"
                },
                right:[
                    {title:"特征",img:"/static/img/header/wr1.jpg"},
                    {title:"在线服务",img:"/static/img/header/wr2.jpg"},
                    {title:"任天堂游戏",img:"/static/img/header/wr3.jpg"},
                    {title:"家庭乐趣",img:"/static/img/header/wr4.jpg"},
                    {title:"饰品",img:"/static/img/header/wr5.jpg"},
                    {title:"任天堂实验室",img:"/static/img/header/wr6.jpg"},
                ]
            },
            {
                bgimg:["/static/img/header/3b1.svg",
                   "/static/img/header/wb2.svg",
                   "/static/img/header/3b3.svg"],
                left:{
                    title:"任天堂3DS系列",
                    node:"我们的便携式系统随时随地播放",
                    img:"/static/img/header/3l1.jpg",
                    button:"立即购买"
                },
                right:[
                    {title:"什么是3DS？",img:"/static/img/header/3r1.jpg"},
                    {title:"什么的2DS",img:"/static/img/header/3r2.jpg"},
                    {title:"任天堂游戏",img:"/static/img/header/3r3.jpg"},
                    {title:"特征",img:"/static/img/header/3r4.jpg"},
                    {title:"内置软件",img:"/static/img/header/3r5.jpg"},
                    {title:"常见问题",img:"/static/img/header/3r6.png"},
                ]
            },
             {
                bgimg:["/static/img/header/wb4.svg",
                   "/static/img/header/gb2.svg",
                   "/static/img/header/gb3.svg"],   
                left:{
                    title:"游戏商店",
                    node:"浏览，购买和下载游戏",
                    img:"/static/img/header/gl1.jpg",
                    button:"所有比赛"
                },
                right:[
                    {title:"任天堂Switch游戏",img:"/static/img/header/gr1.jpg"},
                    {title:"任天堂3DS游戏",img:"/static/img/header/gr2.jpg"},
                    {title:"WiiU游戏",img:"/static/img/header/gr3.jpg"},
                    {title:"手机游戏",img:"/static/img/header/gr4.jpg"},
                    {title:"销售和交易",img:"/static/img/header/gr5.jpg"},
                    {title:"敬请期待",img:"/static/img/header/gr6.jpg"},
                ]
            },
            {
                //bgimg:["/static/img/header/ab1.png"],   
                left:{
                    title:"amiibo",
                    node:"增强您的游戏体验",
                    img:"/static/img/header/al1.jpg",
                    button:"立即购买"
                },
                right:[
                    {title:"什么是amiibo",img:"/static/img/header/ar1.jpg"},
                    {title:"任天堂手办",img:"/static/img/header/ar2.jpg"},
                    {title:"游戏",img:"/static/img/header/ar3.jpg"},
                    {title:"兼容性",img:"/static/img/header/ar4.jpg"},
                    {title:"常问问题",img:"/static/img/header/ar5.png"}
                ]
            },
                        {
                bgimg:["/static/img/header/pb1.svg",
                   "/static/img/header/pb2.svg",
                    "/static/img/header/pb3.svg",
                    "/static/img/header/pb4.svg",
                   "/static/img/header/pb5.svg",],   
                left:{
                    title:"玩在任天堂",
                    node:"孩子们有趣的东西",
                    img:"/static/img/header/pl1.jpg",
                    //button:"所有比赛"
                },
                right:[
                    {title:"朋友",img:"/static/img/header/pr1.jpg"},
                    {title:"探索",img:"/static/img/header/pr2.jpg"},
                    {title:"新闻和提示",img:"/static/img/header/pr3.jpg"},
                    {title:"对于父母",img:"/static/img/header/pr4.jpg"},
                ]
            },
            {
                bgimg:["/static/img/header/sb1.svg",
                   "/static/img/header/sb2.svg",
                    "/static/img/header/sb3.svg",
                    "/static/img/header/sb4.svg",
                    "/static/img/header/sb5.svg"],    
                left:{
                    title:"支持",
                    node:"获取您的问题的答案或者联系我们以获取帮助",
                    img:"/static/img/header/sl1.jpg",
                    //button:"所有比赛"
                },
                right:[
                    {title:"任天堂Switch",img:"/static/img/header/sr1.svg"},
                    {title:"任天堂3DS",img:"/static/img/header/sr2.svg"},
                    {title:"支持论坛",img:"/static/img/header/sr3.svg"},
                    {title:"数字版购买",img:"/static/img/header/sr4.svg"},
                    {title:"互联网连接",img:"/static/img/header/sr5.svg"},
                    {title:"设置修复    ",img:"/static/img/header/sr6.svg"},
                ]
            },
            {
                left:{
                    title:"我的任天堂",
                    node:"立即加入我们的免费奖励计划",
                    img:"/static/img/header/ml1.jpg",
                    //button:"所有比赛"
                },
                right:[
                    {title:"什么是我的任天堂",img:"/static/img/header/mr1.svg"},
                    {title:"积分兑换",img:"/static/img/header/mr2.svg"},
                    {title:"赚取积分",img:"/static/img/header/mr3.svg"},
                    {title:"关于积分",img:"/static/img/header/mr4.jpg"}
                ]
            }
        ]
    }     
  },
  methods:{
      isShow(index){
        this.Show = index--;
      }
  },
  props:["myShow"]
}
</script>
<style scoped>
.expanded{position:absolute;left:30;width: 100%;z-index: 10;}
/*扩展nav*/

.expanded-nav-container{position:relative;height:527px;}
.expanded-nav-container>div{padding:40px 16px;height: 100%;overflow: hidden;}
.expanded-nav-container .wrapper {position: relative;display: flex;}

.expanded-nav-container .wrapper .bgimage{position:absolute;}


.expanded-nav-container .wrapper .main-tiles
{width:23%;margin:0 1%;}
.expanded-nav-container .wrapper .small-tiles
{width:75%;margin:0 1%;}

.expanded-nav-container a.switch-home{
   display:block;height:350px;width:100%;margin:0 0 8%;overflow: hidden;
   border-radius: 20px;position:relative;text-align:center}

.expanded-nav-container a.switch-home .link-title{
    position:absolute;font-size:0.8em;top:6%;transition:all linear 0.5s;display:block;width:100%;z-index:1}
.expanded-nav-container a.switch-home img
{width:100%;background-repeat:no-repeat;margin-top:75px;transition:all linear 0.5s;}
.expanded-nav-container a.switch-home .link-copy{
    position:absolute;font-size:0.54em;bottom:1.5em;transition:all linear 0.5s;width:100%;display:block}

.expanded-nav-container .switch-btn{
    display:block;width:100%;background:#F7A324;border-radius:20px;height:75px;line-height:75px;}

.expanded-nav-container  .main-tiles a
{text-align:center;font-size:30px;color:#fff;}
/*图片的容器*/
.expanded-nav-container .small-tiles .small-tiles-container
{display: flex;width:100%;height:100%;flex-wrap:wrap;}
.expanded-nav-container .small-tiles .small-tiles-container a
{text-align:center;font-size:1.2rem;color:#fff;width:calc((100% / 3) - (1.333% * 2));height:210px;
margin:0 1.333% 2.666%;border-radius: 20px;overflow: hidden;position:relative;
}
.expanded-nav-container .small-tiles a>p
{width:100%;margin:1rem 0 1rem 0;display:block;position:absolute;transition:all linear 0.5s;z-index:1;}
.expanded-nav-container  .small-tiles a img
{text-align:center;width:100%;margin-top:4rem;transition:all linear 0.5s;}

/*图片处理*/
.filterH a:hover p{transform:translateY(4.5rem);z-index:1;}
.filterH a:hover span{transform:translateY(-1rem);z-index:1;}
.filterH a:hover img{transform:scale3d(1.15, 1.15, 1);filter: blur(5px);}
.filterH a:hover::before{content: '';background-color: rgba(0,0,0);position: absolute;}
.filterH a.switch-btn:before{display: none}

/*样式整理*/
/*背景颜色*/
.expanded-nav-container .switch
{background-image:linear-gradient(-180deg, #FFFFFF 25%, #DADADA 100%);}
.expanded-nav-container .threeds {background:#CE181E}
.expanded-nav-container .game {background:#FF7D00}
.expanded-nav-container .amiibo {background:url("/static/img/header/ab1.png") repeat}
.expanded-nav-container .play {background:#FF3F3F}
.expanded-nav-container .support {background:#00BFF3}
.expanded-nav-container .mycerter
{background-image:radial-gradient(#efefef  25%, transparent 26%), radial-gradient(#efefef 25%, transparent 26%);
background-color:#fff;background-position:0 0,10px 10px;background-size:20px 20px;
}
/*元素背景颜色*/
.switch a.switch-home{background:#E60012;}
.switch .small-tiles .small-tiles-container a{background:#E60012;} 
.threeds a.switch-home{background:#ff0008;}
.threeds .small-tiles .small-tiles-container a{background:#ff0008;}
.game a.switch-home{background:#F7A324;}
.game .small-tiles .small-tiles-container a{background:#F7A324;}

.amiibo a.switch-home,
.amiibo .small-tiles .small-tiles-container a:nth-child(2)
{background:#25adf3;}
.amiibo .small-tiles .small-tiles-container a:first-child{background:#e6001e;}
.amiibo .small-tiles .small-tiles-container a:nth-child(3){background:#a5c80f;}
.amiibo .small-tiles .small-tiles-container a:nth-child(4){background:#009682;}
.amiibo .small-tiles .small-tiles-container a:last-child{background:#e62d8c;}

.play a.switch-home{background:#fa6a6a;height: 100%;}
.play a.switch-btn{display: none;}
.play .small-tiles .small-tiles-container a{background:#fa6a6a;}

.support a.switch-home{background:#55d4f7;height: 100%;}
.support a.switch-btn{display: none;}
.support .small-tiles .small-tiles-container a{background:#55d4f7;}
.support .small-tiles a img{width:50%;}
.support .small-tiles a:nth-child(2) img{width:80%;}

.mycerter a.switch-home{background:#e60012;height: 100%;}
.mycerter a.switch-btn{display: none;}
.mycerter .small-tiles .small-tiles-container a{background:#e60012;}
.mycerter .small-tiles a img{width:55%;}
.mycerter .small-tiles a:nth-child(4) img{width:100%;}

/*背景图片位置*/

.switch .wrapper>img:nth-child(1){left:-240px;top:10px;animation:toBottom 4s infinite}
.switch .wrapper>img:nth-child(2){left:-200px;top:370px;}
.switch .wrapper>img:nth-child(3){left:calc(100% + 35px);top:10px;animation:toBottom 5s infinite}
.switch .wrapper>img:nth-child(4){left:calc(100% - 15px);top:320px;}
.switch .wrapper>img:nth-child(5){left:calc(100% + 98px);top:320px;}
.switch .wrapper>img:nth-child(6){left:calc(100% + 210px);top:320px;}

.threeds .wrapper>img:nth-child(1){left:-310px;top:10px;animation:toRight 5s infinite}
.threeds .wrapper>img:nth-child(2){left:calc(100% + 20px);top:390px;}
.threeds .wrapper>img:nth-child(3){left:100%;top:10px;animation:toBottom 4s infinite}

.game .wrapper>img:nth-child(1){left:-140px;top:100px;}
.game .wrapper>img:nth-child(2){left:-210px;top:250px;animation:toLeft 4s infinite}
.game .wrapper>img:nth-child(3){left:calc(100% - 60px);top:50px;animation:toScale 4s infinite}

.play .wrapper>img:nth-child(1){left:-140px;top:50px;animation:toBottom 4.5s infinite}
.play .wrapper>img:nth-child(2){left:-180px;top:310px;animation:toLeft 5s infinite}
.play .wrapper>img:nth-child(3){left:calc(100% - 420px);top:310px;animation:toLeft 1.5s infinite}
.play .wrapper>img:nth-child(4){left:calc(100% - 200px);top:310px;animation:toLeft 3s infinite}
.play .wrapper>img:nth-child(5){left:calc(100% - 45px);top:115px;animation:toLeft 4s infinite}

.support .wrapper>img:nth-child(1){left:-160px;top:110px;}
.support .wrapper>img:nth-child(2){left:-110px;top:250px;animation:toRotate 5s infinite}
.support .wrapper>img:nth-child(3){left:-220px;top:330px;animation:toRotate 5s infinite 2s}
.support .wrapper>img:nth-child(4){left:calc(100% - 70px);top:200px;animation:toLeft 5s infinite}
.support .wrapper>img:nth-child(5){left:calc(100% + 130px);top:90px;animation:toRotate 8s infinite}

/*悬停边框颜色*/
.switch .filterH a:hover{box-shadow:0 0 0 4px #E60012;}
.switch .filterH a.switch-btn:hover{box-shadow:0 0 0 4px #f9be66;}
.threeds .filterH a:hover{box-shadow:0 0 0 4px #ff0008}
.threeds .filterH a.switch-btn:hover{box-shadow:0 0 0 4px #f9be66;}
.game .filterH a:hover{box-shadow:0 0 0 4px #F7A324}
.game .filterH a.switch-btn:hover{box-shadow:0 0 0 4px #f9be66;}

.amiibo .filterH a:hover {box-shadow:0 0 0 4px #25adf3;}
.amiibo .filterH a.switch-btn:hover {box-shadow:0 0 0 4px #f9be66;}
.amiibo .small-tiles .filterH a:first-child:hover {box-shadow:0 0 0 4px #E60012;}
.amiibo .small-tiles .filterH a:nth-child(3):hover {box-shadow:0 0 0 4px #dff581;}
.amiibo .small-tiles .filterH a:nth-child(4):hover {box-shadow:0 0 0 4px #009682;}
.amiibo .small-tiles .filterH a:last-child:hover {box-shadow:0 0 0 4px #e62d8c;}

.play .filterH a:hover {box-shadow:0 0 0 4px #fa6a6a}
.support .filterH a:hover {box-shadow:0 0 0 4px #55d4f7}
.mycerter .filterH a:hover {box-shadow:0 0 0 4px #E60012}
/*动画*/
@keyframes toTop {
   0% { transform: translateY(0); }
   50% { transform: translateY(15px); }
   100% { transform: translateY(0); }
}
@keyframes toBottom {
   0% { transform: translateY(-15px); }
   50% { transform: translateY(15px); }
   100% { transform: translateY(-15px); }
}

@keyframes toRight {
   0% { transform: translateX(-15px); }
   50% { transform: translateX(15px); }
   100% { transform: translateX(-15px); }
}
@keyframes toLeft {
   0% { transform: translateX(0); }
   50% { transform: translateX(-15px); }
   100% { transform: translateX(0); }
}
@keyframes toScale {
   0% { transform: scale(1); }
   50% { transform: scale(1.1); }
   100% { transform: scale(1); }
}

@keyframes toRotate {
   0% { transform: rotate(0); }
   10% { transform: rotate(0); }
   50% { transform: rotate(-25deg); }
   60% { transform: rotate(-25deg); }
   100% { transform: rotate(0); }
}

/*响应式*/

@media screen and (max-width:767px) and (min-width:501px){
    .hidden{display:none !important;}
    .expanded-nav-container .wrapper .main-tiles
    {width:32%;margin:0 1%;}
    .expanded-nav-container .wrapper .small-tiles
    {width:64%;margin:0 1%;}
    .small-tiles .small-tiles-container a:nth-child(5){display:none;}
    .small-tiles .small-tiles-container a:nth-child(6){display:none;}
    .expanded-nav-container .small-tiles .small-tiles-container a
    {color:#fff;width:calc((100% / 2) - (1.333% * 2));}
}
@media screen and (max-width:500px){
    .hidden{display:none !important;}
    .expanded-nav-container .wrapper .main-tiles
    {width:50%;margin:0 1%;}
    .expanded-nav-container .wrapper .small-tiles
    {width:50%;margin:0 1%;}
    .small-tiles .small-tiles-container a:nth-child(3){display:none;}
    .small-tiles .small-tiles-container a:nth-child(4){display:none;}
    .small-tiles .small-tiles-container a:nth-child(5){display:none;}
    .small-tiles .small-tiles-container a:nth-child(6){display:none;}
    .expanded-nav-container .small-tiles .small-tiles-container a
    {color:#fff;width:calc((100% / 1) - (1.333% * 1));}
}
</style>