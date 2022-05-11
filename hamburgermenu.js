const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", moibile.menu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(function (n) {
    n.addEventListener("click", closeMenu);
});

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}