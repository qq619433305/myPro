<template>
    <div class="adetailtop">
        <div class="wrapper d-flex" v-for="(item,index) of alist" :key="index">
            <div class="prev">
                <a href="#" @click.prevent="prev">
                    <img src="/static/img/section/amiibo/aprev.png" >
                </a>
            </div>
            <div class="left mr-5">
                <img :src="item[id].img_url" class="w-100 ">
            </div>
            <div class="right">
                <h2 class="title">{{item[id].title}}</h2>
                <span>{{item[id].spec}}</span>
                <div class="d-flex local-detail mb-2">
                    <img :src="item[id].placard" class="placard pr-4">
                    <img :src="item[id].logo" class="logo">
                </div>
                <p class="font-small">建议零售价：{{item[id].price}}</p>
                <p class="font-small">发布日期：{{item[id].data}}</p>
                <p class="font-small">制造商：{{item[id].mark}}</p>    
                <div class="node">
                    <p>©任天堂</p>
                    <span>amiibo的形象正在发展中。实际产品可能有所不同 此外，由于产品特性，可能会出现个体差异。请预先警告。
                    为了使用amiibo，可能需要更新相应软件的数据。</span>
                </div>            
            </div>
             <div class="next">
                <a href="#" @click.prevent="next">
                    <img src="/static/img/section/amiibo/anext.png">
                </a>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    data(){
        return {
            id:0,
            alist:[
                [{
                img_url:'/static/img/section/amiibo/at1.png',
                title:'林克（弓）【荒野之息】',
                spec:'塞尔达传说系列',
                placard:'/static/img/section/amiibo/dp1.jpg',
                logo:'/static/img/section/amiibo/dl1.jpg',
                price:'150.00',
                data:'2017.03.03',
                mark:'任天堂',
              }],
            ]
        }
    },
    methods:{
        prev(){
            if(this.id == 0){
                this.id = 12
            }else{
                this.id--
            }
        },
        next(){
            if(this.id >= 11){
                this.id = 0
                console.log(this.id)
            }else{
                this.id++
                console.log(this.id)
            }
        }
    },
    mounted(){
        
        if(this.$route.params.alist){
            this.id = this.$route.params.id
            this.alist[0]=this.$route.params.alist
        }
    }
}
</script>
<style scoped>
.wrapper{padding: 4rem;position: relative;}
.placard{width:20%;height: 20%;}
.prev,.next{position:absolute;top:40%;}
.prev{left:5%;}
.next{right:5%;}
.logo{width:35%;height:35%;}
.font-small{color:rgb(60,60,60);font-size:0.8rem;margin-bottom:0.5rem}
.node{color:rgb(115,115,115);font-size:0.8rem}
.node p{margin-bottom:0.1rem}
</style>



