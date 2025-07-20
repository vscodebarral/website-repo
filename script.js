// Seleciona o header e o hero
const header = document.getElementById('header');
const hero = document.querySelector('.hero.parallax');

// Função para controlar o zoom do background e header scrolled
window.addEventListener('scroll', () => {
  // Controle do header fixo
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }

  // Zoom progressivo da imagem de fundo da hero
  if (hero) {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    // Calcula escala de 100% até 120%
    const scale = 100 + Math.min((scrollY / windowHeight) * 20, 20);

    hero.style.backgroundSize = `${scale}%`;
  }
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
