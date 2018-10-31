<template>
  <div class="droplist">
      <div class="goodslist clearfix" @mouseout="hideList">
        <h2  @mouseover="showList"><span>商品分类</span><i></i></h2>   
        <div class="fs_left show" id="list"  @mouseover="showList">
          <ul >
            <fs-left-item v-for="(item,index) of listTxt" :content="item" :index="index" :key="index"></fs-left-item>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
import fsLeftItem from './fs-left-item'

export default {
  components: {
    fsLeftItem
  },
  data(){
    return{
      listTxt:['手机通讯','腕表配饰','电脑办公','相机单反','平板数码','运动户外','服饰鞋靴','箱包潮品','美妆护肤','家电家居']
    }
  },
  methods:{
    showList(){
      list.style.height="450px"
    },
    hideList(){
      list.style.height="0px"
    }
  }
}
</script>

<style scoped>
.droplist{position: absolute;left: 111.5px;z-index: 1;}
.clearfix::after{content:'';display:inline-block;clear:both;}
.goodslist{width: 1200px;height:450px;margin:0 auto;color: #fff;position: relative;}
.fs_left{width:200px;height:0px;background:gray;float: left;font-size:.9rem;position: relative;overflow: hidden;transition: all .5s;}
.goodslist>h2{height: 37px;width: 200px;background-color: #3b9bff;line-height: 37px;text-align: center;color: #fff;
font-size: 16px;cursor: pointer;position: absolute;top: -37px;left: 0;}
.goodslist>h2>i{display: inline-block; width: 11px;height: 7px; margin-left: 8px;position: relative;top: -2px;background: url(/static/img/icons.png) no-repeat; background-position: -130px -140px;}
.fs_left ul li{height: 45px;line-height: 45px;}
</style>
