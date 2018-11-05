<template>
    <div class="adetail">
       <adetail-top></adetail-top>
       <ahome-main></ahome-main>
    </div>
</template>
<script>
import adetailTop from "./adetailtop.vue"
import ahomeMain from "./ahomemain.vue"

export default {
    components:{
        adetailTop,
        ahomeMain
    },
    data(){
        return {
         
        }
    },
    methods:{
  
    },
    mounted(){
        scrollTo(0,0)
    }
}
</script>
<style scoped>

</style>



