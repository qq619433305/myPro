<template>
<div class="banner_bg">
	<div id="banner" class="banner">
		<div class="wrap">
			<div class="ban" style="transform-origin: 50% 50% -881.188px; transform: rotateY(-3.92699rad);">
				<img :src="item.img" :style="item.style" v-for="(item,index) of imglist" :key="index">
			</div> 
			<ul class="dots">
				<li :data-index="index" v-for="(itme,index) of imglist" :key="index"></li>
			</ul>
		</div>
		<div class="btn">
			<span class="prev"></span>
			<span class="next"></span>
		</div>
	</div>
</div>
</template>
  
<script>
export default {
  components: {
  },
  data(){
	  return{  
		  timer:null,
		  imglist:[
			{img:"/static/img/section/home/banner1.jpg",style:"padding: 0px"},
			{img:"/static/img/section/home/banner2.jpg",style:"padding: 0px; transform-origin: 50% 50% -881.188px; transform: rotateY(0.785398rad)"},
			{img:"/static/img/section/home/banner3.jpg",style:"padding: 0px; transform-origin: 50% 50% -881.188px; transform: rotateY(1.5708rad)"},
			{img:"/static/img/section/home/banner4.jpg",style:"padding: 0px; transform-origin: 50% 50% -881.188px; transform: rotateY(2.35619rad)"},
			{img:"/static/img/section/home/banner5.jpg",style:"padding: 0px; transform-origin: 50% 50% -881.188px; transform: rotateY(3.14159rad)"},
			{img:"/static/img/section/home/banner6.jpg",style:"padding: 0px; transform-origin: 50% 50% -881.188px; transform: rotateY(3.92699rad)"},
			{img:"/static/img/section/home/banner7.jpg",style:"padding: 0px; transform-origin: 50% 50% -881.188px; transform: rotateY(4.71239rad)"},
			{img:"/static/img/section/home/banner8.jpg",style:"padding: 0px; transform-origin: 50% 50% -881.188px; transform: rotateY(5.49779rad)"},	
		  ]
	  }
  },
  methods:{
	carousel(root) {
		var _this_ = this;
		var figure = root.querySelector('.ban'),
		nav = root.parentNode.querySelector('.btn'),
		ids = root.querySelector('.dots'),
		images = figure.children,
		n = images.length,
		gap = root.dataset.gap || 0,
		bfc = 'bfc' in root.dataset,
		theta = 2 * Math.PI / n,
		currImage = 0;
		ids.firstChild.className="active"
		setupCarousel(n, 730);
		setupNavigation();
		setupIndecator();
		setAuto();
		function setupCarousel(n, s) {
			var apothem = s / (2 * Math.tan(Math.PI / n));	
			figure.style.transformOrigin = '50% 50% ' + -apothem + 'px';
			for (var i = 0; i < n; i++) {
				images[i].style.padding = gap + 'px';
			}
			for (i = 1; i < n; i++) {
				images[i].style.transformOrigin = '50% 50% ' + -apothem + 'px';
				images[i].style.transform = 'rotateY(' + i * theta + 'rad)';
			}
			if (bfc) for (i = 0; i < n; i++) {
				images[i].style.backfaceVisibility = 'hidden';
			}
			rotateCarousel(currImage);
		}
			/* 左右导航 */
		function setupNavigation() {
			nav.addEventListener('click', onClick, true);
			function onClick(e) {
				e.stopPropagation();
				var t = e.target;
				if (t.tagName.toUpperCase() != 'SPAN') return;
				
				if (t.classList.contains('next')) {
					currImage++;
				} else {
					currImage--;
				}
				indecatorlight(currImage);
				rotateCarousel(currImage);
			}
		}

		function setupIndecator(){
			ids.addEventListener('click', onClick, true);
			function onClick(e){
				e.stopPropagation();
				let t = e.target;
				if(t.nodeName=='LI'){
					if(t.parentNode){
						t.parentNode.querySelector('.active').classList.remove('active');
						t.classList.add('active');
						//计算已经转过的整圈, 让banner在本次转动的这一圈中转动, 避免回转多圈
						currImage=Math.floor(currImage/n)*n+t.dataset.index*1;
						rotateCarousel(currImage);
					}
				}
			}
		}
		function indecatorlight(imageIndex){
			if(imageIndex){
				let idcIndex=Math.abs(imageIndex%n);
				let curIdc=document.querySelector('.dots>li:nth-child('+(idcIndex+1)+')');
				if(curIdc){
					curIdc.parentNode.querySelector('.active').classList.remove('active');
					curIdc.classList.add('active');
					// console.log(curIdc)		
				}
				
				
			}
			
			
		}
		function rotateCarousel(imageIndex) {
			figure.style.transform = 'rotateY(' + imageIndex * -theta + 'rad)';
		}
		
		function setAuto(){
			_this_.timer = setInterval(() => {
					currImage++;
					indecatorlight(currImage);
					rotateCarousel(currImage);			
			}, 2500);

			//轮播图切换标签页暂停
			document.addEventListener('visibilitychange', onHidden);
			document.addEventListener('visibilitychange', onVisible);

			//鼠标进入停止轮播, 滑出重新开始
			figure.parentNode.parentNode.addEventListener('mouseover', onMouseover, true);
			figure.parentNode.parentNode.addEventListener('mouseout', onMouseout, true);
			// console.log(document.hidden)
			function isHidden(){
				return document.hidden
			}
			function onHidden(e){
				e.stopPropagation();

				let hide_state = isHidden();
				if(hide_state){
					clearInterval(_this_.timer);
					_this_.timer=null;
				}
			}
			function onVisible(e){
				e.stopPropagation();
				let hide_state = isHidden();
				if (!hide_state) {
					_this_.timer = setInterval(() => {
						currImage++;
						indecatorlight(currImage);
						rotateCarousel(currImage);
					}, 2500);
				}
			}
			function onMouseover(e){
				e.stopPropagation();
				
				if(_this_.timer){
					clearInterval(_this_.timer);
					_this_.timer=null;
				}
			}
			function onMouseout(e){
				e.stopPropagation();
				let hide_state = isHidden();
				if(!_this_.timer){
					_this_.timer=setInterval(() => {
						currImage++;
						indecatorlight(currImage);
						rotateCarousel(currImage);
					}, 2500);
				}
			}
	}
}

  },
  mounted(){
	var carousels = document.querySelectorAll('.wrap');
	for (var i = 0; i < carousels.length; i++) {
		this.carousel(carousels[i]);
	}
  },
  destroyed(){
	  clearInterval(this.timer)
  }

}
</script>
  
