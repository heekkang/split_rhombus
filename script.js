document.addEventListener('DOMContentLoaded', function() {
    const menuToggles = document.querySelectorAll('.menu-toggle');
    const menus = document.querySelectorAll('.menu');

    menuToggles.forEach(function(menuToggle, index) {
        menuToggle.addEventListener('click', function() {
            // 각 .menu-toggle과 같은 인덱스를 가진 .menu를 활성화
            menus[index].classList.toggle('active');
        });
    });
});