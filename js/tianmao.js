window.onload=function(){
    var wodetaobao=$(".wodetaobao")[0];
    var taobaoyc=$(".wodeyc")[0];
    var wodea=$(".wodea")[0];
       wodetaobao.onmouseover=function(){

            taobaoyc.style.display="block";
          wodea.style.color="red";
        }
        wodetaobao.onmouseout=function(){
            taobaoyc.style.display="none";
           wodea.style.color="#A0A0A0";
        }

    var shoucangj=$(".shoucangj")[0];
    var shoucanglis=$(".shoucanglis")[0];
    shoucangj.onmouseover=function(){

        shoucanglis.style.display="block";
    }
    shoucangj.onmouseout=function(){
        shoucanglis.style.display="none";
    }

    var shoujiban=$(".shoujiban")[0];
    var erweimabox=$(".erweimabox")[0];
    shoujiban.onmouseover=function(){

        erweimabox.style.display="block";
    }
    shoujiban.onmouseout=function(){
        erweimabox.style.display="none";
    }

    var shangjiazhic=$(".shangjiazhic")[0];
    var shangjialis=$(".shangjialis")[0];
   shangjiazhic.onmouseover=function(){

        shangjialis.style.display="block";
    }
    shangjiazhic.onmouseout=function(){
        shangjialis.style.display="none";
    }

    var wangzhandh=$(".wangzhandh")[0];
    var wangzhanlis=$(".wangzhanlis")[0];
    wangzhandh.onmouseover=function(){

        wangzhanlis.style.display="block";
    }
    wangzhandh.onmouseout=function(){
        wangzhanlis.style.display="none";
    }

  /*轮播部分*/
    var win=$(".lunbobox")[0];
    var as=$("a",win)
    var lis=$("li",$(".point")[0]);
    var num=0;

        var stop=setInterval(lunboR,2000);

        win.onmouseover=function(){
            clearInterval(stop);

        }
        win.onmouseout=function(){
            stop=setInterval(lunboR,2000);
        }
    function lunboR(){
        num++;
        if(num==as.length){
            num=0;
        }
        for(var i=0;i<as.length;i++){
            animate(as[i],{opacity:0});
            lis[i].className="";
        }

        animate(as[num],{opacity:1})
        lis[num].className="point_hot";

    }



        for(var i=0;i<lis.length;i++){
            lis[i].index=i;
            lis[i].onclick=function(){
                for(var j=0;j<as.length;j++){
                    animate(as[j],{opacity:0});
                    lis[j].className="";
                }
                lis[this.index].className="point_hot";
                animate(as[this.index],{opacity:1});
                num=this.index;
            }
        }

    /*品牌街覆盖图*/
    var xiaogezi=$(".xiaogezi");
    var fugai=$(".fugaibox");
    for(var i=0;i<xiaogezi.length;i++){
        xiaogezi[i].index=i;
        xiaogezi[i].onmousemove= function () {
           fugai[this.index].style.display="block"
        }
        xiaogezi[i].onmouseout= function () {
            fugai[this.index].style.display="none"
        }
    }
    var xiaogezidiyou=$(".xiaogezidiyou")[0];
    var fugai1=$(".fugaibox1")[0];
        xiaogezidiyou.onmousemove=function(){
        fugai1.style.display="block";
    }
    xiaogezidiyou.onmouseout=function(){
        fugai1.style.display="none";
    }



    var floor=$(".floor");

    var arr=[];
    for (var i = 0; i <floor.length; i++) {

        arr.push(floor[i].offsetTop)

    }

    var heights=document.documentElement.clientHeight;
    var search=$(".search")[0];


    var lis1=$("li",$(".jump")[0]);
    var flag=true;
    for (var i=0;i<lis1.length;i++){
        lis1[i].index=i;
        lis1[i].onclick=function(){
            flag=false;
            for (var j = 0; j < lis1.length; j++) {
                lis1[j].style.background="#626262";
            }
            lis1[this.index].style.background="#DD2727";

            /*	var obj=document.body.scrollTop?
             document.body:document.documentElement;*/
            animate(document.body,{scrollTop:arr[this.index]},function(){
                flag=true;
            })
            animate(document.documentElement,{scrollTop:arr[this.index]},function(){
                flag=true;
            })
        }
    }


    //滚动事件  按需加载：滚轮滚动的距离+窗口可视区域高度>=当前楼层到页面顶部的距离

    var sflag=true;
    window.onscroll=function(){
        //实时获取当前状态滚轮滚动的距离
        var obj=document.body.scrollTop?document.body:document.documentElement;
        var scrolltop=obj.scrollTop;
        /*   var scrolltop=document.documentElement.scrollTop;*/ //火狐
   /*     for (var i = 0; i<floor.length; i++) {
            if (scrolltop+heights>=arr[i]+100) {
                var imgs=$("img",floor[i]);
                for (var j = 0; j< imgs.length; j++) {
                    imgs[j].src=imgs[j].getAttribute("imgpath")
                }
            }

        }*/
        //搜索框


        if(scrolltop>=arr[0]){
            if(sflag){
                sflag=false;
                animate(search,{top:0})
            }

        }else{
            if(!sflag){
                sflag=true;
                animate(search,{top:-50})
            }

        }

//楼层按钮
        if(!flag){
            return;
        }
        for (var i = 0; i <floor.length; i++) {
            if(scrolltop+heights>=arr[i]+100){
                for (var j= 0; j < lis1.length; j++) {
                    lis1[j].style.background="#626262";
                }
                lis1[i].style.background="#DD2727";
            }
        }

    }

      //图片移动效果
    var imges=$(".bwhlt");

    for(var i=0;i<imges.length;i++){
        imges[i].index=i;
        imges[i].onmouseover=function(){
            animate(imges[this.index],{right:-10})
        }
        imges[i].onmouseout=function(){
            animate(imges[this.index],{right:-20})
        }
    }

    var mao=$(".mao");
    var tou=$(".xiaomao");

    for(var i=0;i<mao.length;i++){

        mao[i].index=i;

        mao[i].onmouseover= function () {
            animate(tou[this.index],{top:-10},300)

        }
        mao[i].onmouseout= function () {
            animate(tou[this.index],{top:0},200)

        }
    }

  var cedao001=$(".cedao001")[0];

    var xxk1=$(".xuanxiangka1")[0];
    cedao001.onmouseover=function(){
        xxk1.style.display="block";
    }
    cedao001.onmouseout=function(){
        xxk1.style.display="none";
    }


}