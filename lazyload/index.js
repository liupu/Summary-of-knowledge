window.onload=function(){
    var oBox = document.getElementsByClassName("box");
    var oImg = document.getElementsByTagName("img");
    var oBoxw = oBox[0].offsetWidth;
    var col = 5;
    loadImg(oImg);
    window.onscroll = function(){
        loadImg(oImg);
    };
    function waterfall(ele,col,eleWidth){
        var hArr=[];
        for(var i=0;i<ele.length;i++){
            if(i < col){
                hArr.push(ele[i].offsetHeight);
            }else{
                var minH = Math.min.apply(null,hArr);
                var index = hArr.indexOf(minH);


                ele[i].style.position = "absolute";
                ele[i].style.top = minH+'px';
                ele[i].style.left = eleWidth*index+'px';
                hArr[index] += ele[i].offsetHeight;
            }
        }
    }
    function loadImg(arr){
        for(var i=0;i<arr.length;i++){
            if(arr[i].getBoundingClientRect().top<document.documentElement.clientHeight && !arr[i].isLoad){
                arr[i].isLoad = true;
                if(arr[i].dataset){
                    aftLoadImg(arr[i],arr[i].dataset.original);
                }else{
                    aftLoadImg(arr[i],arr[i].getAttribute("data-original"));
                }
                arr[i].style.cssText = "transition:opacity 10s; opacity:1;";
            }

        }
    }

    function aftLoadImg(obj,url){
        obj.src = url;
        waterfall(oBox,col,oBoxw);
    }
}