<style scoped>
.banner_bg{background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);padding-top: 1.5rem}
.banner{
	width: 1200px; 
	margin:0 auto;
	overflow:hidden;
	position: relative;
	-webkit-perspective: 500px; 
}

.banner .wrap{
	width: 730px;
	height: 370px;
	margin: 0 auto;
	display:flex;
	flex-direction: column;
	align-items: center;
	-moz-perspective: 500px; 
	
}
.banner .download{
	width: 252px;
	height: 336px;
}

.banner .wrap > *{
	flex: 0 0 auto;
}

.banner .ban{
	/*width:40%;*/
	z-index: 10;
    margin-top: 8px;
	 transform-style:preserve-3d; 
	transition:transform 0.5s;
}
.banner .ban img{
	box-shadow: 0px 10px 50px rgba(0, 0, 0, 1);
	width: 100%;
    padding: 0 0px;
}
.banner .ban>img:not(:first-of-type){
	position: absolute;
    left: 0;
    top: 0;
}
.banner .shadow{
	position: absolute;
    bottom: 0;
    z-index:-1;
    left: 0;
    width:1200px;
}
.banner .shadow>img{
	width:100%
}
.banner .dots{
	display:flex;
	height: 15px;
    z-index: 11;
    margin:15px;
}
.banner .dots li{
	cursor: pointer;
	width: 10px;
	height: 10px;
	border-radius: 50%;
	box-shadow: 0 0 10px rgba(255, 255, 255, 1);
	margin-left:40px;
}
.banner .dots li:hover{
	background-image: linear-gradient(to top, #df89b5 0%, #bfd9fe 100%);
	transition: all 0.5s ease;
}
.banner .dots li.active{
	
	box-shadow: 0 0 10px rgba(255, 80, 90, 0.6);
	background-image: linear-gradient(-225deg, #5D9FFF 0%, #B8DCFF 48%, #6BBBFF 100%);
	transition: all 0.5s ease;
}
.banner .btn{
	display: flex;
}
.banner .btn>*{
	transform: scale(1.3);
	background-color: transparent;
	cursor: pointer;
	position:absolute;
	top: 37%;
	width: 80px;
	height: 80px;
	border:none;
}
/* 鼠标划入btn动画 */
.banner .btn>.prev,
.banner .btn>.next{
	transition: left 0.3s ease-in,
				right 0.3s ease-in;
}
.banner:hover .btn>.prev {
	left: 0px;
	background:url(/static/img/section/home/bp.png)  no-repeat center center;
	background-size:100%
}
.banner:hover .btn>.next {
	right: 0px;
	background:url(/static/img/section/home/bn.png)  no-repeat center center;
	background-size:100%

}
.banner .btn>.prev{
	left: -36px;
	background-position: 0 -360px;

}
.banner .btn>.prev:hover{
	background-position: 0 -430px;
	background:url(/static/img/section/home/bp.png)  no-repeat center center;
	background-size:100%;
	left: 5px;
}
.banner .btn>.next{
	right: -36px;
	background-position: 0 -508px;

}
.banner .btn>.next:hover{
	background-position: 0 -578px;
	background:url(/static/img/section/home/bn.png)  no-repeat center center;
	background-size:100%;
	right:5px;
}

</style>
