let hamBurgerIcon = document.querySelector(".ham-burger");
let hamBurgerMenu = document.querySelector(".ham-burger-menu");
let closebtn = document.querySelector('.close-btn');
hamBurgerIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    hamBurgerMenu.classList.toggle("active");
});
window.addEventListener("resize", () => {
    if (window.innerWidth > 600) {
        hamBurgerMenu.classList.remove("active");
    }
});

window.addEventListener('click', (e) => {
    if(hamBurgerMenu.classList.contains('active') && !e.target.closest('.ham-burger-menu')){
        hideHamBurger();
    }
});

function hideHamBurger(){
    hamBurgerMenu.classList.remove("active");
}