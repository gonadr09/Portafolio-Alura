const navButton = document.querySelector(".menu__burguer");
const navMenu = document.querySelector(".menu__nav");

const burguer = document.querySelector(".menu__icon-burguer");
const x = document.querySelector(".menu__icon-x");

const navItems = document.querySelectorAll(".menu__list__item");

// mostrar/ocultar menú
navButton.addEventListener("click", () => {
    navMenu.classList.toggle("nav-active");
    burguer.classList.toggle("menu_hidden");
    x.classList.toggle("menu_hidden");
});

// ocultar menú al hacer click en un link
navItems.forEach( item => item.addEventListener("click", () => {
    navMenu.classList.remove("nav-active");
    burguer.classList.remove("menu_hidden");
    x.classList.add("menu_hidden");
    })
)


