


document.addEventListener('DOMContentLoaded', function() {
  const draggable = document.getElementById('draggable');
  let offsetX, offsetY;
  let isDragging = false;

  draggable.addEventListener('mousedown', function(e) {
      isDragging = true;
      offsetX = e.clientX - draggable.getBoundingClientRect().left;
      offsetY = e.clientY - draggable.getBoundingClientRect().top;
      draggable.style.cursor = 'grabbing';
  });

  document.addEventListener('mousemove', function(e) {
      if (isDragging) {
          draggable.style.left = e.clientX - offsetX + 'px';
          draggable.style.top = e.clientY - offsetY + 'px';
      }
  });

  document.addEventListener('mouseup', function() {
      if (isDragging) {
          isDragging = false;
          draggable.style.cursor = 'grab';
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



