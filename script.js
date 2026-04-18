const mainNav = document.querySelector('.main_nav');
const dropdown = document.querySelector('.dropdown');
const header_btn = mainNav.querySelectorAll('button');

header_btn.forEach(btn => {
    btn.addEventListener('click', () => {
        dropdown.classList.toggle('show');
    });
});
