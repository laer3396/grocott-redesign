document.addEventListener('DOMContentLoaded', () => {

    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    // 🍔 Burger menu (åbn/luk)
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // ⭐ Markér aktiv side
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {

        if (
            link.getAttribute('href') === currentPath ||
            (currentPath === '/' && link.getAttribute('href') === 'index.html')
        ) {
            if (!link.classList.contains('nav-logo')) {
                link.classList.add('active');
            }
        }

        // ✅ Luk menu (kun hvis det IKKE er dropdown)
        link.addEventListener('click', (e) => {

            // hvis dropdown → stop
            if (link.classList.contains('dropdown-toggle')) {
                return;
            }

            // hvis rigtigt link → luk menu
            if (link.getAttribute('href') !== '#') {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });

    // 📱 Dropdown (mobil)
    dropdownToggles.forEach(toggle => {

        toggle.addEventListener('click', (e) => {

            // kun mobil
            if (window.innerWidth <= 768) {
                e.preventDefault();

                const currentMenu = toggle.nextElementSibling;

                // luk alle andre dropdowns (accordion)
                document.querySelectorAll('.dropdown-menu').forEach(menu => {
                    if (menu !== currentMenu) {
                        menu.classList.remove('active');
                    }
                });

                // toggle nuværende
                currentMenu.classList.toggle('active');
            }
        });

    });

});