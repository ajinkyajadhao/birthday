function unlockHeart(){
    document.getElementById("topText").style.display="none";
    document.getElementById("canvas").style.display="none";
    document.getElementById("key").style.display="none";
    document.getElementById("keyhole").style.display="none";

    startSlideshow();
}
function startSlideshow(){

    const slideshow=document.getElementById("slideshow");
    slideshow.style.opacity="1";

    let images=[];
    for(let i=1;i<=10;i++){
        let img=document.createElement("img");
        img.src="ar"+i+".png";   // ar1.png to ar10.png
        img.className="slide-img";
        slideshow.appendChild(img);
        images.push(img);
    }

    let index=0;

    function showNext(){
        if(index<images.length){
            images[index].classList.add("show");
            index++;
            setTimeout(showNext,500);
        }else{
            setTimeout(()=>{
                moveLastToCenter(images[9]);
            },800);
        }
    }

    showNext();
}

function moveLastToCenter(img){

    document.getElementById("photoText").innerText=
    "Hold my wifey’s cheeks ❤️";

    document.getElementById("photoText").style.display="block";

    img.style.position="absolute";
    img.style.width="200px";
    img.style.height="260px";
    img.style.left="50%";
    img.style.top="50%";
    img.style.transform="translate(-50%,-50%) scale(1.2)";
    img.style.zIndex="200";
    img.style.cursor="pointer";

    img.onclick=function(){
        document.getElementById("slideshow").style.display="none";
        document.getElementById("photoText").style.display="none";
        showGift();
    }
}

function showGift(){
    let gift=document.getElementById("finalGift");
    gift.style.display="flex";

    let box=document.querySelector(".gift-box");
    box.onclick=function(){
        box.classList.add("open");
    }
}