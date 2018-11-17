
window.addEventListener('load',function () {
    setOpacity();
})
setOpacity();

function setOpacity() {
    //顶部的滚动事件
    window.addEventListener('scroll',function () {
        //获取滚动的距离
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        //轮播图高度
        var height = document.getElementById('slider').offsetHeight;
        //header
        var header = document.querySelector('#header');
        var opacity = scrollTop / height;
        if (opacity <= 1) {
            header.style.backgroundColor = 'rgba(222, 24, 27,' + opacity + ')';
        } else {
            header.style.backgroundColor = 'rgba(222, 24, 27,1)';
        }
    })
}

//轮播图
var mySwiper = new Swiper('.swiper-container',{
    autoplay: true,//可选选项，自动滑动
    pagination: {
        el: '.swiper-pagination',
    },
})

//秒杀
//未来的时间
var future=new Date(2018,10,14,20,0,0).getTime();
console.log(future);
//现在时间
var now=new Date().getTime();
// console.log(now);
var time=Math.floor((future-now)/1000);
// console.log(time);
setInterval(function () {
   time--;
   if(time<=0){
    time=7200;
   }
    var hour=Math.floor(time/3600);
    // console.log(hour);
    var min=Math.floor(time/60%60);
    // console.log(min);
    var sec=Math.floor(time%60);
    // console.log(sec);
    var spans=document.querySelectorAll('.seckill-time span');
    spans[0].innerText=Math.floor(hour/10);
    spans[1].innerText=Math.floor(hour%10);
    spans[3].innerText=Math.floor(min/10);
    spans[4].innerText=Math.floor(min%10);
    spans[6].innerText=Math.floor(sec/10);
    spans[7].innerText=Math.floor(sec%10);
},1000)

