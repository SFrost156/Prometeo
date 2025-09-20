// app.js - comportamiento simple para menú móvil (hamburger)
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const burgerOpen = document.getElementById('hamburger-open');
  const burgerClose = document.getElementById('hamburger-close');

  function openMenu() {
    mobileMenu.classList.remove('hidden');
    mobileMenu.classList.add('open');
    burgerOpen.classList.add('hidden');
    burgerClose.classList.remove('hidden');
  }

  function closeMenu() {
    mobileMenu.classList.add('hidden');
    mobileMenu.classList.remove('open');
    burgerOpen.classList.remove('hidden');
    burgerClose.classList.add('hidden');
  }

  let menuOpen = false;

  hamburger.addEventListener('click', function () {
    menuOpen = !menuOpen;
    if (menuOpen) openMenu();
    else closeMenu();
  });

  // Cierra el menú si se cambia a escritorio (resize)
  window.addEventListener('resize', function () {
    if (window.innerWidth >= 768) {
      menuOpen = false;
      closeMenu();
    }
  });

  // Mejora: cerrar menú al tocar un enlace en móvil
  document.querySelectorAll('#mobile-menu a').forEach(a => {
    a.addEventListener('click', () => {
      menuOpen = false;
      closeMenu();
    });
  });
});
