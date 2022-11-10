const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

console.log(desktopMenu.classList);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle("inactive");
}