<template>
    <div class="ahome-main">
        <img :src="img" class="w-100">
        <div class="wrapper">
            <div class="n1-section row">
                <div class="n1-content col-md-6 col-sm-12">
                    <div class="row mb-2">
                        <div class="col-3">
                            <img src="/static/img/section/amiibo/am1.gif" class="aimg">
                        </div>
                        <div class="col-6 mt-2">
                            <h4>一个角色</h4>
                            <h4>出现在游戏中。</h4>
                        </div>
                    </div>
                    <span>在“动物之森”中，您可以通过触摸“动物之森”的amiibo卡将动物移动到您的村庄。</span>
                </div>
                <div class="col-md-6 col-sm-12">
                    <img src="/static/img/section/amiibo/am2.jpg" class="w-100">
                </div>
            </div>
            <div class="n3-section row">
                <div class="col-md-6 col-sm-12">
                    <div class="d-flex">
                        <div class="mb-3">
                             <img src="/static/img/section/amiibo/am3.gif" class="aimg">
                        </div>
                        <h3 class="ml-4 mt-2">获取以角色命名的项目或能力。</h3>
                    </div>
                    <div>
                        <img src="/static/img/section/amiibo/am4.jpg" class="w-100">
                    </div>
                </div>
                <div class="col-md-6 col-sm-12 mt-4">
                    <span>在“星之卡比”游戏中，卡比可以触发amiibo并获得对应角色的复制能力。</span>
                    <div  class="mt-5">
                        <img src="/static/img/section/amiibo/am5.jpg" class="w-100">
                    </div>
                </div>
            </div>
               <div class="n2-section row">
                <div class="col-md-6 col-sm-12">
                    <div class="d-flex">
                        <div class="mb-3">
                             <img src="/static/img/section/amiibo/am6.gif" class="aimg">
                        </div>
                        <h3 class="ml-4 mt-2"> 一个特殊的游戏模式，如果你有amiibo你可以享受。</h3>
                    </div>
                    <div>
                        <img src="/static/img/section/amiibo/am7.jpg" class="w-100">
                    </div>
                </div>
                <div class="col-md-6 col-sm-12 mt-4">
                    <span>触摸amiibo，即可在特殊游戏模式下玩游戏。例如，如果你用不同喷射战士的amiibo时，你将进入每个amiibo的“主题”。</span>
                    <div  class="mt-5">
                        <img src="/static/img/section/amiibo/am8.jpg" class="w-100">
                    </div>
                </div>
            </div>
        </div>
     
       
    </div>
</template>
<script>

export default {
    data(){
        return {
          img:"/static/img/section/amiibo/amain.jpg"
        }
    },
    methods:{
  
    },
    mounted(){

    }
}
</script>
<style scoped>
.ahome-main{background: #fff}
.n1-section,.n2-section,.n3-section{padding: 50px 0;border-bottom: 1px solid #e6e6e6;}
.asection{padding: 98px 0;overflow: hidden;}
.n1-content{padding-top:8%;}
.aimg{width:6rem;}
</style>



