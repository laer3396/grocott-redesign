document.addEventListener("DOMContentLoaded", () => {
    
    const slides = document.querySelectorAll(".testimonial-slide");
    const dots = document.querySelectorAll(".dot");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    
    // Vi bruger 'let' her (Variable scope), fordi dette tal skal kunne ændre sig
    let currentSlide = 0; 

    // Funktionen der skifter slide (Genbrugelig funktion)
    function changeSlide(slideIndex) {
        slides.forEach(slide => slide.classList.remove("active"));
        dots.forEach(dot => dot.classList.remove("active"));

        slides[slideIndex].classList.add("active");
        dots[slideIndex].classList.add("active");
        
        // Opdater vores globale tæller, så pilene ved hvor vi er
        currentSlide = slideIndex;
    }

    // EVENT: Klik på prikkerne
    dots.forEach(dot => {
        dot.addEventListener("click", (e) => {
            const targetSlide = parseInt(e.target.getAttribute("data-slide"));
            changeSlide(targetSlide);
        });
    });

    // EVENT: Klik på NÆSTE-pil
    nextBtn.addEventListener("click", () => {
        // KONTROLSTRUKTUR (if-else): Hvis vi er på det sidste slide, går vi tilbage til start (0)
        if (currentSlide === slides.length - 1) {
            changeSlide(0);
        } else {
            // Ellers tæller vi 1 op
            changeSlide(currentSlide + 1);
        }
    });

    // EVENT: Klik på FORRIGE-pil
    prevBtn.addEventListener("click", () => {
        // KONTROLSTRUKTUR (if-else): Hvis vi er på første slide, går vi til det sidste slide
        if (currentSlide === 0) {
            changeSlide(slides.length - 1);
        } else {
            // Ellers trækker vi 1 fra
            changeSlide(currentSlide - 1);
        }
    });
});