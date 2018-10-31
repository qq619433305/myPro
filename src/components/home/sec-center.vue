<template>
  <section>
    <sec-center1></sec-center1>
    <sec-center2 v-for="(item,index) of sec_center" :key="index" :sec_title="item.sec_title" :sec_left="item.sec_left" :sec_box="item.sec_box" :secs_right="item.secs_right"></sec-center2>
  </section>  
</template>
  
<script>
import secCenter1 from './sec-center1'
import secCenter2 from './sec-center2'
export default {
  components: {
    secCenter1,    
    secCenter2    
  },
  data(){
    return{
      sec_center:[
        {
          sec_title:['手机通讯','iPhone 7','iPhone6s','vivo X7','乐S3','魅蓝note5','三星S7 edge'],
          sec_left:['/static/img/sec_left1.jpg','/static/img/sec_center1.jpg'],
          sec_box:[
            {img:'/static/img/sec_center2.jpg',title:'三星（SAMSUNG）Galaxy S9|S9+移动联通电信4G手机 双卡双待',price:5199},
            {img:'/static/img/sec_center3.jpg',title:'小米5s  移动联通电信4G手机',price:1999},
            {img:'/static/img/sec_center4.jpg',title:'小米 红米Note4X 全网通版4G手机',price:999}
           ],
          secs_right:['/static/img/sec1.jpg','/static/img/sec2.jpg','/static/img/sec3.jpg','/static/img/sec4.jpg','/static/img/sec5.jpg','/static/img/sec6.jpg','/static/img/sec7.jpg','/static/img/sec8.jpg','/static/img/sec9.jpg','/static/img/sec10.jpg']
        },
        {
          sec_title:['电脑平板','iPad','游戏本','笔记本电脑','电脑配件','全部'],
          sec_left:['/static/img/sec_left2.jpg','/static/img/sec_center5.jpg'],
          sec_box:[
            {img:'/static/img/sec_center6.jpg',title:'机械革命（MECHREVO）深海泰坦X6Ti-S 15.6英寸游戏本',price:7499},
            {img:'/static/img/sec_center7.jpg',title:'小米（MI）小米AIR 12.5/13.3英寸全金属超轻薄笔记本',price:5099},
            {img:'/static/img/sec_center8.jpg',title:'惠普（HP）暗影精灵III代 15.6英寸游戏笔记本电脑',price:6599}
           ],
          secs_right:['/static/img/sec11.jpg','/static/img/sec12.jpg','/static/img/sec13.jpg','/static/img/sec14.jpg','/static/img/sec15.jpg','/static/img/sec16.jpg','/static/img/sec17.jpg','/static/img/sec18.jpg','/static/img/sec19.jpg','/static/img/sec20.jpg']
        },
        {
          sec_title:['相机单反','单反相机','数码相机','单电/微单相机','拍立得','镜头'],    
          sec_left:['/static/img/sec_left3.jpg','/static/img/sec_center9.jpg'],
          sec_box:[
            {img:'/static/img/sec_center10.jpg',title:'尼康（Nikon） D5300 单反套机',price:3499},
            {img:'/static/img/sec_center11.jpg',title:'尼康（Nikon）D7200单反相机',price:7099},
            {img:'/static/img/sec_center12.jpg',title:'卡西欧（CASIO）EX-TR750 数码相机（3.5英寸大屏、双LED灯，天使之眼）美颜自拍神器',price:5599}
           ],
          secs_right:['/static/img/sec21.jpg','/static/img/sec22.jpg','/static/img/sec23.jpg','/static/img/sec24.jpg','/static/img/sec25.jpg','/static/img/sec26.jpg','/static/img/sec27.jpg','/static/img/sec28.jpg','/static/img/sec29.jpg','/static/img/sec30.jpg']
        },
        {
          sec_title:['智能数码','Beats','PS4 Slim','apple watch Series 2','移动电源','无人机','kindle'],     
          sec_left:['/static/img/sec_left4.jpg','/static/img/sec_center13.jpg'],
          sec_box:[
            {img:'/static/img/sec_center14.jpg',title:'Kindle Paperwhite 全新升级版6英寸护眼非反光电子墨水触控屏 wifi',price:759},
            {img:'/static/img/sec_center15.jpg',title:'Apple Watch Sport Series 1智能手表（38/42毫米铝金属表壳搭配运动型表带）',price:1479},
            {img:'/static/img/sec_center16.jpg',title:'樱桃（Cherry）MX Board 背光机械键盘',price:1299}
           ],
          secs_right:['/static/img/sec31.jpg','/static/img/sec32.jpg','/static/img/sec33.jpg','/static/img/sec34.jpg','/static/img/sec35.jpg','/static/img/sec36.jpg','/static/img/sec37.jpg','/static/img/sec38.jpg','/static/img/sec39.jpg','/static/img/sec40.jpg']
        },
        {
          sec_title:['运动户外','运动休闲鞋','运动服饰','骑行运动','运动包','户外装备','全部'],     
          sec_left:['/static/img/sec_left5.jpg','/static/img/sec_center17.jpg'],
          sec_box:[
            {img:'/static/img/sec_center18.jpg',title:'Converse匡威男鞋女鞋All Star低帮休闲板鞋常青款经典鞋帆布运动鞋101001',price:258},
            {img:'/static/img/sec_center19.jpg',title:'NIKE/耐克男女鞋 Air Force 1空军一号情侣款小白运动休闲鞋板鞋315122-111 845052-101',price:899},
            {img:'/static/img/sec_center20.jpg',title:'New Balance/NB 2017新款男鞋女鞋574系列复古跑步鞋ML574CNA/ML574CND',price:699}
           ],
          secs_right:['/static/img/sec41.jpg','/static/img/sec42.jpg','/static/img/sec43.jpg','/static/img/sec44.jpg','/static/img/sec45.jpg','/static/img/sec46.jpg','/static/img/sec47.jpg','/static/img/sec48.jpg','/static/img/sec49.jpg','/static/img/sec50.jpg']
        },
        {
          sec_title:['名品腕表','精选男表','精选女表','情侣对表','运动腕表','全部'],    
          sec_left:['/static/img/sec_left6.jpg','/static/img/sec_center21.jpg'],
          sec_box:[
            {img:'/static/img/sec_center22.jpg',title:'【  领券立减】天梭(TISSOT)手表 力洛克系列机械男表T006.407.16.033.00',price:3755},
            {img:'/static/img/sec_center23.jpg',title:'丹尼尔惠灵顿（Daniel Wellington）DW手表进口不锈钢米兰表带精致石英女表',price:1390},
            {img:'/static/img/sec_center24.jpg',title:'【正品保障 店保三年】卡西欧（Casio)男表G-Shock系列超酷双显运动手表',price:1099}
           ],
          secs_right:['/static/img/sec51.jpg','/static/img/sec52.jpg','/static/img/sec53.jpg','/static/img/sec54.jpg','/static/img/sec55.jpg','/static/img/sec56.jpg','/static/img/sec57.jpg','/static/img/sec58.jpg','/static/img/sec59.jpg','/static/img/sec60.jpg']
        },
        {
          sec_title:['洗护美妆','经典香氛','面部护肤','时尚彩妆','男士护理','全部'],    
          sec_left:['/static/img/sec_left7.jpg','/static/img/sec_center25.jpg'],
          sec_box:[
            {img:'/static/img/sec_center26.jpg',title:'【香港直邮】 YSL/圣罗兰 方管/圆管口红唇膏',price:318},
            {img:'/static/img/sec_center27.jpg',title:'【香港直邮】 CHANEL/香奈儿 邂逅柔情系列女士香氛邂逅粉/邂逅绿/邂逅黄',price:699},
            {img:'/static/img/sec_center28.jpg',title:'悦诗风吟（Innisfree）绿茶精萃天然补水保湿水乳精华套装 滋润/清爽/平衡',price:339}
           ],
          secs_right:['/static/img/sec61.jpg','/static/img/sec62.jpg','/static/img/sec63.jpg','/static/img/sec64.jpg','/static/img/sec65.jpg','/static/img/sec66.jpg','/static/img/sec67.jpg','/static/img/sec68.jpg','/static/img/sec69.jpg','/static/img/sec70.jpg']
        },
        {
          sec_title:['箱包潮品','蔻驰（COACH）','MICHAEL KORS','TORY BURCH','品牌女包','精品男包','罗志祥STAGE ','拉杆箱','打火机','全部'],      
          sec_left:['/static/img/sec_left8.jpg','/static/img/sec_center29.jpg'],
          sec_box:[
            {img:'/static/img/sec_center30.jpg',title:'【美国直邮 鹿晗同款】COACH蔻驰 男款皮革双肩包休闲背包 54786',price:1889},
            {img:'/static/img/sec_center31.jpg',title:'芝宝ZIPPO打火机 貔貅-吉祥瑞兽五面雕刻国风原装正品防风煤油火机 时尚精品高档礼品生日礼物 情人节礼物',price:279},
            {img:'/static/img/sec_center32.jpg',title:'【海外直邮】MICHAEL KORS迈克.科尔斯 女款皮革斜挎单肩包笑脸包 30T3GSMM2L',price:1889}
           ],
          secs_right:['/static/img/sec71.jpg','/static/img/sec72.jpg','/static/img/sec73.jpg','/static/img/sec74.jpg','/static/img/sec75.jpg','/static/img/sec76.jpg','/static/img/sec77.jpg','/static/img/sec78.jpg','/static/img/sec79.jpg','/static/img/sec80.jpg']
        },
      ]
    }
  }
}
</script>
  
<style scoped>
</style>
