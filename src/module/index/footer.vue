<template>
  <div class="footer">
    <div class="footer_top">
      <div class="wrapper">
        <ul>
          <li>
            <a href="#">关于任天堂</a>
            <a href="#">公司信息</a>
            <a href="#">招聘</a>
            <a href="#">CSR报告</a>
            <a href="#">知识产权政策</a>
            <a href="#">网站地图</a>
          </li>
          <li>
            <a href="#">在哪里购买</a>
            <a href="#">游戏商店</a>
            <a href="#">在线零售商名单</a>
            <a href="#">任天堂纽约</a>
            <a href="#">任天堂商店</a>
          </li>
          <li>
              <a href="#">支持</a>
              <a href="#">更新保修</a>
              <a href="#">Switch支持</a>
              <a href="#">Wiiu支持</a>
              <a href="#">任天堂3DS支持</a>
              <a href="#">修复帮助</a>
              <a href="#">任天堂产品回收</a>
          </li>
          <li>
              <a href="#">父母</a>
              <a href="#">父母的信息</a>
              <a href="#">家长控制权</a>
              <a href="#">安全须知</a>
          </li>
          <li>
              <a href="#">健康与安全</a>
              <a href="#">健康与安全注意事项</a>
              <a href="#">基于兴趣的广告</a>
              <a href="#">隐私政策</a>
              <a href="#">使用条款</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer_bottom">
      <div class="wrapper">
            <ul>
              <li>
                <a href="#">联系我们</a>
              </li>
              <li>
                <a href="#">网站反馈</a>
              </li>
            </ul>
            <ul>
              <li>
                <img src="static/img/footer/ins.png">
              </li>
               <li>
                <img src="static/img/footer/line.png">
              </li>
               <li>
                <img src="static/img/footer/tt.png">
              </li>
               <li>
                <img src="static/img/footer/yt.png">
              </li>
            </ul>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      
    }
  }
}
</script>

<style scoped>
a{text-decoration:none;}   
.wrapper{margin-left: auto;margin-right: auto;max-width: 980px;} 
.footer_top{padding:20px 0;background:linear-gradient(to top, #e7e7e7 0%,#f9f9f9 75%)}
.footer_top .wrapper ul{display:flex;justify-content: space-between;}
.footer_top .wrapper li{display:flex;flex-direction:column;font-size: 12px;}
.footer_top .wrapper li a:first-child{font-size: 18px;}
.footer_top .wrapper li a{color:#a0a0a0}
.footer_bottom{padding:20px 0;background:linear-gradient(to bottom, #8c8a8a 0%,#989898 50%)}
.footer_bottom .wrapper ul{display: block;text-align: center}
.footer_bottom .wrapper ul li{display:inline-block}
.footer_bottom .wrapper ul li img{height:40px;margin:0 0.5rem}
.footer_bottom .wrapper li a{color:#e2e2e2;font-size:14px;}
</style>