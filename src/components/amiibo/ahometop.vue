<template>
    <div class="ahome-top">
        <div class="alogo">
            <img src="/static/img/section/amiibo/amiibo.svg">
        </div>
        <ul class="alist">
            <a href="#" v-for="(item,index) of alist" :key="index">
                <img :src="item">
            </a>
        </ul>
    </div>
</template>
<script>

export default {
    data(){
        return {
          alist:[
              "/static/img/section/amiibo/at1.png",
              "/static/img/section/amiibo/at2.png",
              "/static/img/section/amiibo/at3.png",
              "/static/img/section/amiibo/at4.png",
              "/static/img/section/amiibo/at5.png",
              "/static/img/section/amiibo/at6.png",
              "/static/img/section/amiibo/at7.png",
              "/static/img/section/amiibo/at8.png",
              "/static/img/section/amiibo/at9.png",
              "/static/img/section/amiibo/at10.png",
              "/static/img/section/amiibo/at11.png",
              "/static/img/section/amiibo/at12.png",
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
.ahome-top{background:url("/static/img/section/amiibo/abg.jpg");background-size: cover;
height: 510px;padding: 70px 0;overflow:hidden;position:relative}
.ahome-top .alogo{background-size: contain;position: relative;margin: 28px auto 35px;text-align:center}
.ahome-top .alist{width:200%;top:0;height: 217px;}
.ahome-top .alist img{width:16%;}
</style>



