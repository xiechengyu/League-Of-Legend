var ul = document.getElementsByTagName('ul')[0];
var middle = document.getElementsByClassName('lol_header_middle')[0];
var renwu = document.getElementsByClassName('renwu')[0];
var down = document.getElementsByClassName('down')[0];
// var bottom = document.getElementsByClassName('lol_header_bottom')[0];
var a1 = document.getElementsByClassName('a1')[0];
var a2 = document.getElementsByClassName('a2')[0];
console.log(a1);
ul.onmouseover = function () {
    middle.style.display = 'block';
    middle.onmouseover = function () {
        middle.style.display = 'block';
    }
    middle.onmouseout = function () {
        middle.style.display = 'none';
    }

}

renwu.onmouseover = function () {
    down.style.display = 'block';
    down.onmouseover = function () {
        down.style.display = 'block';
    }
    down.onmouseout = function () {
        down.style.display = 'none';
    }
}

a1.onmouseover = function () {
    a1.style.opacity = '1';
}
a1.onmouseout = function () {
    a1.style.opacity = '0.7';
}
a2.onmouseover = function () {
    a2.style.opacity = '1';
}
a2.onmouseout = function () {
    a2.style.opacity = '0.8';
}