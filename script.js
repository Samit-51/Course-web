let hamBurgerIcon = document.querySelector(".ham-burger");
let hamBurgerMenu = document.querySelector(".ham-burger-menu");
hamBurgerIcon.addEventListener("click", () => {
    hamBurgerMenu.classList.toggle("active");
});
window.addEventListener("resize", () => {
    if (window.innerWidth > 600) {
        hamBurgerMenu.classList.remove("active");
    }
});