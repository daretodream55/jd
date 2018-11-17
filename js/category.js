 //左侧栏的初始化
 var swiper = new Swiper('.category-left .swiper-container', {
      direction: 'vertical',
      slidesPerView: 'auto',
      freeMode: true
 });
 //右侧蓝初始化
 var swiper = new Swiper('.category-right .swiper-container', {
    direction: 'vertical',
    slidesPerView: 'auto',
    freeMode: true,
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    mousewheel: true,
});

//左侧侧栏的点击事件
var box=document.querySelector('.category-left .swiper-wrapper')
var liList=document.querySelectorAll('.category-left .swiper-slide li');
// console.log(liList);
for (let i = 0; i<liList.length; i++) {
    liList[i].index=i;
    liList[i].addEventListener('click',function () {
       var index=liList[i].index;
       var height=this.offsetHeight;
       var scrollY=-index*height;
       var minHeight=document.querySelector('.category-left').offsetHeight-this.offsetHeight*liList.length;
       if(scrollY<=minHeight){
           scrollY=minHeight;
       }
      box.style.transform="translateY("+scrollY+"px)";
      // box.style.transform="translate3d(0px,"+scrollY+"px,0px)";
       box.style.transition="all 0.3s";
       for(var j=0;j<liList.length;j++){
           liList[j].className="";
       }
    this.className+="active";
    })
}
