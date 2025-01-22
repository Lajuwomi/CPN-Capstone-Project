// Getting neccessary element 
const menuButton = document.getElementById("menu-button");
const menu = document.getElementById("menu");
const close = "images/close.svg";
const hamburger = "images/hamburger.svg";

menuButton.addEventListener("click", function () {
    menu.classList.toggle("flex");

    menuButton.firstElementChild.src = menuButton.firstElementChild.src.includes(close) ? hamburger : close ;
})