var carousel = document.getElementsByClassName('carouselQX')[0];
var carouselImgs = carousel.getElementsByTagName('img')[0];
var carouselBtns = carousel.getElementsByTagName('button');
var carouselB = carousel.getElementsByClassName('carousel-bottomQX')[0];
var cBottoms = carouselB.getElementsByTagName('span');
//图片轮播
var index = 0;
var max = 4;
var change = index;
//轮播上一张
function imgChangePrev() {
    if (change == index) {
        change = max;
    } else {
        change--;
    }
    carouselImgs.setAttribute('src', 'images/carousel' + change + '-qx.jpg');
    //随图片轮播 底部相应span变为hover样式
    for (var i = max; i >= 0; i--) {
        if (i == change) {
            cBottoms[i].className = 'c-bottom-hover';
        } else {
            cBottoms[i].className = 'c-bottom';
        }
    }
}
//轮播下一张
function imgChangeNext(){
    if(change == max){
        change = index;
    }else{
        change ++;
    }
    // console.log(change);
    carouselImgs.setAttribute('src','images/carousel' + change + '-qx.jpg');
    //随图片轮播 底部相应span变为hover样式
    for (var i = 0; i <= max; i++) {
        if (i == change) {
            cBottoms[i].className = 'c-bottom-hover';
        } else {
            cBottoms[i].className = 'c-bottom';
        }
    }
}
//每5s往下轮播一张图片  定时器
var timer = null;
clearInterval(timer);
timer = setInterval(function(){
    imgChangeNext();
},3000);

//鼠标移入轮播图片 显示button 暂停定时器  立即执行函数
carousel.onmouseenter = function(){
    //onmouseenter在鼠标指针进入 div 元素时触发，子元素不触发
    //onmouseover 事件在鼠标指针进入 div 元素时触发,在子元素上也会触发
    carouselBtns[0].style.display = 'block';
    carouselBtns[1].style.display = 'block';
    clearInterval(timer);
}
//鼠标移出 隐藏button  继续定时器
carousel.onmouseleave = function(){
    carouselBtns[0].style.display = 'none';
    carouselBtns[1].style.display = 'none';
    timer = setInterval(function(){
        imgChangeNext();
    },3000);
}

//轮播左右点击
carouselBtns[0].onclick = imgChangePrev;
carouselBtns[1].onclick = imgChangeNext;

//轮播底部span状态与当前播放图片绑定
for(var i = 0;i < cBottoms.length;i ++){
    // for循环内调用函数，且函数内需要调用循环的变量时，出现闭包，用立即执行函数
    (function (i){
        cBottoms[i].onmouseover = function(){
            // 排他
            for(var j = 0;j < cBottoms.length;j ++){
                cBottoms[j].className = 'c-bottom';
            }
            cBottoms[i].className = 'c-bottom-hover';
            // carouselImgs.setAttribute('src','imgs/carousel' + i + '-qx.jpg');
            carouselImgs.src = 'images/carousel' + i + '-qx.jpg';
        }

    })(i);
}