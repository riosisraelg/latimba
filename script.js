/* ════════════════════════════════════════════════
   LATIMBA — Dynamic island navbar
   ════════════════════════════════════════════════ */

const island    = document.getElementById('island');
const toggleBtn = document.getElementById('menuToggle');
const backdrop  = document.getElementById('backdrop');
const logoLink  = document.getElementById('logoLink');
const wordmark  = document.getElementById('wordmarkLink');
const menuLinks = document.querySelectorAll('.menu-link');

function openMenu() {
  island.classList.add('is-open');
  document.body.classList.add('menu-open');
  toggleBtn.setAttribute('aria-expanded', 'true');
  toggleBtn.setAttribute('aria-label', 'Cerrar menú');
}

function closeMenu() {
  island.classList.remove('is-open');
  document.body.classList.remove('menu-open');
  toggleBtn.setAttribute('aria-expanded', 'false');
  toggleBtn.setAttribute('aria-label', 'Abrir menú');
}

function toggleMenu() {
  island.classList.contains('is-open') ? closeMenu() : openMenu();
}

toggleBtn.addEventListener('click', toggleMenu);
backdrop.addEventListener('click', closeMenu);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && island.classList.contains('is-open')) closeMenu();
});

/* Los links del menú cierran la isla y hacen scroll a la sección */
menuLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    closeMenu();
    setTimeout(() => {
      target && target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 350);
  });
});

/* Logo y wordmark: cerrar menú y volver arriba */
[logoLink, wordmark].forEach((el) => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    closeMenu();
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 350);
  });
});
