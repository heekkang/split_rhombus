/*document.addEventListener('DOMContentLoaded', function() {
    const menuToggles = document.querySelectorAll('.menu-toggle');
    const menus = document.querySelectorAll('.menu');

    menuToggles.forEach(function(menuToggle, index) {
        menuToggle.addEventListener('click', function() {
            // 각 .menu-toggle과 같은 인덱스를 가진 .menu를 활성화
            menus[index].classList.toggle('active');
        });
    });
});
*/

document.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.name');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const maxBlur = 10; // 최대 블러 정도 (픽셀)
    
    // 원하는 블러 효과를 계산 (예: 스크롤 위치의 0.1배)
    const blurValue = Math.min(scrollTop * 0.01, maxBlur);
  
    // 각 요소에 블러 효과 적용
    elements.forEach(element => {
      element.style.filter = `blur(${blurValue}px)`;
    });
  });
  