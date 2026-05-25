const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", (e) => {

    e.stopPropagation();

    navMenu.classList.toggle("active");
    hamburger.classList.toggle("active");

});

navMenu.addEventListener("click", (e) => {

    e.stopPropagation();

});

document.addEventListener("click", () => {

    navMenu.classList.remove("active");
    hamburger.classList.remove("active");

});