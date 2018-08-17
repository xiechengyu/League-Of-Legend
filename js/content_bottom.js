
    window.onload=function(){
        var conbtm=document.getElementsByClassName('content_bottom')[0];
        console.log(conbtm);
        var aLi=conbtm.getElementsByTagName('li');
        console.log(aLi.length);

        var oCon=document.getElementsByClassName('bottom_content')[0];
        console.log(oCon);
        var aDiv=oCon.getElementsByClassName('bottomdiv');
        console.log(aDiv);
        for(var i=0;i<aLi.length;i++){
            aLi[i].index=i;   //为每个li添加对应的索引index
            aLi[i].onmouseover=function()
                 { //循环为每个li添加onclick事件
                     for(var i=0;i<aLi.length;i++){

                         aLi[i].className='';  //循环清空li样式
                        aDiv[i].style.display='none';  //循环隐藏所有div
                }
                this.className='current';  //当前点击的元素样式变成active
                aDiv[this.index].style.display='block';    //this.index 获取当前li对应的索引
            }
        }

        /*var bdiv = document.getElementsByClassName('bottom_content')[0];
        console.log(bdiv);
        var span = bdiv.getElementsByTagName('span');

        bdiv.onmouseover = function () {
            span.style.display = block;
        }*/
    }
