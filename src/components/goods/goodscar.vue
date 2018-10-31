<template>
    <div class="goodsinfo">
        <div class="d-flex list" style="margin-left: 0px;">
            <img :src="item" v-for="(item,index) of img_url[this.$route.query.id]" :key="index">
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            img_url:[
                [
                    "/static/img/section/goods/sc1.jpg",
                    "/static/img/section/goods/sc2.jpg",
                    "/static/img/section/goods/sc3.jpg",
                    "/static/img/section/goods/sc4.jpg",   
                    "/static/img/section/goods/sc1.jpg", 
                    "/static/img/section/goods/sc2.jpg",
                    "/static/img/section/goods/sc3.jpg",                
                ],
                [
                    "/static/img/section/goods/3c1.jpg",
                    "/static/img/section/goods/3c2.jpg",
                    "/static/img/section/goods/3c3.jpg",
                    "/static/img/section/goods/3c4.jpg",  
                    "/static/img/section/goods/3c1.jpg",
                    "/static/img/section/goods/3c2.jpg",
                    "/static/img/section/goods/3c3.jpg",
                ]
            ]
        }
    },

    methods:{
        animation(){
            var list = document.querySelector(".goodsinfo div");
            var img = list.firstChild
            var goodsinfo = list.parentNode
            var width = list.offsetWidth
            var go = setInterval(()=>{
                list.style.marginLeft =parseInt(  list.style.marginLeft) -1 +"px";
                //console.log( list.style.marginLeft)
                if( parseInt(list.style.marginLeft) < -4*img.offsetWidth){
                    list.style.marginLeft=0+"px"
                }
            },30)
        }
    },
    mounted(){
        this.animation();
    }
}
</script>
<style scoped>
.goodsinfo{overflow:hidden;position:relative}
.goodsinfo .list{width:233.33%;top:0;}
.list img{width:25%;height:100%;}
</style>



