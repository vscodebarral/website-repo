// Animação simples ao rolar (efeito fade-in para as seções)
const sections = document.querySelectorAll('.section, .hero-content');

window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add('visible');
    }
  });

  // Alterar fundo do header ao rolar
  const header = document.getElementById('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Inicializar opacidade e transform no carregamento
window.addEventListener('load', () => {
  sections.forEach(section => {
    section.classList.remove('visible');
  });
});

// Menu hamburguer toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('nav ul.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
});

// Fechar menu ao clicar em um link (em mobile)
document.querySelectorAll('nav ul.nav-links li a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    hamburger.classList.remove('active');
  });
});
