var slide = dif("slide"),
    box = dif("slide-box"),
    text = dif("slide-text"),
    play = dif("slide-run"),
    flag = false;
function dif(name){
    return document.getElementsByClassName(name)[0];
}
text.innerHTML = "请向右滑动解锁";
text.style.color = "#000";
slide.onmousedown = function(e){
    var slideX = e.clientX;
    this.onmousemove = function(e){
        var slideRadius = e.clientX - slideX ;
       if(slideRadius >= 0 ){
           this.style.left = slideRadius  + "px"; 
            play.style.width = slideRadius + "px";
       }
       if( slideRadius >= (box.offsetWidth - this.offsetWidth - 5)){
            flag = true;
            text.innerHTML = "验证成功";
            text.style.color = "#fff";
            this.onmousedown =null;
            this.onmousemove = null;
       }
    };
    document.onmouseup = function (){
        slide.onmousemove = null;
        if(flag) return;
        slide.style.left = 0 + "px";
        play.style.width = 0 + "px";
    }
}
