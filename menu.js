document.addEventListener('DOMContentLoaded', () => {

  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

  // 1. Åbn/luk selve mobil-menuen
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // 2. Håndter klik på links i menuen
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      
      // Hvis linket er en dropdown-toggle, så stop her 
      // (så menuen ikke lukker, når du bare vil åbne en dropdown)
      if (link.classList.contains('dropdown-toggle')) {
        return; 
      }
      
      // Ellers: luk menuen når et almindeligt link trykkes
      navMenu.classList.remove('active');
    });
  });

  // 3. Valgfri: Håndter klik på dropdown-toggle på mobil (hvis du vil have dem til at folde ud)
  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      // Forhindrer at siden hopper til toppen ved klik på #
      e.preventDefault();
      
      // Find den tilhørende dropdown-menu
      const dropdownMenu = toggle.nextElementSibling;
      
      // Toggle 'active' klassen på selve dropdown-menuen
      if (dropdownMenu) {
        dropdownMenu.classList.toggle('active');
      }
    });
  });

});