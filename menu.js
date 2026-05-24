document.addEventListener('DOMContentLoaded', () => {

  //Henter de elementer fra html, som jeg arbejder med i JS
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const overlay = document.querySelector('.overlay');
  const navLinks = document.querySelectorAll('.nav-link'); //Bruger qsAll når der bruges flere elementer
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
  const dropdownMenus = document.querySelectorAll('.dropdown-menu');

  // 1. Toggle mobil-menu - åbn/luk mobil menu
  hamburger.addEventListener('click', (e) => { //Når bruger klikker påm ham-menu, kør funktionen
    e.stopPropagation(); //Stopper klikket fra at gå videre til dokumentet registrere så menu ikke lukker med det samme

    //Tilføj eller fjern active class på hamburgeren - css animation aktiveres
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    overlay.classList.toggle('active');
  });

//Tjekker om overlay findes på siden, så java ikke giver fejl på andre sider
if (overlay) {
  overlay.addEventListener('click', () => {
    closeMenu();
  });
}

  // 2. Klik på almindelige links → luk menu
  navLinks.forEach(link => { //Gennemgår alle links og gir click-event
    link.addEventListener('click', () => {
      if (link.classList.contains('dropdown-toggle')) return; //Hvis det er et dropdown link, skal menu ikke lukkes
      closeMenu();
    });
  });

  // 3. Dropdown (mobil)
  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      e.preventDefault(); //Stopper linket til at hoppe til ny side
      e.stopPropagation(); //Stopper klikket fra at også aktivere document click-e

      const parent = toggle.parentElement; // 🔥 dropdown div - finer dropdown parent-element
      const currentMenu = toggle.nextElementSibling; //Finder dropdown menuen som hører til linket

      // Luk alle andre dropdowns som ikke er aktuelle + reset pile
      dropdownMenus.forEach(menu => {
        if (menu !== currentMenu) {
          menu.classList.remove('active');
          menu.parentElement.classList.remove('open'); // 🔥 vigtigt
        }
      });

      // Toggle den aktuelle
      if (currentMenu) {
        const isOpen = currentMenu.classList.contains('active'); //Er dropdwn menu allerede åben

        currentMenu.classList.toggle('active');
        parent.classList.toggle('open', !isOpen); // 🔥 styrer pilen, tilføjer/fjerner open class = pilen kan rotere
      }
    });
  });

  // 4. Klik udenfor → luk alt
  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
      closeMenu(); //Så vi tjekker om. brugeren klikker udenfor menu
    }
  });

  // Helper function - funktion der bruges flere steder til at lukke menuen
  function closeMenu() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    overlay.classList.remove('active');

    // Luk alle dropdowns + reset pile
    dropdownMenus.forEach(menu => {
      menu.classList.remove('active');
      menu.parentElement.classList.remove('open'); // 🔥 reset pil
    });
  }

});
