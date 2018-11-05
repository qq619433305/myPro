<template>
    <div class="ahome-top">
        <div class="alogo">
            <img src="/static/img/section/amiibo/amiibo.svg">
        </div>
        <ul class="alist" style="transform:translateX(0px)">
            <a href="#" v-for="(item,index) of alist" :key="index" @click.prevent="gotoDetail(index)">
                <img :src="item.img_url">
            </a>
        </ul>
    </div>
</template>
<script>
   

export default {
    data(){
        return {
          alist:[
              {
                img_url:'/static/img/section/amiibo/at1.png',
                title:'林克（弓）【荒野之息】',
                spec:'塞尔达传说系列',
                placard:'/static/img/section/amiibo/dp1.jpg',
                logo:'/static/img/section/amiibo/dl1.jpg',
                price:'150.00',
                data:'2017.03.03',
                mark:'任天堂',
              },
              {
                img_url:'/static/img/section/amiibo/at2.png',
                title:'马里奥（婚礼装)',
                spec:'超级玛丽奥系列',
                placard:'/static/img/section/amiibo/dp2.jpg',
                logo:'/static/img/section/amiibo/dl3.jpg',
                price:'120.00',
                data:'2017.10.28',
                mark:'任天堂',
              },
              {
                img_url:'/static/img/section/amiibo/at3.png',
                title:'桃子（婚礼装）',
                spec:'超级玛丽奥系列',
                placard:'/static/img/section/amiibo/dp3.jpg',
                logo:'/static/img/section/amiibo/dl3.jpg',
                price:'110.00',
                data:'2017.10.27',
                mark:'任天堂',
              },
              {
                img_url:'/static/img/section/amiibo/at4.png',
                title:'米法公主',
                spec:'塞尔达传说系列',
                placard:'/static/img/section/amiibo/dp4.jpg',
                logo:'/static/img/section/amiibo/dl1.jpg',
                price:'130.00',
                data:'2018.10.27',
                mark:'任天堂',
              },
              {
                img_url:'/static/img/section/amiibo/at5.png',
                title:'奇诺比奥队长',
                spec:'超级玛丽奥系列',
                placard:'/static/img/section/amiibo/dp5.jpg',
                logo:'/static/img/section/amiibo/dl3.jpg',
                price:'120.00',
                data:'2015.03.12',
                mark:'任天堂',
              },
              {
                img_url:'/static/img/section/amiibo/at6.png',
                title:'卡比',
                spec:'星之卡比系列',
                placard:'/static/img/section/amiibo/dp6.jpg',
                logo:'/static/img/section/amiibo/dl6.jpg',
                price:'140.00',
                data:'2016.04.28',
                mark:'任天堂',
              },
              {
                img_url:'/static/img/section/amiibo/at7.png',
                title:'静江',
                spec:'动物之森系列',
                placard:'/static/img/section/amiibo/dp7.jpg',
                logo:'/static/img/section/amiibo/dl7.jpg',
                price:'130.00',
                data:'2016.03.24',
                mark:'任天堂',
              },
              {
                img_url:'/static/img/section/amiibo/at8.png',
                title:'章鱼',
                spec:'喷射战士系列',
                placard:'/static/img/section/amiibo/dp8.jpg',
                logo:'/static/img/section/amiibo/dl2.jpg',
                price:'130.00',
                data:'2017.04.24',
                mark:'任天堂',
              },
              {
                img_url:'/static/img/section/amiibo/at9.png',
                title:'马里奥',
                spec:'超级玛丽奥系列',
                placard:'/static/img/section/amiibo/dp9.jpg',
                logo:'/static/img/section/amiibo/dl3.jpg',
                price:'110.00',
                data:'2015.3.12',
                mark:'任天堂',
              },
              {
                img_url:'/static/img/section/amiibo/at10.png',
                title:'幻墨',
                spec:'大乱斗系列',
                placard:'/static/img/section/amiibo/dp10.jpg',
                logo:'/static/img/section/amiibo/dl9.jpg',
                price:'130.00',
                data:'2018.12.07',
                mark:'任天堂',
              },
              {
                img_url:'/static/img/section/amiibo/at11.png',
                title:'金刚狼',
                spec:'大乱斗系列',
                placard:'/static/img/section/amiibo/dp11.jpg',
                logo:'/static/img/section/amiibo/dl9.jpg',
                price:'150.00',
                data:'2018.12.07',
                mark:'任天堂',
              },
              {
                img_url:'/static/img/section/amiibo/at12.png',
                title:'吉他狗',
                spec:'动物之森系列',
                placard:'/static/img/section/amiibo/dp12.jpg',
                logo:'/static/img/section/amiibo/dl7.jpg',
                price:'130.00',
                data:'2018.12.07',
                mark:'任天堂',
              },
              {
                img_url:'/static/img/section/amiibo/at1.png',
                title:'林克（弓）【荒野之息】',
                spec:'塞尔达传说系列',
                placard:'/static/img/section/amiibo/dp1.jpg',
                logo:'/static/img/section/amiibo/dl1.jpg',
                price:'150.00',
                data:'2017.03.03',
                mark:'任天堂',
              },
              {
                img_url:'/static/img/section/amiibo/at2.png',
                title:'马里奥（婚礼装)',
                spec:'超级玛丽奥系列',
                placard:'/static/img/section/amiibo/dp2.jpg',
                logo:'/static/img/section/amiibo/dl3.jpg',
                price:'120.00',
                data:'2017.10.28',
                mark:'任天堂',
              },
              {
                img_url:'/static/img/section/amiibo/at3.png',
                title:'桃子（婚礼装）',
                spec:'超级玛丽奥系列',
                placard:'/static/img/section/amiibo/dp3.jpg',
                logo:'/static/img/section/amiibo/dl3.jpg',
                price:'110.00',
                data:'2017.10.27',
                mark:'任天堂',
              },
              {
                img_url:'/static/img/section/amiibo/at4.png',
                title:'米法公主',
                spec:'塞尔达传说系列',
                placard:'/static/img/section/amiibo/dp4.jpg',
                logo:'/static/img/section/amiibo/dl1.jpg',
                price:'130.00',
                data:'2018.10.27',
                mark:'任天堂',
              },
              {
                img_url:'/static/img/section/amiibo/at5.png',
                title:'奇诺比奥队长',
                spec:'超级玛丽奥系列',
                placard:'/static/img/section/amiibo/dp5.jpg',
                logo:'/static/img/section/amiibo/dl3.jpg',
                price:'120.00',
                data:'2015.03.12',
                mark:'任天堂',
              },
              {
                img_url:'/static/img/section/amiibo/at6.png',
                title:'卡比',
                spec:'星之卡比系列',
                placard:'/static/img/section/amiibo/dp6.jpg',
                logo:'/static/img/section/amiibo/dl6.jpg',
                price:'140.00',
                data:'2016.04.28',
                mark:'任天堂',
              },
          ],
        }
    },
    methods:{
        animation(){
            var alist = document.querySelector(".alist");
            var img = alist.firstChild
            // var goodsinfo = alist.parentNode
            var width = img.offsetWidth
            var reg = /\d+/g
            var go = setInterval(()=>{
                var offset = parseInt(-alist.style.transform.match(reg))-1
                alist.style.transform =`translateX(${offset}px)`
                //console.log(offset)
                //console.log( list.style.marginLeft)
                //console.log(offset,-6*width)
                if( offset < -12*width){
                    alist.style.transform=`translateX(0px)`
                }
            },30)
        },
        gotoDetail(id){
            this.$router.push({
            name:'adetail',
            params:{
                id:id,
                alist:this.alist
            }
          })
        }
    },
    mounted(){
        scrollTo(0,0)
        this.animation();   
    }
}
</script>
<style scoped>
.ahome-top{background:url("/static/img/section/amiibo/abg.jpg");background-size: cover;
height: 510px;padding: 70px 0;position:relative;overflow: hidden;}
.ahome-top .alogo{background-size: contain;position: relative;margin: -30px auto 35px;text-align:center}
.ahome-top .alist{width:300%;top:0;height: 217px;display:flex;
position:absolute;top:200px}
.ahome-top .alist a{width:16%;}
.ahome-top .alist img{width:130%;}
</style>



