<template>
  <div class="desc_bottom">
    <div class="tab_title">
      <div class="tab_ul">
        <ul>
          <li v-for="(item,index) of tab_list" :key="index" class=""><a href="#" v-text="item"></a></li>
        </ul>
      </div>
    </div>
    <div class="tab_body">
      <div class="param">
        <ul>
          <li v-for="(item,index) of param_list" :key="index" v-text="item"></li>
        </ul>
      </div>
      <div class="msg">
        <h2>商品详情<span></span></h2>
        <div>
          <div class="msg_title">
            <p v-for="(item,index) of msg_title_list" :key="index" v-text="item"></p>
          </div>
          <div class="imglist">
            <img v-for="(item,index) of img_list" :key="index" :src="item">
          </div>
        </div>
      </div>
    </div>    
    <div class="right_list">
      <h3>同类别排行</h3>
      <ul>
        <li v-for="(item,index) of right_list" :key="index">
          <img :src="item[0]">
          <p v-text="item[1]"></p>
          <div v-text="item[2]" class="price"></div>
          <div class="icon"><span v-text="index+1"></span></div>
        </li>
      </ul>
    </div>
  </div>  
</template>
  
<script>
export default {
  components:{
  },
  data(){
    return{
      tab_list:['商品详情','商品参数','包装清单','售后保障','商品评价(572)'],
      param_list:['产品名称：Apple iPhone 8 Plus 国行正品 4G智能手机','品牌：苹果（Apple）','品牌：苹果（Apple）'],
      msg_title_list:['分期乐是苹果官方授权经销商，正品保障！','苹果官网查询分期乐经销商信息请点击>>','温馨提示：因苹果服务器在美国，激活时间同步有时差，如果您激活后，激活时间显示有误，可等待10-15天后再次官网查询，激活时间就会恢复正常~~'],
      img_list:['/static/img/desc/msg_img1.jpg','/static/img/desc/msg_img2.jpg','/static/img/desc/msg_img3.jpg','/static/img/desc/msg_img4.jpg','/static/img/desc/msg_img5.jpg'],
      right_list:[
        ['static/img/desc/right_list1.jpg','苹果（Apple）iPhone XS全网通国行正品','月供：¥341.29起'],
        ['static/img/desc/right_list2.jpg','苹果（Apple）iPhone XS Max双卡双待全网通国行正','月供：¥431.53起'],
        ['static/img/desc/right_list3.jpg','Apple iPhone X 国行正品 4G智能手机','月供：¥286.37起'],
        ['static/img/desc/right_list4.jpg','Apple iPhone 8 国行正品 4G智能手机','月供：¥188.28起'],
        ['static/img/desc/right_list5.jpg','Apple iPhone 8 Plus 国行正品 4G智能手机','月供：¥235.36起'],
      ]
    }
  },
  mounted(){
  }
}
</script>
<style scoped>
.desc_bottom{width: 1200px;margin: 0 auto 30px;overflow: hidden;}
.tab_title{position: relative;width: 998px;border: 1px solid #e2e2e2;border-bottom: 0 none;background-color: #fff;float: left;}
.tab_title .tab_ul{width: 995px;background-color: #fcfcfc;}
.tab_title .tab_ul ul{border-bottom: 1px solid #E5E5E5;font-size: 14px;margin: 0 auto;}
.tab_title .tab_ul ul li{display: inline-block;  list-style: none;vertical-align: top;position: relative;top: 1px;}
.tab_title .tab_ul ul li a{display: inline-block;  height: 44px;line-height: 44px;font-size: 16px;color: gray;border: 0;
border-top: 2px solid #fcfcfc;background-color: #fcfcfc;border-radius: 0;padding: 0 15px;text-decoration: none;}
.tab_title  .tab_ul .active a{border-top-color: #aada1b;color: #aada1b;height: 45px;background-color: #fff;
border-left: 1px solid #e9e9e9;border-right: 1px solid #e9e9e9;} .tab_body{    padding: 18px;width: 998px;float: left;
border: 1px solid #e2e2e2;background-color: #fff;font-size: 14px;color: #5f5f5f;}
.tab_body .msg>h2{margin: 12px 0 24px;padding-bottom: 8px;color: #66A423;border-bottom: 3px #E1E1E1 solid;position: relative;
font-size: 18px;}
.tab_body .msg>h2>span{height: 3px;width: 66px;position: absolute;bottom: -3px;left: 0;background-color: #B3D291;display: inline-block;font-size: 0;}
.msg_title p{margin:5px 0;text-align: center;}
.msg_title p:first-child{font-size: 18px;font-weight: bold;}
.msg_title p:nth-child(2){font-size: 18px; color: #4a9df4;font-weight: bold;}
.msg_title p:last-child{font-size: 13px;margin-top: 20px;}
.imglist{width: 998px;margin: 0 auto;text-align: center;}
.right_list{float: right;  border: 1px solid #e2e2e2;background-color: #fff;margin-bottom: 15px;width: 186px;font-size: 14px;}
.right_list h3 {text-align: center;font-size: 16px;color: #aada1b;border-bottom: 1px solid #e2e2e2;height: 46px;line-height: 46px;
background-color: #fcfcfc;}
.right_list ul{padding: 0 8px;color: #5f5f5f;}
.right_list ul li{text-align: center;position: relative;border-top: 1px dashed #ccc;}
.right_list ul li:first-child{border-top:0;}
.right_list ul li img{width: 58px;margin: 0 auto;padding-top: 15px;}
.right_list ul li p{line-height: 18px;height: 36px;overflow: hidden;margin-top: 10px;}
.right_list ul li .price{margin: 4px 0 8px;color: #15a4fa;font-weight:400;}
.right_list ul li .icon{width: 28px;height: 41px;color: #fff;line-height: 36px;font-size: 18px;position: absolute;top: 0;left: 0;background: url(/static/img/desc/rl_icon.jpg) no-repeat;display: inline-block;background-position: 0 -115px;}
</style>