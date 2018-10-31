<template>
    <div class="goodsinfo">
        <div class="wrapper">
            <img :src="item" v-for="(item,index) of imgList[this.$route.query.id]" :key="index">
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            imgList:[
                 ["/static/img/section/goods/si1.jpg",
                "/static/img/section/goods/si2.jpg",
                "/static/img/section/goods/si3.jpg",
                "/static/img/section/goods/si4.jpg",
                "/static/img/section/goods/si5.jpg",
                "/static/img/section/goods/si6.jpg"],

                ["/static/img/section/goods/3i1.jpg",
                "/static/img/section/goods/3i2.jpg",
                "/static/img/section/goods/3i3.jpg",
                "/static/img/section/goods/3i4.png",
                "/static/img/section/goods/3i5.png",
                "/static/img/section/goods/3i6.png",
                "/static/img/section/goods/3i7.png",]
            ]
        }
    },

    methods:{
     
    },
    mounted(){
       
    }
}
</script>
<style scoped>
    .goodsinfo img{width:100%;}
</style>



