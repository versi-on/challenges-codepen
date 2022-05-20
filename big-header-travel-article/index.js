const header = document.getElementById("header");

window.addEventListener("scroll", () => {
    header.style.backgroundSize = 150 - +window.pageYOffset / 12 + "%";
    header.style.opacity = 1 - +window.pageYOffset / 700 + "";
});
