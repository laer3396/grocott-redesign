 // 
document.addEventListener("DOMContentLoaded", () => {
    
    // FEJLFINDING: Vi logger for at se, at scriptet overhovedet kører
    console.log("Scriptet er indlæst korrekt!");

    // DOM: Hent elementer
    const slideElements = document.querySelectorAll(".testimonial-slide");
    const dotElements = document.querySelectorAll(".dot");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    
    // ARRAYS: Vi laver NodeListen om til et ægte Array for at krydse 'Arrays' af i pensum
    const slides = Array.from(slideElements);
    const dots = Array.from(dotElements);
    
    // VARIABLE SCOPE & LET: En variabel der kan ændre sig globalt i dette scope
    let currentSlide = 0; 

    // FUNKTIONER: Genanvendelig funktion
    function changeSlide(slideIndex) {
        // KONTROLSTRUKTUR (LOOPS): Vi bruger et klassisk for-loop i stedet for forEach
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove("active");
            dots[i].classList.remove("active");
        }

        slides[slideIndex].classList.add("active");
        dots[slideIndex].classList.add("active");
        
        currentSlide = slideIndex;
    }

    // EVENTS & LOOPS: Klassisk loop til at tildele klik-events til prikkerne
    for (let i = 0; i < dots.length; i++) {
        dots[i].addEventListener("click", () => {
            changeSlide(i); // OPERATOR: Sender det aktuelle 'i' med som argument
        });
    }

    // EVENT & KONTROLSTRUKTUR: Klik på NÆSTE-pil
    nextBtn.addEventListener("click", () => {
        // OPERATORER & KONTROLSTRUKTUR (if-else)
        if (currentSlide === slides.length - 1) {
            changeSlide(0);
        } else {
            changeSlide(currentSlide + 1);
        }
    });

    // EVENT & KONTROLSTRUKTUR: Klik på FORRIGE-pil
    prevBtn.addEventListener("click", () => {
        if (currentSlide === 0) {
            changeSlide(slides.length - 1);
        } else {
            changeSlide(currentSlide - 1);
        }
    });
});