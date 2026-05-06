document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Funktion til at åbne/lukke menuen ved klik på burger-ikonet
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Markér det aktive link (fra tidligere eksempel)
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath || (currentPath === '/' && link.getAttribute('href') === 'index.html')) {
            // Undgå at markere logoet som "aktivt" hvis det ikke er den primære navigation
            if (!link.classList.contains('nav-logo')) {
                 link.classList.add('active');
            }
        }

        // Luk menuen hvis et link klikkes (god UX på mobil)
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
});