document.addEventListener('DOMContentLoaded', () => {

  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
  const dropdownMenus = document.querySelectorAll('.dropdown-menu');

  // 1. Toggle mobil-menu
  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();

    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // 2. Klik på almindelige links → luk menu
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (link.classList.contains('dropdown-toggle')) return;

      closeMenu();
    });
  });

  // 3. Dropdown (mobil)
  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      const currentMenu = toggle.nextElementSibling;

      // Luk alle andre dropdowns
      dropdownMenus.forEach(menu => {
        if (menu !== currentMenu) {
          menu.classList.remove('active');
        }
      });

      // Toggle den aktuelle
      if (currentMenu) {
        currentMenu.classList.toggle('active');
      }
    });
  });

  // 4. Klik udenfor → luk alt
  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
      closeMenu();
    }
  });

  // ✅ Helper function
  function closeMenu() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');

    // Luk alle dropdowns
    dropdownMenus.forEach(menu => {
      menu.classList.remove('active');
    });
  }

});