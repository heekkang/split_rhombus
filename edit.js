$(document).ready(function() {
    const $details = $(".demo-details-jquery-accordion");
    const $summary = $details.find("summary");
  
    $summary.on("click", function(e) {
      e.preventDefault();
  
      const $this = $(this);
      const $details = $this.parent("details");
      const $content = $details.find(".content");
  
      if (!$details.attr("open")) {
        $details.prop("open", true);
        $content.stop().animate({ maxHeight: $content.get(0).scrollHeight }, 600);
      } else {
        $content.stop().animate({ maxHeight: 0 }, 300, function() {
          $details.prop("open", false);
        });
      }
    });
  });


  function openLink13() {
    window.open('https://zrihyyn.github.io/Queneau/', '_blank');
}

  function openLink12() {
    window.open('https://zrihyyn.github.io/solar/', '_blank');
}

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