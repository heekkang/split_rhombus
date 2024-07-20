 
/*
function openLink16() {
  window.open('', '_blank');
}*/
/*설아 사전*/  

function openLink15() {
  window.open('https://zrihyyn.github.io/ingredients/', '_blank');
}
/*재현 식품 사전*/  


  function openLink14() {
    window.open('http://bookfragments.com', '_blank');
}
/*민정 사전*/
  
  function openLink13() {
    window.open('https://zrihyyn.github.io/Queneau/', '_blank');
}
/*재현 문체*/

  function openLink12() {
    window.open('https://zrihyyn.github.io/solar/', '_blank');
}

/*재현 양력*/

  function openLink11() {
    window.open('http://bookfragments.com', '_blank');
}
  function openLink10() {
    window.open('https://yyeon23.github.io/Yeon-SplitRhombus-Tail/', '_blank');
}
  function openLink9() {
    window.open('https://heekkang.github.io/bag/edit/edit.html', '_blank');
}

  function openLink8() {
    window.open('https://lineshape.github.io/fineDustLevel/', '_blank');
}

  function openLink7() {
    window.open('https://rosssou.github.io/DoomTheEarth/', '_blank');
}

  function openLink6() {
    window.open('https://yyeon23.github.io/Yeon-SplitRhombus-API', '_blank');
}
 
function openLink5() {
  window.open('https://heekkang.github.io/bag/news/news.html', '_blank');
}

function openLink4() {
  window.open('https://seolah-park.github.io/split_rhombus/', '_blank');
}


function openLink3() {
  window.open('https://rosssou.github.io/2023Repairmen/', '_blank');
}

function openLink2() {
  window.open('https://heekkang.github.io/bag/bird/bird.html', '_blank');
}

function openLink1() {
  window.open('https://yyeon23.github.io/Yeon-SplitRhombus-Archive/', '_blank');
}

const hoverDiv = document.querySelector('.container');
const hoverIcon = document.querySelector('.icon');

hoverDiv.addEventListener('mousemove', (e) => {
    hoverIcon.style.left = `${e.clientX - hoverDiv.offsetLeft}px`;
    hoverIcon.style.top = `${e.clientY - hoverDiv.offsetTop}px`;
    hoverIcon.style.display = 'block';
});

hoverDiv.addEventListener('mouseleave', () => {
    hoverIcon.style.display = 'none';
});



const inner = document.querySelector(".inner");
const section = document.querySelector("section");

window.onscroll = function() {
  let value = window.pageYOffset / section.offsetTop + 1;
  inner.style.transform = `scale(${value})`;
};


$(function(){
  
  var $window = $(window);    //Window object
  
  var scrollTime = 1.2;     //Scroll time
  var scrollDistance = 170;   //Distance. Use smaller value for shorter scroll and greater value for longer scroll
    
  $window.on("mousewheel DOMMouseScroll", function(event){
    
    event.preventDefault(); 
                    
    var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
    var scrollTop = $window.scrollTop();
    var finalScroll = scrollTop - parseInt(delta*scrollDistance);
      
    TweenMax.to($window, scrollTime, {
      scrollTo : { y: finalScroll, autoKill:true },
        ease: Power1.easeOut, //For more easing functions see https://api.greensock.com/js/com/greensock/easing/package-detail.html
        autoKill: true,
        overwrite: 5              
      });
          
  });
  
});


