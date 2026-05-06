document.addEventListener("DOMContentLoaded", () => {

    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    // Dropdown mobil
    document.querySelectorAll(".dropdown").forEach(item => {
        item.addEventListener("click", () => {
            item.classList.toggle("active");
        });
    });

});
``