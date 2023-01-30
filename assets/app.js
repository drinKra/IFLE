
//rezise in every event made to viewport Start
window.onresize = function(event)
{
document.location.reload(true);

}
//rezise in every event made to viewport End



// preloading the loading GIF made from logo of IFLE
var loader = document.getElementById("loader", 5000);
window.addEventListener("load", function(){
loader.style.display="none"
})



// var preloader = document.getElementById('loader');
//     function preLoaderHandler(){
//     preloader.style.display = 'none';
//     }







// get the height of Slider from 100% of it's width -- Start
let slider = document.querySelector('.slider');
let width = slider.offsetWidth;
let height = Math.round(width / 2.2);
let heightPX = height + "px";
slider.style.height = heightPX;
// get the height of Slider from 100% of it's width -- End


// get the position Absolute based on 100% width for navigation tags -- Start
let navigationAuto = document.querySelector('.navigation-auto');             
let heightAdusted = height * 0.95 + 'px';
navigationAuto.style.top = height * 0.95 + 'px';

let navigationManual = document.querySelector('.navigation-manual');             
navigationManual.style.position = 'absolute';
navigationManual.style.top = height * 0.95 + 'px';




// let navigationSearch = document.querySelector('.navigation');             
// navigationSearch.style.position = 'absolute';
// navigationSearch.style.top = height * 0.9 + 'px';







// get the position Absolute based on 100% width for tags -- End









// script for automic slide photos shown -- Start

// var radioOne = document.getElementById('radio1')
// var radioTwo = document.getElementById('radio2')
// var radioThree = document.getElementById('radio3')
// var radioFour = document.getElementById('radio4')

var counter=1;

setInterval(function(){
   


    // if(radioOne.checked == true) {
    //     counter = 1
    //   }else if(radioTwo.checked == true) {
    //     counter = 2
    //   }else if(radioThree.checked == true) {
    //     counter = 3
    //   }else{
    //     counter = 4
    //   }
    document.getElementById('radio' + counter).checked=true;
    counter++;
    if(counter>4){
        counter=1;
    }
},8000);
// script for automic slide photos shown -- End





//script for navbar -- Start

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos &&  prevScrollpos <= height / 1.7) {
    document.getElementById("navbar").style.top = "30px";
  } else {
    document.getElementById("navbar").style.top = "-200px";
  }
  prevScrollpos = currentScrollPos;
}

//script for navbar -- Start













// script for automatic slide Text -- Start
const txts=document.querySelector(".animate-text").children,
       txtsLen=txts.length;
   let index=0;
  const textInTimer=8000,
        textOutTimer=8000;

function animateText() {
    for(let i=0; i<txtsLen; i++){
      txts[i].classList.remove("text-in","text-out");  
    }
    txts[index].classList.add("text-in");

    setTimeout(function(){
        txts[index].classList.add("text-out");              
    },textOutTimer)

    setTimeout(function(){

      if(index == txtsLen-1){
          index=0;
        }
       else{
           index++;
         }
        animateText();
    },textInTimer); 
}
 
 window.onload=animateText;
// script for automatic slide Text -- Ends





// var preloader = document.getElementById('loader');
//     function preLoaderHandler(){
//     preloader.style.display = 'none';
//     }

