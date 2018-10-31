<template>
  <header>
         <!-- 1.顶部导航栏 -->
     <div id="global-header" :class="(direction==-1)?'convert':''">
         <div class="top-nav">
             <div class="wrapper">
                 <a href="#" class="logo-nintendo hidden">
                    <img src="/static/img/header/logo-nintendo.svg">
                 </a>
                 <img class="logo2" src="/static/img/header/logo-nintendo2.svg">
                 <div class="search-flex hidden">
                     <div id="search-container">
                     </div>
                     <div class="search-toggle">
                         <div class="oval">
                         </div>
                         <span >
                             "搜索 游戏、系统、玩法、配件等...
                         </span>
                         <img src="">
                         <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
                            <path>
                                d="M23.042 8.9c-3.88-3.88-10.208-3.865-14.107.034-3.9 3.899-3.915 10.227-.036 14.107 3.43 3.43 8.755 3.832 12.66 1.163l5.297 5.297a1.621 1.621 0 0 0 2.287-.005l.382-.382c.63-.631.634-1.661.006-2.289l-5.301-5.302c2.619-3.878 2.232-9.205-1.188-12.625V8.9zm-2.698 11.443c-2.424 2.423-6.358 2.433-8.77.022-2.411-2.412-2.401-6.346.023-8.77 2.423-2.423 6.357-2.433 8.769-.022 2.412 2.412 2.402 6.346-.022 8.77z"
                            </path>
                         </svg>
                     </div>
                 </div>
                 <a href="#" class="change-region hidden">
                     改变地区
                 </a>
                 <a href="#" class="change-region hidden">
                     <img src="" alt="">
                     <span>登录 / 注册</span>
                 </a>
             </div>
         </div>
         <div @mouseleave="getItem(-1)" class="bottom-nav">
            <nav class="nav">
                <div class="wrapper">
                    <a href="#" @click.prevent="toGoods(index)" v-for="(item,index) in section" :key="index" @mouseenter="getItem(index)">{{item}}</a>
                </div>         
            </nav>
            <expanded-nav :myShow="myItem"></expanded-nav>
            
         </div>
        <div>
        </div>
     </div>
  </header>
</template>
  
<script>

import expandedNav from "../../components/nav-top/expanded-nav.vue"
export default {
  components:{
      expandedNav
  },
  data(){
    return{
        direction:0,
        myItem:-1,
        section:["任天堂 Switch","任天堂 3DS | 2DS","游戏商店","amilbo","任天堂游戏","支持","我的任天堂"]
    }
  },
  methods:{
      /* 路由跳转 */
      toGoods(id){
          if(id < 2){
            this.$router.push({
              path:"goods",
              query:{id}
            })
          }else if(id == 3){
            this.$router.push({
               path:"/ahome"
            })
          }
        
          this.getItem(-1)
      },
      getItem(index){
          this.myItem = index; 
      },    
    roll(){
        var _this_ = this
   
        //判断鼠标滚轮滚动方向
        if (window.addEventListener)//FF,火狐浏览器会识别该方法
        window.addEventListener('DOMMouseScroll', wheel, false);
        window.onmousewheel = document.onmousewheel = wheel;//W3C
        //统一处理滚轮滚动事件
        function wheel(event){
            var delta = 0;
            if (!event) event = window.event;
            if (event.wheelDelta) {//IE、chrome浏览器使用的是wheelDelta，并且值为“正负120”
                delta = event.wheelDelta/120; 
                if (window.opera) delta = -delta;//因为IE、chrome等向下滚动是负值，FF是正值，为了处理一致性，在此取反处理
            } else if (event.detail) {//FF浏览器使用的是detail,其值为“正负3”
                delta = -event.detail/3;
            }
            if (delta)
                handle(delta);
        }
        //上下滚动时的具体处理函数
       function handle(delta) {
             _this_.direction = delta
             return;
        }
    },
  },
  created(){
      this.roll();
  }
}
</script>
<style scoped>
/*top-nav*/
#global-header {position: fixed;width: 100%;z-index: 1000;transition:transform 0.8s cubic-bezier(0.6, 0, 0.4, 1);top:0px;}
.convert{transform:translateY(-86px)}
#global-header a{text-decoration: none;}
#global-header .top-nav{color:#888;height:42px;background:#fff;position:relative;font-size:14px;}
#global-header .top-nav .wrapper{display:flex;position:relative;align-items: center;flex-wrap:nowrap;}
#global-header .top-nav a.logo-nintendo {background-color:#E60012;width:180px;height:110px;
text-align:center;padding-top:53px;position:absolute;top:0;left:0;display: block;transform:translateY(-26px);
border-radius:0 0 15px 15px;transition:all linear 0.5s;z-index:11;}
#global-header .top-nav a.logo-nintendo:hover {transform:translateY(0);}
#global-header .search-flex{position:relative;justify-content:flex-end;display:inline-flex;}
#global-header .top-nav .wrapper, #global-header nav .wrapper{max-width:1286px;width:100%}
#global-header .search-flex{position:relative;margin-left:180px;height:100%;flex:1}
#global-header .top-nav .search-toggle{display:flex;align-items:center;position:relative;
width:360px;height:100%;padding:0 14px 0 14px;margin-right:15px;}
#global-header .oval{position:absolute;top:10%;left:0;width:100%;height:80%;border:solid 1px #ccc;border-radius:20px;}
#global-header .top-nav .wrapper .change-region{width:133px;height:100%;line-height:42px;color:inherit;}
/*nav*/
#global-header .bottom-nav{position:relative;}
#global-header .nav {background:linear-gradient(#f5f5f5,#dadada);width:100%;height:30px;}
#global-header .nav .wrapper{display:flex;margin:0 auto;padding-left:180px;}
#global-header nav .wrapper a{display: block;width: 16%;height: 100%;line-height: 30px;
color: #888;font-size: 14px;cursor: pointer;text-align: center;white-space: nowrap;}
#global-header nav .wrapper a:first-child{width:18%}
#global-header nav .wrapper a:nth-child(2){width:20%}
#global-header nav .wrapper a:nth-child(3){width:14%}
#global-header nav .wrapper a:nth-child(4){width:8%}
#global-header nav .wrapper a:nth-child(5){width:10%}
#global-header nav .wrapper a:last-child{width:14%}

/*响应式*/
@media screen and (max-width:767px){
    .hidden{display: none !important}
    #global-header .top-nav{background: #E60012;}
    #global-header .top-nav .wrapper{padding-left:1rem}
    .logo2{width:5.25rem;}
    #global-header .nav .wrapper{padding-left: 15px;}
    #global-header nav .wrapper a:first-child{width:25%}
    #global-header nav .wrapper a:nth-child(2){width:35%}
    #global-header nav .wrapper a:nth-child(3){width:20%}
    #global-header nav .wrapper a:nth-child(4){width:20%}
    #global-header nav .wrapper a:nth-child(5){display: none;}
    #global-header nav .wrapper a:nth-child(6){display: none;}
    #global-header nav .wrapper a:last-child{display: none;}
}





</style>