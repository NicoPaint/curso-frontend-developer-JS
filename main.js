const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

console.log(desktopMenu.classList);

function toggleDesktopMenu(){
    if(desktopMenu.getAttribute('class') == "desktop-menu inactive"){
        desktopMenu.setAttribute("class", "desktop-menu");
    }
    else if(desktopMenu.getAttribute('class') == "desktop-menu"){
        desktopMenu.setAttribute("class", "desktop-menu inactive");
    }
}