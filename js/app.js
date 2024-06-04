const menu = document.querySelector("nav");
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        menu.classList.toggle("open");
    })
})

const overlay = document.querySelector(".overlay");

overlay.addEventListener("click", () => {
    menu.classList.remove("open");
})