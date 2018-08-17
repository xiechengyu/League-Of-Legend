//左侧JS
var sdh = document.getElementsByClassName('daohang')[0];
var nr = document.getElementsByClassName('neirong')[0];
var li = sdh.getElementsByTagName('li');
var ul = nr.getElementsByTagName('ul');
for(var i = 0;i < li.length; i ++){
    li[i].index = i;
    li[i].onmouseover = function () {
        for(i = 0;i < li.length; i ++){
            li[i].className = '';
            ul[i].className = 'neirong1';
        }
        this.className = 'active';
        ul[this.index].className = 'show';
    }
}

//左侧内容特效
    var a = nr.getElementsByTagName('a');
    var qz = nr.getElementsByClassName('qz');
    for(var i = 0;i < a.length;i ++){
    (function (i) {
        a[i].onmouseover = function () {
            for(var j =0;j < a.length;j ++){
                qz[j].style.background = '#ebebeb';
                qz[j].style.color = '#555555';
                a[j].style.color = '#555555';
            }
            qz[i].style.background = '#d1ab57';
            qz[i].style.color = '#fff';
            a[i].style.color = '#d1ab57';}
    }(i))
}

//右侧选项卡
var sdh1 = document.getElementsByClassName('daohang')[1];
var nr1 = document.getElementsByClassName('neirong1')[0];
var lis = sdh1.getElementsByTagName('li');
var nr2 = nr1.getElementsByTagName('div');
for(var j = 0;j < lis.length; j ++){
    lis[j].index = j;
    lis[j].onmouseover = function () {
        for(j = 0;j < lis.length; j ++){
            lis[j].className = '';
            nr2[j].className = '';
        }
        this.className = 'active1';
        nr2[this.index].className = 'show1';
    }
}

//右侧鼠标放置特效
var img = nr1.getElementsByTagName('img');
var span = nr1.getElementsByTagName('span');
for(var i = 3;i < span.length; i ++) {
    (function (i) {
        img[i].onmouseover = function () {
            for (var j = 3; j < span.length; j++) {
                span[j].style.display = 'none';
            }
            span[i].style.display = 'block';
        }
    }(i))
}
    //扩展按钮
    var btn = document.getElementsByTagName('button')[0];
    var sj1 = document.getElementsByTagName('p')[0];
    var nr3 = nr1.getElementsByTagName('div')[2];
    btn.onclick = function () {
        nr3.style.overflow = 'visible';
        btn.style.display = 'none';
        btn1.style.display = 'block';
        sj1.className = 'sj2';
    }
    var btn1 = document.getElementsByTagName('button')[1];
    btn1.onclick = function () {
        nr3.style.overflow = 'hidden';
        btn1.style.display = 'none';
        btn.style.display = 'block';
        sj1.className = 'sj1';
    }


