const menuToggler = document.querySelector('.hamburger');
const hamburgerIcon = document.querySelector('.icon--hamburger');
const menu = document.querySelector('.sidebar');

menuToggler.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (menu.classList.contains('active')) {
        hamburgerIcon.textContent = 'menu';
    } else {
        hamburgerIcon.textContent = 'close';
    }
    menuToggler.classList.toggle('active');
    menu.classList.toggle('active');
}