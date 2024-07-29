const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function menuAnimation(){

    
var menu = document.querySelector("nav h3")
var full = document.querySelector("#full-scr")
var navimg = document.querySelector("nav img")
var flag = 0
menu.addEventListener("click",function(){
    if(flag == 0){
        full.style.top = 0
        navimg.style.opacity = 0
        flag = 1
    }
    else{
        full.style.top = "-100%"
        navimg.style.opacity = 1
        flag = 0

    }
})
}
function page4Animation(){
    var elemc=document.querySelector("#elem-container")
var fixed=document.querySelector("#fixed-image")
elemc.addEventListener("mouseenter",function(){
    fixed.style.display="block"
})
elemc.addEventListener("mouseleave",function(){
    fixed.style.display="none"
})


var elems = document.querySelectorAll(".elem")
elems.forEach( function(e){
    e.addEventListener("mouseenter", function(){
            var image = e.getAttribute("data-image")
            fixed.style.backgroundImage =` url(${image})`

    })

})
}

function swiperAnimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
      });
}
function loaderAnimarion(){
    var loader = document.querySelector("#loader")
setTimeout(function(){
    loader.style.top = "-100%"
},4200)
}
swiperAnimation()
page4Animation()
menuAnimation()
loaderAnimarion()

var image = document.querySelector("#img")
image.addEventListener("mouseenter",function(){
    image.style.right = 0
})
var image = document.querySelector("#img")
image.addEventListener("mouseleave",function(){
    image.style.right = "-45%"
})



var img = document.querySelector("#img2")
img.addEventListener("mouseenter",function(){
    img.style.right = 0
})
var img = document.querySelector("#img2")
img.addEventListener("mouseleave",function(){
    img.style.right = "-45%"
})



var dp = document.querySelector("#img3")
dp.addEventListener("mouseenter",function(){
    dp.style.right = 0
})
var dp = document.querySelector("#img3")
dp.addEventListener("mouseleave",function(){
    dp.style.right = "-45%"
})





var ime = document.querySelector("#img4")
ime.addEventListener("mouseenter",function(){
    ime.style.right = 0
})
var ime = document.querySelector("#img4")
ime.addEventListener("mouseleave",function(){
    ime.style.right = "-45%"
})





var imi = document.querySelector("#img5")
imi.addEventListener("mouseenter",function(){
    imi.style.right = 0
})
var imi = document.querySelector("#img5")
imi.addEventListener("mouseleave",function(){
    imi.style.right = "-45%"
})




var imp = document.querySelector("#img6")
imp.addEventListener("mouseenter",function(){
    imp.style.right = 0
})
var imp = document.querySelector("#img6")
imp.addEventListener("mouseleave",function(){
    imp.style.right = "-45%"
})



var imn = document.querySelector("#img7")
imn.addEventListener("mouseenter",function(){
    imn.style.right = 0
})
var imn = document.querySelector("#img7")
imn.addEventListener("mouseleave",function(){
    imn.style.right = "-45%"
})





var imm = document.querySelector("#img8")
imm.addEventListener("mouseenter",function(){
    imm.style.right = 0
})
var imm = document.querySelector("#img8")
imm.addEventListener("mouseleave",function(){
    imm.style.right = "-30%"
})


