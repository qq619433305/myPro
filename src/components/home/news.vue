<template>
    <div class="news">
        <div class="row wrapper">
            <div class="left col-md-4 col-sm-12">
                <div class="d-flex mb-2">
                    <h2>最新资讯</h2>
                    <a href="#" class="mt-2 ml-3 text-btn-arrow">查看全部</a>
                </div>
                <ul class="row">
                    <li class="col-md-9 col-sm-12 mb-md-5 mb-sm-2" v-for="(item,index) of news" :key="index">
                        <span class="date">{{item.date}}</span>
                        <p class="title mb-2">{{item.title}}</p>
                        <a href="#">阅读更多</a>
                    </li>                 
                </ul>
            </div>
            <div class="right col-md-8 col-sm-12">
                <div class="d-flex mb-4">
                    <h2>最新游戏发布</h2>
                    <a href="#" class="mt-2 ml-3 text-btn-arrow">查看全部</a>
                </div>
                <ul class="row">
                    <li v-for="(item,index) of games" :key="index" class="col-6 ngame mb-sm-4">
                        <a href="#" class="row">
                            <img :src="item.img" class="col-6 h-100">
                            <div class="col-6 pl-0">
                                <span class="date">{{item.date}}</span>
                                <h5 class="title">{{item.title}}</h5>
                            </div>
                        </a>       
                    </li>
                </ul>
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
        news:[
            {date:"18年10月26日",title:"任天堂用怪异的游戏让您体验万圣节的乐趣",img:"/static/img/section/home/bg1.jpg"},
            {date:"18年10月24日",title:"提醒：Wii 商店于2019年1月30日关闭 ",img:"/static/img/section/home/bg2.jpg"}
        ],
        games:[
            {date:"18年10月19日",title:"黑暗的灵魂：重新开始",img:"/static/img/section/home/bg3.png"},
            {date:"18年12月10日",title:"路易吉的大厦",img:"/static/img/section/home/bg4.png"},
            {date:"18年12月10日",title:"世界与你同在：最终混音",img:"/static/img/section/home/bg5.png"},
            {date:"18年05月10日",title:"超级马里奥派对",img:"/static/img/section/home/bg6.png"},            
        ]
    }
  },
  methods:{
  }
}
</script>

<style scoped>
a{color:#999;font-family:'LatoBold'}
.news{padding: 30px 0;background:#fff;overflow: hidden;}   
.ngame{height:14.5rem}
.text-btn-arrow{font-size:1.25rem;color:#2576bc}
.text-btn-arrow::after{ content: '>';display: inline-block;font-family: 'icons';font-size: 100%;height: 20px;
position: relative;width: 20px;left:0.25rem}
.left ul{color:#999;font-size:1rem}
.left .date{border-color:rgb(218,218,218)}
.left a{color:#2576bc}
.date{border-bottom:3px solid #ce181e;display:inline-block;margin-bottom:1rem;}
.title{color:#777}

</style>
