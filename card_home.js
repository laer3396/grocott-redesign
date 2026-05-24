// Lavet i samarbejde med AI (Copilot) - rettet og tilpasset af Mathilde
// SE AI PROMPT DOKUMENT FOR MERE INFO OM KODEN

// Venter på, at alt HTML er indlæst, så koden ikke fejler
document.addEventListener("DOMContentLoaded", () => {
    
    // FEJLFINDING: Jeg tester at filen er hentet rigtigt
    console.log("Scriptet er indlæst korrekt!");

    // DOM: Hent elementer (slides og prikker) i HTML'en og gemmer dem i lister (NodeLists)
    const slideElements = document.querySelectorAll(".testimonial-slide");
    const dotElements = document.querySelectorAll(".dot");

     // Henter piltaster i slideren
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    
    // ARRAYS: Jeg laver NodeListen om til et rigtigt Array
    const slides = Array.from(slideElements);
    const dots = Array.from(dotElements);
    
   // En global variabel der holder styr på og husker, hvilket slide brugeren ser lige nu
    let currentSlide = 0; 

    // Funktion der modtager et tal (slideIndex) for at bestemme, hvilket slide der skal vises.
    function changeSlide(slideIndex) {

        // Et for-loop der fjerner "active"-klassen fra alle slides og prikker.
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove("active");
            dots[i].classList.remove("active");
        }

    // Gør det valgte slide og den matchende prik synlig (via CSS), og opdaterer placeringen.
        slides[slideIndex].classList.add("active");
        dots[slideIndex].classList.add("active");
        
        currentSlide = slideIndex;
    }

    // Loop der automatisk giver alle prikker en klik-funktion og sender prikkens indeks videre.
    for (let i = 0; i < dots.length; i++) {
        dots[i].addEventListener("click", () => {
            changeSlide(i);  // Aargument, faktiske værdi, vi giver til funktioen.
        });
    }

   // Klik-event på Næste: Hvis vi er på det sidste slide, går vi til start (0), ellers lægger vi 1 til.
    nextBtn.addEventListener("click", () => {
    
        if (currentSlide === slides.length - 1) {
            changeSlide(0);
        } else {
            changeSlide(currentSlide + 1);
        }
    });

    // Klik-event på Forrige: Hvis vi står på første slide (0), hopper vi til det sidste, ellers trækker vi 1 fra.
    prevBtn.addEventListener("click", () => {
        if (currentSlide === 0) {
            changeSlide(slides.length - 1);
        } else {
            changeSlide(currentSlide - 1);
        }
    });
});