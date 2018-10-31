<template>
  <div class="top_box">
    <div class="title">
      <h1>
        <span class="zy">自营</span>
        <span class="name" v-if="routeParams" v-text="routeParams.title"></span>
      </h1>
      <p>
        <span>分期乐是苹果授权经销商，国行正品有保障！</span>
        <a href="#">iPhone XS新品火热抢购中！</a>
      </p>
    </div>
    <div class="price">
      <div class="old_price">
        <span>原价</span>
        <span>:</span>
        <span>¥<span>7599</span></span>
      </div>
      <div class="new_price">
        <span>现价</span>
        <span>:</span>
        <span>¥<span v-if="routeParams" v-text="routeParams.price"></span></span>
      </div>
    </div>
    <div class="choose">
      <div class="gift">
        <span>
          <span>促销</span>
          <span>:</span>
        </span>
        <div class="promo">
          <ul>
            <li><span>免息</span>新人限时9期免息，仅限乐卡支付</li>
            <li><span>满减</span>不支持使用优惠券</li>
          </ul>
        </div>
      </div>
      <table class="tab">
        <tr v-for="(item,index) of tab_data" :key="index">
          <td>
            <span v-text="item['title']"></span>
            <span>:</span>
          </td>
          <td>
            <ul class="pho_ul">
              <li class="" v-for="(item,index) of item['lists']" :key="index">
                <img v-if="item['img']" :src="item['img']">
                <span v-text="item['txt']"></span>
                <span  v-if="item[0]" v-text="item"></span>
                <i></i>
              </li>
            </ul>
          </td>
        </tr>
      </table>
      <div class="btn">
        <span>分期购买</span>
        <span>到货付款</span>
      </div>
    </div>
  </div>  
</template>
  
<script>
export default {
  components:{
  },
  data(){
    return{
      tab_data:[
        {title:'颜色',lists:[
            {img:'/static/img/desc/tl1.jpg',txt:'银色'},
            {img:'/static/img/desc/tl2.jpg',txt:'深灰色'},
            {img:'/static/img/desc/tl3.jpg',txt:'金色'},
            {img:'/static/img/desc/tl4.jpg',txt:'红色特别版'},
          ]},
        {title:'内存',lists:['64G','256G']},
        {title:'运营商',lists:['全网通','双网通']},
        {title:'送到',lists:['广东广州市番禺区']},
        {title:'首付比例',lists:['零首付']},
        {title:'分期月数',lists:['不分期','2个月','3个月','6个月','9个月','12个月','15个月','18个月','24个月','36个月',]},
        {title:'月供',lists:['￥ 219.67']},
      ]
    }
  },
  props:['routeParams'],
  methods:{
    default(){
      var firstlis = document.querySelectorAll('.pho_ul>li:first-child')
      for(var li of firstlis){
        li.className="on"
      }
    }
  },
  mounted(){
    this.default();
  }
}
</script>
<style scoped>
.top_box{float: left;width: 597px;}
.title{padding: 20px 0;}
.title h1{font-size: 20px;color: #666;}
.title .zy{position: relative;top: -2px;padding: 0 5px;font-size: 14px;border: 1px solid #fe4979;
color: #fff;border-radius: 3px;background: #fe4979;}
.title .name{font-size: 20px;color: #666;}
.title p{color: gray;font-size: 14px;}
.price{position: relative;background-color: #f2f2f2;color: #5f5f5f;}
.price .old_price{padding: 15px 0 0 22px;letter-spacing: 26px;font-size: 0;}
.old_price>span:first-child{font-size: 14px;}
.old_price>span:nth-child(2){letter-spacing: normal;position: absolute;left: 84px;font-size: 14px;}
.old_price>span:last-child{letter-spacing: normal;text-decoration: line-through;position: absolute;left: 104px;font-family: arial;}
.old_price>span:last-child>span{font-size: 14px;}
.price .new_price{height: 52px;line-height: 52px;padding: 0 0 0 22px;}
.new_price{position: relative;}
.new_price>span:first-child{font-size: 14px;color: #5f5f5f;position: relative;letter-spacing: 26px;}
.new_price>span:nth-child(2){letter-spacing: normal;position: absolute;left: 85px;top: 5px;font-size: 14px;}
.new_price>span:last-child{color: #fe4979;position: relative;font-size: 18px;}
.new_price>span:last-child>span{margin-left: 10px;font-size: 31px;font-weight: 500;}
.choose{font-size: 14px;padding: 20px 0 5px 20px;border-bottom: 1px dotted #e4e4e4;color: #5f5f5f;}
.gift{margin: 0 0 20px;border-bottom: 1px dotted #e4e4e4;padding-bottom: 5px;position: relative; height: 64px;}
.gift>span{float: left; width: 84px;margin-left: 0px;zoom: 1;}
.gift>span>span:first-child{width: 82px;letter-spacing: 26px;}
.gift>span>span:last-child {margin-left: -25px;margin-left: -25px;}
.promo ul{float: left;}
.promo ul li{height: 21px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;margin: 0 0 8px 4px;padding-right: 40px;}
.promo ul li span:first-child{border: 1px solid #ff7296;color: #ff7296;padding: 0 5px;margin-right: 13px;}
.promo ul li span:last-child{white-space: nowrap;}
.tab tr>td:first-child{padding-top: 8px;vertical-align: top;width: 78px;text-align: left;}
.tab tr>td:first-child>span:first-child{width: 82px;letter-spacing: 26px;float: left;display: block;}
.tab>tr:nth-child(3)>td>span:first-child{letter-spacing: 6px;}
.tab>tr:nth-child(5){border-top: 1px dotted #e4e4e4;}
.tab>tr:nth-child(5)>td{padding-top: 20px;}
.tab>tr:nth-child(5)>td>span:first-child,.tab>tr:nth-child(6)>td>span:first-child{letter-spacing: 0px;}
.tab tr>td:first-child>span:last-child  {margin-left: -25px;width: 5px;float: left;display: block;}
.tab .pho_ul{position: relative;overflow: hidden;}
.tab .pho_ul .on{border-color: #7dc82c;}
.tab .pho_ul .on i{display: block;}
.tab .pho_ul li{height: 35px;line-height: 35px;margin-bottom: 15px;min-width: 18px;float: left;margin-right: 10px;
border: 1px solid #ccc;padding: 0 7px;position: relative;color: #676767;background-color: #fff;text-align: center;}
.tab .pho_ul li img{vertical-align: top;margin-top: 2px;width: 31px;height: 31px;line-height: 35px;}
.tab .pho_ul li span{color: #676767;line-height: 35px;text-align: center;}
.tab .pho_ul li i{position: absolute;right: -1px;bottom: -1px;display: none;width: 9px;height: 9px;
overflow: hidden;text-indent: -9999em;background: url(/static/img/desc/choose_icon.jpg) no-repeat;background-position: -170px 0;}
.choose .btn span:first-child{padding: 0 10px;min-width: 153px;height: 41px;line-height: 41px;font-size: 18px;margin-right: 15px;background-color: #ccc;color: #fff;box-shadow: 0 0 #FFF inset;border: 0;display: inline-block;text-align: center;
text-decoration: none;vertical-align: middle;cursor: pointer;}
.choose .btn span:last-child{padding: 0 10px;min-width: 153px;height: 41px;line-height: 41px;font-size: 18px;margin-right: 15px;border: 0;display: inline-block;text-align: center;text-decoration: none;vertical-align: middle;
cursor: pointer;background-color: #44a0ff;color: #FFF;}
</style>